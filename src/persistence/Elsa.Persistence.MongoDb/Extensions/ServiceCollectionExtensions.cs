using System;
using Elsa.Persistence.MongoDb.Options;
using Elsa.Persistence.MongoDb.Services;
using Elsa.Persistence.MongoDb.Stores;
using Elsa.Runtime;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Elsa.Persistence.MongoDb.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static ElsaOptions UseMongoDbPersistence(this ElsaOptions elsa, Action<ElsaMongoDbOptions> configureOptions) => UseMongoDbPersistence<ElsaMongoDbContext>(elsa, configureOptions);
        
        public static ElsaOptions UseMongoDbPersistence<TDbContext>(this ElsaOptions elsa, Action<ElsaMongoDbOptions> configureOptions) where TDbContext: ElsaMongoDbContext
        {
            AddCore<TDbContext>(elsa);
            elsa.Services.Configure(configureOptions);

            return elsa;
        }

        public static ElsaOptions UseMongoDbPersistence(this ElsaOptions elsa, IConfiguration configuration) => UseMongoDbPersistence<ElsaMongoDbContext>(elsa, configuration);

        public static ElsaOptions UseMongoDbPersistence<TDbContext>(this ElsaOptions elsa, IConfiguration configuration) where TDbContext: ElsaMongoDbContext
        {
            AddCore<TDbContext>(elsa);
            elsa.Services.Configure<ElsaMongoDbOptions>(configuration);
            return elsa;
        }

        private static void AddCore<TDbContext>(ElsaOptions elsa) where TDbContext : ElsaMongoDbContext
        {
            elsa.Services
                .AddSingleton<MongoDbWorkflowDefinitionStore>()
                .AddSingleton<MongoDbWorkflowInstanceStore>()
                .AddSingleton<MongoDbWorkflowExecutionLogStore>()
                .AddSingleton<MongoDbBookmarkStore>()
                .AddSingleton<TDbContext>()
                .AddSingleton<ElsaMongoDbContext, TDbContext>()
                .AddSingleton(sp => sp.GetRequiredService<TDbContext>().WorkflowDefinitions)
                .AddSingleton(sp => sp.GetRequiredService<TDbContext>().WorkflowInstances)
                .AddSingleton(sp => sp.GetRequiredService<TDbContext>().WorkflowExecutionLog)
                .AddSingleton(sp => sp.GetRequiredService<TDbContext>().Bookmarks)
                .AddStartupTask<DatabaseInitializer>();

            elsa
                .UseWorkflowDefinitionStore(sp => sp.GetRequiredService<MongoDbWorkflowDefinitionStore>())
                .UseWorkflowInstanceStore(sp => sp.GetRequiredService<MongoDbWorkflowInstanceStore>())
                .UseWorkflowExecutionLogStore(sp => sp.GetRequiredService<MongoDbWorkflowExecutionLogStore>())
                .UseWorkflowTriggerStore(sp => sp.GetRequiredService<MongoDbBookmarkStore>());
            
            DatabaseRegister.RegisterMapsAndSerializers();
        }
    }
}

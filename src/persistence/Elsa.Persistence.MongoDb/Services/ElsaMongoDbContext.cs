using Elsa.Models;
using Elsa.Persistence.MongoDb.Options;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Elsa.Persistence.MongoDb.Services
{
    public class ElsaMongoDbContext
    {
        public ElsaMongoDbContext(IOptions<ElsaMongoDbOptions> options)
        {
            var connectionString = options.Value.ConnectionString;
            var mongoClient = new MongoClient(connectionString);
            var databaseName = options.Value.Db is not null and not "" ? options.Value.Db : MongoUrl.Create(connectionString).DatabaseName;
            MongoDatabase = mongoClient.GetDatabase(databaseName);
        }
        
        protected IMongoDatabase MongoDatabase { get; }

        public IMongoCollection<WorkflowDefinition> WorkflowDefinitions => MongoDatabase.GetCollection<WorkflowDefinition>(CollectionNames.WorkflowDefinitions);
        public IMongoCollection<WorkflowInstance> WorkflowInstances => MongoDatabase.GetCollection<WorkflowInstance>(CollectionNames.WorkflowInstances);
        public IMongoCollection<WorkflowExecutionLogRecord> WorkflowExecutionLog => MongoDatabase.GetCollection<WorkflowExecutionLogRecord>(CollectionNames.WorkflowExecutionLog);
        public IMongoCollection<Bookmark> Bookmarks => MongoDatabase.GetCollection<Bookmark>(CollectionNames.Bookmarks);
    }
}

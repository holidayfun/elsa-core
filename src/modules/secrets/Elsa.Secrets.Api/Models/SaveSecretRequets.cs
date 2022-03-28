using Elsa.Secrets.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Elsa.Secrets.Api.Models
{
    public sealed class SaveSecretRequet
    {
        public string? ActivityId { get; set; } = default!;
        public string Type { get; set; } = default!;
        public string? Name { get; set; }
        public string? DisplayName { get; set; }
        public string? Description { get; set; }
        public ICollection<SecretProperty> Properties { get; set; } = new List<SecretProperty>();
    }
}
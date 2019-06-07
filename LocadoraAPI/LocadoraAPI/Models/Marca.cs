using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace LocadoraAPI.Models
{
    public partial class Marca
    {
        public Marca()
        {
            Veiculo = new HashSet<Veiculo>();
        }

        public int IdMarca { get; set; }
        public string DsMarca { get; set; }
        public int IdModelo { get; set; }

        public Modelo IdModeloNavigation { get; set; }

        [JsonIgnore]
        public ICollection<Veiculo> Veiculo { get; set; }
    }
}

using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace LocadoraAPI.Models
{
    public partial class Modelo
    {
        public Modelo()
        {
            Veiculo = new HashSet<Veiculo>();
        }

        public int IdModelo { get; set; }
        public string DsModelo { get; set; }
        public int IdMarca { get; set; }

        public Marca IdMarcaNavigation { get; set; }

        [JsonIgnore]
        public ICollection<Veiculo> Veiculo { get; set; }
    }
}

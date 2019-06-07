using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace LocadoraAPI.Models
{
    public partial class Modelo
    {
        public Modelo()
        {
            Marca = new HashSet<Marca>();
        }

        public int IdModelo { get; set; }
        public string DsModelo { get; set; }


        [JsonIgnore]
        public ICollection<Marca> Marca { get; set; }
    }
}

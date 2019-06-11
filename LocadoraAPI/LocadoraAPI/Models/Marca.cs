using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace LocadoraAPI.Models
{
    public partial class Marca
    {
        public Marca()
        {
            Modelo = new HashSet<Modelo>();
        }

        public int IdMarca { get; set; }
        public string DsMarca { get; set; }

        public ICollection<Modelo> Modelo { get; set; }
    }
}

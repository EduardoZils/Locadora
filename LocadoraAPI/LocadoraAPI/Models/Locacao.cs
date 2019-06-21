using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace LocadoraAPI.Models
{
    public partial class Locacao
    {
        public int IdLocacao { get; set; }
        public int IdVeiculo { get; set; }
        public int IdCliente { get; set; }
        public DateTime DtLocacao { get; set; }
        public DateTime DtDevolucao { get; set; }

        [JsonIgnore]
        public Cliente Cliente { get; set; }
        [JsonIgnore]
        public Veiculo Veiculo { get; set; }
    }
}

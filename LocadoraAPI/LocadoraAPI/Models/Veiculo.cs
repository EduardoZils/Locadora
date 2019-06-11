using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace LocadoraAPI.Models
{
    public partial class Veiculo
    {
        public Veiculo()
        {
            Locacao = new HashSet<Locacao>();
        }

        public int IdVeiculo { get; set; }
        public string DsVeiculo { get; set; }
        public string CorVeiculo { get; set; }
        public string PlacaVeiculo { get; set; }
        public int AnoVeiculo { get; set; }
        public double PrecoVeiculo { get; set; }
        public bool? Alugado { get; set; }
        public int IdModelo { get; set; }

        public Modelo Modelo { get; set; }

        [JsonIgnore]
        public ICollection<Locacao> Locacao { get; set; }
    }
}

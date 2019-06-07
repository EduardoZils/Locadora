using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace LocadoraAPI.Models
{
    public partial class Cliente
    {
        public Cliente()
        {
            Locacao = new HashSet<Locacao>();
        }

        public int IdCliente { get; set; }
        public string NmCliente { get; set; }
        public string Cnh { get; set; }
        public string Endereco { get; set; }
        public string Telefone { get; set; }

        [JsonIgnore]
        public ICollection<Locacao> Locacao { get; set; }
    }
}

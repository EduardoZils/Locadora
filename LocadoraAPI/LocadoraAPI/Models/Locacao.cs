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
        public bool Pagamento { get; set; }

        public Cliente IdClienteNavigation { get; set; }
        public Veiculo IdVeiculoNavigation { get; set; }
    }
}

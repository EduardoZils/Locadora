using LocadoraAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraAPI.Mappings
{
    public class LocacaoMap : IEntityTypeConfiguration<Locacao>
    {
        public void Configure(EntityTypeBuilder<Locacao> entity)
        {
            entity.HasKey(e => new { e.IdLocacao, e.IdVeiculo, e.IdCliente });

            entity.ToTable("locacao");

            entity.Property(e => e.IdLocacao)
                .HasColumnName("id_locacao")
                .ValueGeneratedOnAdd();

            entity.Property(e => e.IdVeiculo).HasColumnName("id_veiculo");

            entity.Property(e => e.IdCliente).HasColumnName("id_cliente");

            entity.Property(e => e.DtDevolucao)
                .HasColumnName("dt_devolucao")
                .HasColumnType("date");

            entity.Property(e => e.DtLocacao)
                .HasColumnName("dt_locacao")
                .HasColumnType("date");

            entity.Property(e => e.Pagamento).HasColumnName("pagamento");

            entity.HasOne(d => d.IdClienteNavigation)
                .WithMany(p => p.Locacao)
                .HasForeignKey(d => d.IdCliente)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("cliente_locacao_fk");

            entity.HasOne(d => d.IdVeiculoNavigation)
                .WithMany(p => p.Locacao)
                .HasForeignKey(d => d.IdVeiculo)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("veiculo_locacao_fk");
        }
    }
}

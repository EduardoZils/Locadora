using LocadoraAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraAPI.Mappings
{
    public class VeiculoMap : IEntityTypeConfiguration<Veiculo>
    {
        public void Configure(EntityTypeBuilder<Veiculo> entity)
        {
            entity.HasKey(e => e.IdVeiculo);

            entity.ToTable("veiculo");

            entity.Property(e => e.IdVeiculo).HasColumnName("id_veiculo");

            entity.Property(e => e.Alugado).HasColumnName("alugado");

            entity.Property(e => e.AnoVeiculo).HasColumnName("ano_veiculo");

            entity.Property(e => e.CorVeiculo)
                .IsRequired()
                .HasColumnName("cor_veiculo")
                .HasColumnType("character varying");

            entity.Property(e => e.DsVeiculo)
                .IsRequired()
                .HasColumnName("ds_veiculo")
                .HasColumnType("character varying");

            entity.Property(e => e.IdModelo).HasColumnName("id_modelo");

            entity.Property(e => e.PlacaVeiculo)
                .IsRequired()
                .HasColumnName("placa_veiculo")
                .HasColumnType("character varying");

            entity.Property(e => e.PrecoVeiculo).HasColumnName("preco_veiculo");

            entity.HasOne(d => d.Modelo)
                .WithMany(p => p.Veiculo)
                .HasForeignKey(d => d.IdModelo)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("modelo_veiculo_fk");
        }
    }
}

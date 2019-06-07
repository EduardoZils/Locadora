using LocadoraAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraAPI.Mappings
{
    public class ModeloMap : IEntityTypeConfiguration<Modelo>
    {
        public void Configure(EntityTypeBuilder<Modelo> entity)
        {
            entity.HasKey(e => e.IdModelo);

            entity.ToTable("modelo");

            entity.Property(e => e.IdModelo)
                .HasColumnName("id_modelo")
                .HasDefaultValueSql("nextval('modelo_id_modelo_seq_1_1'::regclass)");

            entity.Property(e => e.DsModelo)
                .IsRequired()
                .HasColumnName("ds_modelo")
                .HasColumnType("character varying");

            entity.Property(e => e.IdMarca).HasColumnName("id_marca");

            entity.HasOne(d => d.IdMarcaNavigation)
                .WithMany(p => p.Modelo)
                .HasForeignKey(d => d.IdMarca)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("marca_modelo_fk");
        }
    }
}

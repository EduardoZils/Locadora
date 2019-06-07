using LocadoraAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraAPI.Mappings
{
    public class MarcaMap : IEntityTypeConfiguration<Marca>
    {
        public void Configure(EntityTypeBuilder<Marca> entity)
        {
            entity.HasKey(e => e.IdMarca);

            entity.ToTable("marca");

            entity.Property(e => e.IdMarca)
                .HasColumnName("id_marca")
                .HasDefaultValueSql("nextval('marca_id_marca_seq_1'::regclass)");

            entity.Property(e => e.DsMarca)
                .IsRequired()
                .HasColumnName("ds_marca")
                .HasColumnType("character varying");
        }
    }
}

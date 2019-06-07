using LocadoraAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraAPI.Mappings
{
    public class ClienteMap : IEntityTypeConfiguration<Cliente>
    {
        public void Configure(EntityTypeBuilder<Cliente> entity)
        {
            entity.HasKey(e => e.IdCliente);

            entity.ToTable("cliente");

            entity.Property(e => e.IdCliente).HasColumnName("id_cliente");

            entity.Property(e => e.Cnh)
                .IsRequired()
                .HasColumnName("cnh")
                .HasColumnType("character varying");

            entity.Property(e => e.Endereco)
                .HasColumnName("endereco")
                .HasColumnType("character varying");

            entity.Property(e => e.NmCliente)
                .IsRequired()
                .HasColumnName("nm_cliente")
                .HasColumnType("character varying");

            entity.Property(e => e.Telefone)
                .HasColumnName("telefone")
                .HasColumnType("character varying");
        }
    }
}

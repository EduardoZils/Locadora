using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LocadoraAPI.Models;

namespace LocadoraAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VeiculoesController : ControllerBase
    {
        private readonly locadoradbContext _context;

        public VeiculoesController(locadoradbContext context)
        {
            _context = context;
        }

        // GET: api/Veiculoes
        [HttpGet]
        public IEnumerable<Veiculo> GetVeiculo()
        {
            return _context.Veiculo;
        }

        // GET: api/Veiculoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetVeiculo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var veiculo = await _context.Veiculo.FindAsync(id);

            if (veiculo == null)
            {
                return NotFound();
            }

            return Ok(veiculo);
        }

        // PUT: api/Veiculoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVeiculo([FromRoute] int id, [FromBody] Veiculo veiculo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != veiculo.IdVeiculo)
            {
                return BadRequest();
            }

            _context.Entry(veiculo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VeiculoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Veiculoes
        [HttpPost]
        public async Task<IActionResult> PostVeiculo([FromBody] Veiculo veiculo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Veiculo.Add(veiculo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVeiculo", new { id = veiculo.IdVeiculo }, veiculo);
        }

        // DELETE: api/Veiculoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVeiculo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var veiculo = await _context.Veiculo.FindAsync(id);
            if (veiculo == null)
            {
                return NotFound();
            }

            _context.Veiculo.Remove(veiculo);
            await _context.SaveChangesAsync();

            return Ok(veiculo);
        }

        private bool VeiculoExists(int id)
        {
            return _context.Veiculo.Any(e => e.IdVeiculo == id);
        }
    }
}
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
    public class ModeloesController : ControllerBase
    {
        private readonly locadoradbContext _context;

        public ModeloesController(locadoradbContext context)
        {
            _context = context;
        }

        // GET: api/Modeloes
        [HttpGet]
        public IEnumerable<Modelo> GetModelo()
        {
            return _context.Modelo;
        }

        // GET: api/Modeloes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetModelo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var modelo = await _context.Modelo.FindAsync(id);

            if (modelo == null)
            {
                return NotFound();
            }

            return Ok(modelo);
        }

        // PUT: api/Modeloes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutModelo([FromRoute] int id, [FromBody] Modelo modelo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != modelo.IdModelo)
            {
                return BadRequest();
            }

            _context.Entry(modelo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ModeloExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(modelo);
        }

        // POST: api/Modeloes
        [HttpPost]
        public async Task<IActionResult> PostModelo([FromBody] Modelo modelo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Modelo.Add(modelo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetModelo", new { id = modelo.IdModelo }, modelo);
        }

        // DELETE: api/Modeloes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModelo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var modelo = await _context.Modelo.FindAsync(id);
            if (modelo == null)
            {
                return NotFound();
            }

            _context.Modelo.Remove(modelo);
            await _context.SaveChangesAsync();

            return Ok(modelo);
        }

        private bool ModeloExists(int id)
        {
            return _context.Modelo.Any(e => e.IdModelo == id);
        }
    }
}
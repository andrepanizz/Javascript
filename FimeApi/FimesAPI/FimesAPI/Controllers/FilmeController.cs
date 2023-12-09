using Microsoft.AspNetCore.Mvc;

namespace FimesAPI.Controllers
{

    [ApiController]
    [Route("controller")]
    public class FilmeController : ControllerBase
    {

        private static List<Filme> filmes = new List<Filme>();
        /* Ela será static porque queremos manter a classe
         * Queremos ter um metodo pronto para cadastrar no sistema*/
        public void AdicionaFilme(Filme filme)
        {
            /*Precisamos receber alguma informação! vamos receber um parametro  */
            filmes.Add(filme);
            /*Nota que precisamos criar nossa lista de filmes, tanto nosso objeto */

        }
    }
}

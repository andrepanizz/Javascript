using System.Reflection.Metadata.Ecma335;

namespace FimesAPI.Models
{
    public class Filmes
    {
        /*- Um filme basicamente tem:
         -> Um titulo;
         -> Tempo de Duração;
         -> Genero 
         */

        /*Vamos criando nossa propriedade: Titulo, genero, Duração*/
        public string Titulo { get; set; }
        public string Genero { get; set; }
        public int    Duracao { get; set; }
        
    }   
}

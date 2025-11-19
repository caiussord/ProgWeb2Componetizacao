import Banner from '../../components/Banner';
import Category from '../../components/Container/Category/Cards';

const actionMovies = [
  { id: 10, posterUrl: '/image 42.svg', title: 'Tropa de Elite' },
  { id: 11, posterUrl: '/image 43.svg', title: 'Mundo Cão' },
  { id: 12, posterUrl: '/image 44.svg', title: 'Cidade de Deus' },
  { id: 13, posterUrl: '/image 45.svg', title: 'Alemão 2' },
  { id: 14, posterUrl: '/image 46.svg', title: 'Operações Especiais' },
];

const comedyMovies = [
  { id: 20, posterUrl: '/image 18.svg', title: 'Os Homens são de Marte' },
  { id: 21, posterUrl: '/image 19.svg', title: 'Se eu Fosse Você' },
  { id: 22, posterUrl: '/image 20.svg', title: 'Até que a Sorte' },
  { id: 23, posterUrl: '/image 22.svg', title: 'O Candidato Honesto' },
  { id: 24, posterUrl: '/image 26.svg', title: 'Vizinhos' },
];

function Home() {
  return (
    <main>
      <Banner />
      
      <Category title="Clássicos" /> 
      
      <Category title="Ação" movies={actionMovies} />
      
      <Category title="Comédia" movies={comedyMovies} />
    </main>
  );
}

export default Home;
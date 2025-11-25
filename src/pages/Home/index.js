import { useContext } from 'react';
import Banner from '../../components/Banner';
import Category from '../../components/Container/Category/Cards';
import { SearchContext } from '../../context/SearchContext';

const classicMoviesData = [
{id:25, posterUrl: '/image 18.svg', title: 'Cidade de Deus' }, 
{ id: 26, posterUrl: '/image 19.svg', title: 'Olga' },
{id:27, posterUrl: '/image 22.svg', title: 'Central do Brasil' }, 
{id:28, posterUrl: '/image 29.svg', title: 'Xuxa Abracadrabra' }, 
]

const actionMoviesData = [
  { id: 10, posterUrl: '/image 40.svg', title: 'Tropa de Elite' },
  { id: 11, posterUrl: '/image 20.svg', title: 'Mundo Cão' },
  { id: 12, posterUrl: '/image 18.svg', title: 'Cidade de Deus' },
  { id: 13, posterUrl: '/image 42.svg', title: 'Alemão 2' },
  { id: 14, posterUrl: '/image 43.svg', title: 'Operações Especiais' },
];

const comedyMoviesData = [
  { id: 20, posterUrl: '/image 31.svg', title: 'Os Homens são de Marte' },
  { id: 22, posterUrl: '/image 26.svg', title: 'Até que a Sorte nos Separe' },
  { id: 23, posterUrl: '/image 45.svg', title: 'O Candidato Honesto' },
  { id: 24, posterUrl: '/image 46.svg', title: 'Vizinhos' },
  { id: 30, posterUrl: '/image 44.svg', title: 'Se eu Fosse Você' },
];

function Home() {
  const { searchTerm } = useContext(SearchContext);

  const filterMovies = (movies) => {
    if (!searchTerm) return movies;
    return movies.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredClassic = filterMovies(classicMoviesData);
  const filteredAction = filterMovies(actionMoviesData);
  const filteredComedy = filterMovies(comedyMoviesData);

  return (
    <main>
      {!searchTerm && <Banner />}

         {filteredClassic.length > 0 && (
        <Category title="Clássicos" movies={filteredClassic} />
      )}

      {filteredAction.length > 0 && (
        <Category title="Ação" movies={filteredAction} />
      )}
      
      {filteredComedy.length > 0 && (
        <Category title="Comédia" movies={filteredComedy} />
      )}

      {searchTerm &&  filteredClassic.length === 0 && filteredAction.length === 0 && filteredComedy.length === 0 && (
        <div style={{ padding: '40px', textAlign: 'center', color: '#004116' }}>
            <h2>Nenhum filme encontrado para "{searchTerm}"</h2>
        </div>
      )}
    </main>
  );
}

export default Home;
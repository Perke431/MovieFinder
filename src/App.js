import './App.css';
import HomeList from './components/HomeList';
import Search from './components/Search';

import movies from './data/Data';

function App() {

  const featured = [movies[0], movies[1], movies[2], movies[3]];
  const newest = [movies[4], movies[5], movies[6], movies[7]];
  const bestRated = [movies[1], movies[20], movies[21], movies[13]];

  return(
    <main>
      <Search></Search>
      <HomeList arr={featured} title={'Featured'} />
      <HomeList arr={newest} title={'Newest'} />
      <HomeList arr={bestRated} title={'Best rated'} />
    </main>
  );
}

export default App;

import './App.css';
import Row from './component/Row';
import requests from './Request';
import Banner from './component/Banner';
import Navi from './component/Navi';


function App() {

  return (
    <div className="App">
    <Navi/>
    <Banner/>
    <Row isPoster={true} tittle='NetflixOriginals' fetchUrl={requests.fetchNetflixOriginals}/>
    <Row tittle='Trending' fetchUrl={requests.fetchTrending}/>
    <Row tittle='TopRated' fetchUrl={requests.fetchTopRated}/>
    <Row tittle='ActionMovies' fetchUrl={requests.fetchActionMovies}/>
    <Row tittle='ComedyMovies' fetchUrl={requests.fetchComedyMovies}/>
    <Row tittle='HorrorMovies' fetchUrl={requests.fetchHorrorMovies}/>
    <Row tittle='RomanceMovies' fetchUrl={requests.fetchRomanceMovies}/>
    <Row tittle='Documentaries' fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;

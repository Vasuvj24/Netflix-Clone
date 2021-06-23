// import logo from './logo.svg';
import './App.css';
import Row from './Row'
import requests from './request';
import Banner from './Banner'
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      {/* WE USED 1 COMPONENT AND MADE MANY BY JUST USING ONE COMPONENT OVER AND OVER AGAIN */}
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      {/* <Row title="Documentries" fetchUrl={requests.fetchDocumentries}/>  */}
    </div>
  );
}

export default App;

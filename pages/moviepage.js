import Banner from "../components/moviepage/Banner";
import Navbar from "../components/moviepage/Navbar";
import Row from "../components/moviepage/Row";
import requests from "../utils/requests";

function MoviePage() {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <main className="relative pb-24 lg:space-y-24 ">
        <Navbar />
        <div className="lg:pl-16 pl-4 ">
          <Banner />

          <section className="md:space-y-24">
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top rated" fetchUrl={requests.fetchTopRated} />

            <Row title="Action" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default MoviePage;

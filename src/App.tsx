import AlbumView from "./components/AlbumView";
import Footer from "./components/Footer";
import MusicVideo from "./components/MusicVideo";
import Navbar from "./components/Navbar";
import StreamPlatforms from "./components/StreamPlatforms";
import TrackList from "./components/TrackList";

function App() {
  return (
    <div className="relative">
      <section className="relative">
        <Navbar />
        {/* Background image -------------------------------------------------*/}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/assets/eternal-sunshine.jpg')" }}
        />
        {/* Blur overlay ------------------------------------------------- */}
        <div className="absolute inset-0 bg-custom-black/25 backdrop-blur-sm" />
        {/* Vignette overlay ------------------------------------------------- */}
        <div className="absolute inset-0 bg-gradient-to-t from-custom-black/100 via-transparent to-transparent" />
        <div className="wrapper-padding-x">
          <AlbumView />
        </div>
      </section>

      {/* Other components ------------------------------------------------- */}
      <section className="wrapper-padding-x bg-custom-black">
        <StreamPlatforms />
        <TrackList />
        <MusicVideo />
        <Footer />
      </section>
    </div>
  );
}

export default App;

import AlbumView from "./components/AlbumView";
import Navbar from "./components/Navbar";
import StreamPlatforms from "./components/StreamPlatforms";
import TrackList from "./components/TrackList";

function App() {
  return (
    <div className="relative bg-custom-black">
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
      <section className="wrapper-padding-x">
        <StreamPlatforms />
        <TrackList />
      </section>
    </div>
  );
}

export default App;

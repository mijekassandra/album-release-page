import YouTube from "react-youtube";

const MusicVideo = () => {
  return (
    <div className="flex flex-col gap-6 py-6">
      <h2 className="heading-font">Music Video</h2>
      <div className="aspect-video w-full mb-16">
        <YouTube
          videoId="KNtJGQkC-WI"
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 0,
            },
          }}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default MusicVideo;

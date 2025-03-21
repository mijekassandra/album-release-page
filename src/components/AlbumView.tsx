import Button from "./Button";
import { FiPlay, FiShare2 } from "react-icons/fi";

const AlbumView = () => {
  return (
    <div className="relative min-h-screen w-full ">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-20 py-20">
        <section className="flex items-center">
          <img src="/assets/eternal-sunshine.jpg" className="w-[430px]" />
        </section>
        <section className="flex flex-1 flex-col gap-8">
          <div className="flex flex-col gap-3 justify-center w-full">
            <h2
              className="text-h4 text-center max-w-full uppercase tracking-widest md:text-left md:text-h2"
              style={{
                WebkitTextStroke: "1px white",
                color: "transparent",
              }}
            >
              Eternal Sunshine
            </h2>
            <h4 className="text-h6 text-center max-w-[600px] uppercase md:text-left md:text-h4">
              Ariana Grande
            </h4>
          </div>
          <div className="flex gap-2 mt-4">
            <Button
              variant="primary"
              size="medium"
              leftIcon={<FiPlay size={14} />}
            >
              Listen Now
            </Button>
            <Button
              variant="outline"
              size="medium"
              leftIcon={<FiShare2 size={14} />}
            >
              Share
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AlbumView;

import React from "react";
import { FiPlay, FiShare2 } from "react-icons/fi"; // Import Feather icons

// Define track interface
interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
}

// Sample tracks data
const tracks: Track[] = [
  {
    id: 1,
    title: "Intro (End of the World)",
    artist: "Ariana Grande",
    duration: "1:41",
  },
  {
    id: 2,
    title: "Bye",
    artist: "Ariana Grande",
    duration: "2:42",
  },
  {
    id: 3,
    title: "Don't Wanna Break Up Again",
    artist: "Ariana Grande",
    duration: "3:11",
  },
  {
    id: 4,
    title: "Saturn Returns Interlude",
    artist: "Ariana Grande",
    duration: "0:48",
  },
  {
    id: 5,
    title: "Eternal Sunshine",
    artist: "Ariana Grande",
    duration: "3:30",
  },
  {
    id: 6,
    title: "Supernatural",
    artist: "Ariana Grande",
    duration: "3:09",
  },
  {
    id: 7,
    title: "True Story",
    artist: "Ariana Grande",
    duration: "2:42",
  },
  {
    id: 8,
    title: "The Boy Is Mine",
    artist: "Ariana Grande",
    duration: "2:47",
  },
  {
    id: 9,
    title: "Yes, And?",
    artist: "Ariana Grande",
    duration: "3:35",
  },
  {
    id: 10,
    title: "We Can't Be Friends (Wait for Your Love)",
    artist: "Ariana Grande",
    duration: "3:35",
  },
  {
    id: 11,
    title: "I Wish I Hated You",
    artist: "Ariana Grande",
    duration: "2:42",
  },
  {
    id: 12,
    title: "Imperfect for You",
    artist: "Ariana Grande",
    duration: "3:10",
  },
];

const TrackList = () => {
  return (
    <div className="flex flex-col gap-6 py-10">
      <h2 className="text-h3 uppercase text-center lg:text-left lg:text-h2">
        Track List
      </h2>

      <table className="w-full">
        <tbody>
          {tracks.map((track) => (
            <tr
              key={track.id}
              className="text-custom-white flex justify-between w-full"
            >
              <div className="flex">
                <td className="py-4 w-10 flex items-start h-full">
                  <p className="text-base md:text-lg">{track.id}</p>
                </td>
                <td className="py-4 w-10 flex items-start h-full">
                  <button className="pt-1">
                    <FiPlay className="text-lg md:text-xl" />
                  </button>
                </td>

                <div className="flex flex-1 flex-col min-w-0 mr-4">
                  <td className="py-4 flex flex-col items-start h-full">
                    <p className="text-lg font-semibold md:text-xl">
                      {track.title}
                    </p>
                    <p className="text-xs text-gray-600 md:text-base">
                      {track.artist}
                    </p>
                  </td>
                </div>
              </div>

              <div className="flex items-start shrink-0">
                <td className="py-4 w-10 flex items-start h-full">
                  <p className="text-base font-semibold md:text-lg">
                    {track.duration}
                  </p>
                </td>
                <td className="py-4 w-10 text-right">
                  <div className="flex items-start justify-end h-full">
                    <button className="pt-1">
                      <FiShare2 className="text-lg md:text-xl" />
                    </button>
                  </div>
                </td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackList;

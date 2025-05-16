import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";

const VideoPlayer = () => {
  const [getData, setGetData] = useState(null);
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [loading, setLoading] = useState(true);
  const [playerError, setPlayerError] = useState(false);
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Disable right-click and dev tools
    const disableContextMenu = (e) => e.preventDefault();
    const disableKeys = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U') ||
        e.key === 'PrintScreen'
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', disableContextMenu);
    document.addEventListener('keydown', disableKeys);

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', disableKeys);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/recording/specificData/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const data = res.data?.recording;
        setGetData(data || null);
        if (data?.vLink) {
          setIsValidUrl(validateYouTubeUrl(data.vLink));
        }
      })
      .catch(() => {
        setPlayerError(true);
      })
      .finally(() => setLoading(false));
  }, [BASE_URL, id]);

  const validateYouTubeUrl = (url) => {
    try {
      const parsed = new URL(url);
      return (
        parsed.hostname.includes("youtube.com") ||
        parsed.hostname.includes("youtu.be")
      );
    } catch {
      return false;
    }
  };

  const transformToEmbedUrl = (url) => {
    try {
      const parsed = new URL(url);
      let videoId = "";

      if (parsed.hostname.includes("youtu.be")) {
        videoId = parsed.pathname.slice(1);
      } else {
        videoId = parsed.searchParams.get("v");
      }

      return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=0&fs=0&disablekb=1`;
    } catch {
      return url;
    }
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleSeek = (seconds) => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(Math.max(0, currentTime + seconds), "seconds");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500 border-b-2"></div>
      </div>
    );
  }

  if (playerError || !getData) {
    return (
      <div className="text-center text-red-500 mt-10">
        ভিডিওটি লোড করা যায়নি বা ভিডিও পাওয়া যায়নি।
      </div>
    );
  }

  return (
    <div className="container px-6 mx-auto grid">
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        <b>ক্লাস টপিকসঃ</b> {getData?.record_name || "N/A"}
      </h2>
      <hr />

      <div className="relative w-full pt-[56.25%] select-none">
        {/* Overlay div to prevent interaction outside controls */}
        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          onContextMenu={(e) => e.preventDefault()}
          style={{ pointerEvents: "none" }}
        />

        {isValidUrl ? (
          <>
            <ReactPlayer
              ref={playerRef}
              url={transformToEmbedUrl(getData.vLink)}
              className="absolute top-0 left-0"
              width="100%"
              height="100%"
              playing={playing}
              controls={false}
              config={{
                youtube: {
                  playerVars: {
                    disablekb: 1,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                    fs: 0,
                  },
                },
              }}
            />

            {/* Custom Controls */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-8 z-20 pointer-events-auto">
              <button
                onClick={() => handleSeek(-10)}
                className="p-2 bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80"
                aria-label="Rewind 10 seconds"
              >
                <SkipBack size={24} />
              </button>

              <button
                onClick={handlePlayPause}
                className="p-3 bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? <Pause size={32} /> : <Play size={32} />}
              </button>

              <button
                onClick={() => handleSeek(10)}
                className="p-2 bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80"
                aria-label="Forward 10 seconds"
              >
                <SkipForward size={24} />
              </button>
            </div>
          </>
        ) : (
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded mt-4">
            এই ভিডিওটি শুধুমাত্র নির্দিষ্ট ব্যবহারকারীদের জন্য প্রযোজ্য।
          </div>
        )}
      </div>

      <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
        <p className="text-blue-700 font-medium">
          নোট: এই ভিডিওটি শুধুমাত্র দেখার জন্য। শেয়ার করা বা ডাউনলোড করা নিষিদ্ধ।
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;

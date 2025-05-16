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
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const playerRef = useRef(null);
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Disable context menu and developer tools
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      alert("Right-click is disabled to protect content");
    };

    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U') ||
        e.key === 'PrintScreen'
      ) {
        e.preventDefault();
        alert("This action is not permitted");
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    setPlayerError(false);

    axios
      .get(`${BASE_URL}/recording/specificData/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const foundData = res.data?.recording || null;
        setGetData(foundData);
        if (foundData?.vLink) {
          setIsValidUrl(validateYouTubeUrl(foundData.vLink));
        } else {
          setPlayerError(true);
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setPlayerError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [BASE_URL, id]);

  const validateYouTubeUrl = (url) => {
    try {
      const parsed = new URL(url);
      return (
        (parsed.hostname.includes("youtube.com") ||
          parsed.hostname.includes("youtu.be")) &&
        (parsed.pathname.includes("/watch") ||
          parsed.pathname.includes("/embed") ||
          parsed.pathname.includes("/v/") ||
          parsed.pathname.startsWith("/") ||
          parsed.searchParams.has("v"))
      );
    } catch {
      return false;
    }
  };

  const transformUnlistedUrl = (url) => {
    try {
      const parsed = new URL(url);
      let videoId = "";

      if (parsed.hostname.includes("youtu.be")) {
        videoId = parsed.pathname.slice(1);
      } else {
        videoId = parsed.searchParams.get("v") || parsed.pathname.split("/").pop();
      }

      return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0&controls=0&fs=0&enablejsapi=1`;
    } catch {
      return url;
    }
  };

  const handlePlayerError = (error) => {
    console.error("Player error:", error);
    setPlayerError(true);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleForward = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime + 10, "seconds");
    }
  };

  const handleBackward = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(Math.max(0, currentTime - 10), "seconds");
    }
  };

  const handleProgress = (state) => {
    setPlayedSeconds(state.playedSeconds);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (playerError) {
    return (
      <div className="container px-6 mx-auto grid">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-6 rounded">
          <p className="font-medium">Failed to load video. Please check the URL.</p>
          <p className="text-sm mt-2">Please contact support if this persists.</p>
          {getData?.vLink && (
            <div className="mt-3 p-2 bg-gray-100 rounded text-xs break-all">
              <span className="font-semibold">URL:</span> {getData.vLink}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="container px-6 mx-auto grid">
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        <b>ক্লাস টপিকসঃ</b> {getData?.record_name || "N/A"}
      </h2>
      <hr />
      <div className="grid gap-10 mb-8 md:grid-cols-1 mt-5">
        <div>
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            {isValidUrl && getData?.vLink ? (
              <>
                {/* Block all clicks */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none select-none"
                  onContextMenu={(e) => e.preventDefault()}
                />

                <ReactPlayer
                  ref={playerRef}
                  url={transformUnlistedUrl(getData.vLink)}
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0 z-0"
                  playing={playing}
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  onError={handlePlayerError}
                  onProgress={handleProgress}
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
                <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-8 z-20">
                  <div className="pointer-events-auto">
                    <button
                      onClick={handleBackward}
                      className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition"
                      aria-label="Backward 10 seconds"
                    >
                      <SkipBack size={24} />
                    </button>
                  </div>
                  <div className="pointer-events-auto">
                    <button
                      onClick={handlePlayPause}
                      className="p-3 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition"
                      aria-label={playing ? "Pause" : "Play"}
                    >
                      {playing ? <Pause size={32} /> : <Play size={32} />}
                    </button>
                  </div>
                  <div className="pointer-events-auto">
                    <button
                      onClick={handleForward}
                      className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition"
                      aria-label="Forward 10 seconds"
                    >
                      <SkipForward size={24} />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
                <p>এই ভিডিওটি শুধুমাত্র নির্দিষ্ট ব্যবহারকারীদের জন্য প্রযোজ্য।</p>
              </div>
            )}
          </div>

          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
            <p className="text-blue-700">
              <strong>নোট:</strong> এই ভিডিওটি শুধুমাত্র দেখার জন্য। শেয়ার করা বা ডাউনলোড করা নিষিদ্ধ।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

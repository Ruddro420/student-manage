import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";

const VideoPlayer = () => {
  const [getData, setGetData] = useState(null);
  const [isValidUrl, setIsValidUrl] = useState(false);
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Block common sharing methods
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);

    // Disable keyboard shortcuts
    const handleKeyDown = (e) => {
      // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  /* Get Assignment Data */
  useEffect(() => {
    axios.get(`${BASE_URL}/recording/specificData/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Require authentication
      }
    })
    .then((res) => {
      const foundData = res.data?.recording || null;
      setGetData(foundData);

      if (foundData?.vLink) {
        setIsValidUrl(isValidYouTubeUrl(foundData.vLink));
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setGetData(null);
    });
  }, [BASE_URL, id]);

  const isValidYouTubeUrl = (url) => {
    const regex = /^(https?:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
  };

  if (!getData) {
    return <p className="text-center text-red-500">ডাটা পাওয়া যায়নি</p>;
  }

  return (
    <div className="container px-6 mx-auto grid">
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        <b>ক্লাস টপিকসঃ</b> {getData.record_name || "N/A"}
      </h2>
      <hr />
      <div className="grid gap-10 mb-8 md:grid-cols-1 mt-5">
        <div>
          <div className="react-player relative">
            {isValidUrl ? (
              <>
                <div className="absolute inset-0 z-10 pointer-events-none" 
                     onContextMenu={(e) => e.preventDefault()}>
                  {/* This overlay prevents interaction with the player controls */}
                </div>
                <ReactPlayer
                  url={getData.vLink}
                  controls={true}
                  width="100%"
                  height="700px"
                  className="react-player"
                  config={{
                    youtube: {
                      playerVars: { 
                        showinfo: 1,
                        modestbranding: 1,
                        disablekb: 1 // Disable keyboard controls
                      },
                    },
                  }}
                />
              </>
            ) : (
              <p className="text-red-500 p-3">
                এটি একটি ড্রাইভ লিংক অথবা প্রাইভেট লিংক। আপনি এটির লাইভ প্রিভিউ দেখতে পারবেন নাহ।
              </p>
            )}
          </div>
          <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
            <p className="text-yellow-700">
              <strong>নোট:</strong> এই ভিডিওটি শুধুমাত্র দেখার জন্য। শেয়ার করা বা ডাউনলোড করা নিষিদ্ধ।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
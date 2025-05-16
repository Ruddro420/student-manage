import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";

const VideoPlayer = () => {
  const [getData, setGetData] = useState(null);
  const [isValidUrl, setIsValidUrl] = useState(false);
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Security measures
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
      alert("Right-click is disabled to prevent video sharing");
      return false;
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e) => {
      // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Print Screen, etc.
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U') ||
        e.key === 'PrintScreen' ||
        (e.ctrlKey && e.key === 'p')
      ) {
        e.preventDefault();
        alert("This action is not allowed");
      }
    };

    // Disable text selection
    const handleSelectStart = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  /* Get Assignment Data */
  useEffect(() => {
    axios.get(`${BASE_URL}/recording/specificData/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
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
    try {
      const parsedUrl = new URL(url);
      return (
        (parsedUrl.hostname.includes('youtube.com') || 
        parsedUrl.hostname.includes('youtu.be')
      );
    } catch {
      return false;
    }
  };

  // Transform YouTube URL to be more secure
  const getSecureYouTubeUrl = (url) => {
    try {
      const parsedUrl = new URL(url);
      
      // Convert to embed URL if not already
      if (!parsedUrl.pathname.includes('/embed/')) {
        const videoId = parsedUrl.pathname.includes('youtu.be') 
          ? parsedUrl.pathname.slice(1) 
          : parsedUrl.searchParams.get('v');
        parsedUrl.pathname = `/embed/${videoId}`;
        parsedUrl.hostname = 'www.youtube.com';
      }
      
      // Add security parameters
      parsedUrl.searchParams.set('enablejsapi', '1');
      parsedUrl.searchParams.set('modestbranding', '1');
      parsedUrl.searchParams.set('rel', '0');
      parsedUrl.searchParams.set('showinfo', '0');
      parsedUrl.searchParams.set('controls', '1'); // Keep controls but limit them
      
      return parsedUrl.toString();
    } catch {
      return url; // Fallback to original URL if parsing fails
    }
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
              <div className="relative" style={{ paddingTop: '56.25%' }}>
                {/* Security overlay */}
                <div 
                  className="absolute inset-0 z-10"
                  onClick={(e) => e.preventDefault()}
                  onContextMenu={(e) => e.preventDefault()}
                />
                
                {/* React Player */}
                <ReactPlayer
                  url={getSecureYouTubeUrl(getData.vLink)}
                  controls={true}
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0"
                  config={{
                    youtube: {
                      playerVars: { 
                        disablekb: 1, // Disable keyboard controls
                        modestbranding: 1,
                        rel: 0, // Don't show related videos
                        showinfo: 0,
                        fs: 0 // Disable fullscreen button
                      },
                    },
                  }}
                  light={false}
                  pip={false}
                  playing={true}
                />
              </div>
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
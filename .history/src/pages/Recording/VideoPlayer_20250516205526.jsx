import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VideoPlayer = () => {
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Security measures
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
      alert("Video sharing is disabled");
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e) => {
      // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, etc.
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U") ||
        (e.ctrlKey && e.key === "S") ||
        (e.ctrlKey && e.key === "P")
      ) {
        e.preventDefault();
        alert("This action is not allowed");
      }
    };

    // Disable text selection
    const handleSelectStart = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("selectstart", handleSelectStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("selectstart", handleSelectStart);
    };
  }, []);

  // Fetch video data
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/recording/specificData/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        
        if (response.data?.recording?.vLink) {
          const modifiedUrl = transformYouTubeUrl(response.data.recording.vLink);
          setVideoData({
            ...response.data.recording,
            secureUrl: modifiedUrl
          });
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, [BASE_URL, id]);

  // Transform YouTube URL to disable sharing features
  const transformYouTubeUrl = (url) => {
    try {
      const urlObj = new URL(url);
      
      // For YouTube URLs
      if (urlObj.hostname.includes("youtube.com") || urlObj.hostname.includes("youtu.be")) {
        urlObj.searchParams.set("enablejsapi", "1");
        urlObj.searchParams.set("modestbranding", "1");
        urlObj.searchParams.set("rel", "0");
        urlObj.searchParams.set("showinfo", "0");
        urlObj.searchParams.set("controls", "0");
        
        // Convert to embed URL if not already
        if (!urlObj.pathname.includes("/embed/")) {
          const videoId = urlObj.pathname.includes("youtu.be") 
            ? urlObj.pathname.slice(1) 
            : urlObj.searchParams.get("v");
          urlObj.pathname = `/embed/${videoId}`;
          urlObj.hostname = "www.youtube.com";
        }
      }
      
      return urlObj.toString();
    } catch {
      return url; // Return original if URL parsing fails
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading video...</div>;
  }

  if (!videoData) {
    return <div className="text-center text-red-500 py-10">Video not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">{videoData.record_name || "Video Player"}</h1>
        
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl bg-black">
          {/* Security overlay */}
          <div 
            className="absolute inset-0 z-10"
            onClick={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          />
          
          {/* YouTube iframe with enhanced security */}
          <iframe
            src={videoData.secureUrl}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-popups"
            title="Secure Video Player"
          />
        </div>

        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
          <p className="text-blue-700">
            <strong>Note:</strong> This video is for viewing only. Sharing or downloading is prohibited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
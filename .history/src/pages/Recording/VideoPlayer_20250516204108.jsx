import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";

const VideoPlayer = () => {
  const [getData, setGetData] = useState(null);
  const [isValidUrl, setIsValidUrl] = useState(false);
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios.get(`${BASE_URL}/recording/specificData/${id}`)
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

    // Prevent right-click and text selection
    const disableActions = (e) => e.preventDefault();
    document.addEventListener('contextmenu', disableActions);
    document.addEventListener('selectstart', disableActions);
    document.addEventListener('copy', disableActions);

    return () => {
      document.removeEventListener('contextmenu', disableActions);
      document.removeEventListener('selectstart', disableActions);
      document.removeEventListener('copy', disableActions);
    };
  }, [BASE_URL, id]);

  const isValidYouTubeUrl = (url) => {
    const regex = /^(https?:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
  };

  if (!getData) {
    return <p className="text-center text-red-500">ডাটা পাওয়া যায়নি</p>;
  }

  return (
    <div className="container px-6 mx-auto grid select-none">
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        <b>ক্লাস টপিকসঃ</b> {getData.record_name || "N/A"}
      </h2>
      <hr />
      <div className="grid gap-10 mb-8 md:grid-cols-1 mt-5">
        <div className="react-player">
          {isValidUrl ? (
            <div className="pointer-events-none relative overflow-hidden">
              <ReactPlayer
                url={getData.vLink}
                controls={true}
                width="100%"
                height="700px"
                className="react-player pointer-events-auto"
                config={{
                  youtube: {
                    playerVars: {
                      showinfo: 0,
                      modestbranding: 1,
                      rel: 0,
                      disablekb: 1,
                    },
                  },
                }}
              />
            </div>
          ) : (
            <p className="text-red-500 p-3">
              এটি একটি ড্রাইভ লিংক অথবা প্রাইভেট লিংক। আপনি এটির লাইভ প্রিভিউ দেখতে পারবেন নাহ।
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

import { Link2, MousePointer } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";

const VideoPlayer = () => {
    const [getData, setGetData] = useState(null);
    const [isValidUrl, setIsValidUrl] = useState(false);
    const { id } = useParams();
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    /* Get Assignment Data */
    useEffect(() => {
        axios.get(`${BASE_URL}/recording/specificData/${id}`)
            .then((res) => {
                const foundData = res.data?.recording || null; // Ensure data is correct
                setGetData(foundData); // ✅ Update state properly

                if (foundData?.vLink) {
                    setIsValidUrl(isValidYouTubeUrl(foundData.vLink)); // ✅ Check YouTube URL
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setGetData(null); // Handle error state
            });
    }, [id]);

    const isValidYouTubeUrl = (url) => {
        const regex = /^(https?:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
        return regex.test(url);
    };

    if (!getData) {
        return <p className="text-center text-red-500">ডাটা পাওয়া যায়নি</p>; // Show error message if no data
    }

    return (
        <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                <b>ক্লাস টপিকসঃ</b> {getData.record_name || "N/A"}
            </h2>
            <hr />
            <div className="grid gap-10 mb-8 md:grid-cols-2 mt-5">
                {/* Left Bar */}
                <div>
                    <div className="react-player">
                        {isValidUrl ? (
                            <ReactPlayer
                                url={getData.vLink}
                                controls={true}
                                width="100%"
                                height="280px"
                            />
                        ) : (
                            <p className="text-red-500 p-3">
                                এটি একটি ড্রাইভ লিংক অথবা প্রাইভেট লিংক। আপনি এটির লাইভ প্রিভিউ দেখতে পারবেন নাহ।
                            </p>
                        )}
                    </div>
                </div>
                {/* Right Bar */}
                <div className="col-span-1 bg-[#1D2939] text-white p-5 rounded">
                    <div>
                        <h2 className="text-2xl">
                            আপনার ক্লাস <b className="bg-[#12B76A] text-white px-5 py-1 rounded">ভিডিও</b>
                        </h2>
                        <div className="mt-8">
                            <h4 className="text-[#12B76A] mb-3">ভিডিও দেখার নিয়ম</h4>
                            <p>
                                আপনি চাইলে ভিডিও এখানেই দেখতে পারবেন। যদি মনে হয় ডাউনলোড করে দেখতে চাচ্ছেন তাহলে সবুজ বাটনে ক্লিক করে ভিডিওটি অন্য একটি ট্যাবে ওপেন করে দেখতে পারেন।
                            </p>
                        </div>
                        <div className="mt-5">
                            <label className="block text-sm">
                                <div className="flex items-center space-x-2 mt-3">
                                    <div className="bg-[#9333EA] text-white px-5 py-2 rounded">
                                        <Link2 />
                                    </div>
                                    <input
                                        className="block w-full text-sm border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input text-black"
                                        placeholder="ভিডিও লিংক নেই"
                                        type="url"
                                        value={getData.vLink || ""}
                                        disabled
                                    />
                                    {getData.vLink && (
                                        <a
                                            target="_blank"
                                            href={getData.vLink}
                                            className="bg-[#12B76A] text-white px-5 py-2 rounded flex items-center"
                                            rel="noreferrer"
                                        >
                                            <MousePointer className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;

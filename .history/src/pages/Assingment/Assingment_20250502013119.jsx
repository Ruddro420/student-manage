import { useParams } from "react-router-dom";
// import data from '../../../data/module.json';
import { useEffect, useState } from "react";
import { ClipboardCheckIcon, Link } from "lucide-react";
import { formatDate } from "../../components/Date/date";
import axios from "axios";

const Assingment = () => {
  const [getData, setGetData] = useState();
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;


  const loadData = () => {
    axios.get(`${BASE_URL}/assingment/specificData/${id}`).then((res) => {
        setGetData(res.data.assingments[0]);
    //   setLoading(false);

    });
  };

  useEffect(() => {
    loadData();
  }, [id]);

console.log(getData);

  return (
    <div className="container px-6 mx-auto grid">
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        <b>এসাইনমেন্টঃ</b> {getData?.assing_name}
      </h2>
      <hr />
      <div className="grid gap-10 mb-8 md:grid-cols-2 mt-5 dark:text-white">
        {/* Left Bar */}
        <div>
          <div className="mt-3 text-justify">
            <p> {getData?.details}</p>
            <br />
            <br />
            <h5>{getData?.imLink && getData?.imLink}</h5>
          </div>
          <div className="mt-8">
            <p>
              <b>Submission Instruction : Please submit your home work link.</b>
            </p>
            <p className="mt-3">
              শুধুমাত্র এই মডিউল এ, আপনাদের এসাইনমেন্ট টি গিটহাবে সাবমিট করা
              বাধ্যতামূলক নয়। আপনারা ডক ফাইলে বা অন্য কোনো উপায়ে এসাইনমেন্ট টি
              সাবমিট করতে পারবেন।
            </p>
          </div>
        </div>
        {/* Right Bar */}
        <div className="col-span-1 bg-[#1D2939] text-white p-5 rounded">
          <div>
            <h2 className="text-2xl">
              মার্ক পেয়েছেন{" "}
              <b className="bg-[#12B76A] text-white px-5 py-1 rounded">১০</b> ১০
              এর মধ্যে
            </h2>
            <div className="mt-8">
              <h4 className="text-[#12B76A] mb-3">ইন্সট্র্যাক্টর ফিডব্যাক</h4>
              <p>
                Congratulations!! You have done very well. Keep up the good
                work. Wish you all the best.
              </p>
            </div>
            <div className="mt-5">
              <label className="block text-sm">
                <div className="flex justify-between">
                  <div>
                    <span className="text-[#12B76A] dark:text-gray-400">
                      <b>আপনার সাবমিশন</b>
                    </span>
                  </div>
                  <div>
                    <h4>
                      {" "}
                      <b>ডেডলাইনঃ</b> {formatDate(new Date(getData?.deadline))}
                    </h4>
                  </div>
                </div>
                <form className="flex items-center space-x-2 mt-3">
                  <div className="bg-[#9333EA] text-white px-5 py-2 rounded">
                    <Link />
                  </div>
                  <input
                    className="block w-full text-sm border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input text-black"
                    placeholder={getData?.imLink}
                    type="url"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#12B76A] text-white px-5 py-2 rounded flex items-center"
                  >
                    <ClipboardCheckIcon className="w-5 h-5" />
                  </button>
                </form>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assingment;

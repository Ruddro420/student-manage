import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import CourseSummaryTab from "./CourseSummaryTab";
import useAxiosSecure from "../../hooks/useAxiosSecure";
//import { e2b_number } from "../../lib/bn";

const ClassSummary = () => {
  const { id } = useParams();
  const location = useLocation();
  const [data, setData] = useState([]);
  const axiosSecure = useAxiosSecure();

  // Parse the query parameter from the URL
  const params = new URLSearchParams(location.search);
  const index = params.get("index");

  useEffect(() => {
    axiosSecure.get(`/courses/modules/${id}`)
      .then(res => {
        setData(res.data);
        console.log(res.data);
      });
  }, [axiosSecure, id]);

  // Increment the index by 1
  const incrementedIndex = index ? parseInt(index, 10) + 1 : null;

  return (
    <>
      <div className="w-full overflow-hidden bg-white shadow border-2 border-[#E5E7EB] border-transparent">
        <div className="p-4">
          <div className="flex items-center">
            <div className="bg-[#12B76A] text-white px-3 py-1 text-center inline-block rounded-lg">
              <h3 className="text-xl">মডিউল</h3>
              <h2 className="text-xl font-extrabold">
                {incrementedIndex}
              </h2>
            </div>
            <div>
              <h3 className="text-2xl text-gray-900 font-extrabold text-left ml-3">
                {data.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Study Plan */}
      <div>
        <h3 className="text-2xl text-gray-900 font-extrabold text-left ml-3 mt-5">
          স্টাডি প্ল্যান
        </h3>
      </div>
      {/* Course Summary Tab */}
      <CourseSummaryTab data={data} />
    </>
  );
};

export default ClassSummary;
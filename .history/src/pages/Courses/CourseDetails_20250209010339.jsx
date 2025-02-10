import useAuth from "../../hooks/useAuth";
import CourseTab from "./CourseTab";

const CourseDetails = () => {
  const { user } = useAuth();
 
  return (
    <>
    {user ? <div className="container lg:px-6  mx-auto grid">
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        {user.data.course.title}
      </h2>
      {/*  <div className="flex items-center justify-between mx-2 p-4 mb-8 text-sm font-semibold text-purple-100 bg-[#12B76A] rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
                <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span>আমরা প্রথম সপ্তাহে আছি</span>
                </div>
                <div className="flex items-center" style={{ width: "40%" }}>
                    <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700" style={{ width: "55%" }}>
                        <div className="dark:bg-[#fafafa] bg-black h-2.5 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                    <div style={{ marginLeft: "10px", }}>
                        ৩ / ৪ সপ্তাহ শেষ
                    </div>
                </div>
            </div> */}

      {/* Course Tab */}
      <CourseTab data={user.data.course}/>
    </div>: <div className="h-screen flex justify-center items-center">
        <p className="text-2xl dark:text-white">Loading...</p>
      </div>}
    </>
  );
};

export default CourseDetails;

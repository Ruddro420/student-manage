import { ArrowRightFromLine } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const Courses = () => {
  const { user } = useAuth(); 
  const [student, setStudent] = useState(null);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    // Fetch student data when component mounts or when 'user' changes
    const fetchStudentData = async () => {
      try {
        const response = await axiosSecure.get(`/users/${user?.email}`);
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchStudentData();
  }, [axiosSecure, user]);

  return (
    <>
      {!student ? (
        <div className="absolute top-0 right-0 bg-white h-screen w-screen dark:bg-gray-900 flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <div className="container px-6 mx-auto grid">
          <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            আমার কোর্সসমূহ
          </h2>
          {student.courses.map((course) => (
            <div key={course.course.id} className="grid gap-10 mb-8 md:grid-cols-2">
              <div className="max-w-md overflow-hidden rounded-lg bg-white shadow">
                <img
                  src={course.course.photoURL || "../../../welcome.png"}
                  className="aspect-video w-full object-cover"
                  alt=""
                />
                <div className="p-4">
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-500 px-2 py-1 text-xs font-semibold text-white mr-3">
                    ব্যাচ  {course.course.batch}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-500 px-2 py-1 text-xs font-semibold text-white">
                      অনগোয়িং
                    </span>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-xl font-medium text-gray-900 mt-5">
                      {course.course.title}
                    </h3>
                  </div>
                  <div>
                    <Link
                      to="/dashboard/course-details"
                      className="hover:bg-slate-500 w-full flex items-center justify-center bg-black text-white py-2 rounded-md mt-4"
                    >
                      এগিয়ে যাই <ArrowRightFromLine className="ml-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Courses;

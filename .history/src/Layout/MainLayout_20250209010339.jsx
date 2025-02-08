import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoaderRequest from "../components/LoaderRequest/LoaderRequest";

const MainLayout = () => {
  const { user } = useAuth();
  const [student, setStudent] = useState(null);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`/users/${user?.email}`)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => console.log(err));
  }, [axiosSecure, user]);

  //console.log(student);

  if (!student) {
    return (
      <div className="flex h-screen justify-center items-center">
        Loading...
      </div>
    );
  }

  if (student.status === "pending") {
    return (
      <>
        <div className="flex bg-white dark:bg-gray-900 dark:text-white text-xl h-screen justify-center items-center">
          <LoaderRequest />
        </div>
      </>
    );
  }
  return (
    <>
      <Toaster />
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex flex-col flex-1 w-full">
          {/* Header */}
          <Header />
          <main className="h-full overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;

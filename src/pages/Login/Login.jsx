/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);





  useEffect(() => {
    const storedStudent = localStorage.getItem("student");
    if (storedStudent) {
      navigate("/dashboard");
    }
}, []);






  // Get module data
  useEffect(() => {
    axios
      .get(`${BASE_URL}/account/data`)
      .then(function (response) {
        console.log(response);

        setStudentData(response.data.student);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });



  }, [BASE_URL]);

  const onSubmit = (data) => {
    /* check data.email & data.password with the studentData>> if found console.log(true) else false*/
    const found = studentData.find(
      (student) =>
        student.email === data.email && student.password === data.password
    );
    if (found) {
      if (found.status == 1) {
        console.log("true");
        // Save to localStorage
        localStorage.setItem("student", JSON.stringify(found));
        console.log(found);

        navigate("/dashboard");
      } else {
        toast.error("Your account is Pending");
      }
    } else {
      console.log("false");
      toast.error("Invalid email or password");
    }
  };

  return (
    <>
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                className="object-cover w-full h-full dark:hidden"
                src="../assets/img/login-office.jpeg"
                alt="Office"
              />
              <img
                aria-hidden="true"
                className="hidden object-cover w-full h-full dark:block"
                src="../assets/img/login-office-dark.jpeg"
                alt="Office"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex items-center justify-center p-6 sm:p-12 md:w-1/2"
            >
              <div className="w-full">
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Login
                </h1>
                <label className="block text-sm mt-4">
                  <span className="text-gray-700 dark:text-gray-400">
                    Email
                  </span>
                  <input
                    {...register("email", { required: true })}
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="example@email.com"
                    type="email"
                    name="email"
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Password
                  </span>
                  <input
                    {...register("password", { required: true })}
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="***************"
                    type="password"
                    name="password"
                  />
                </label>

                <button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                  Log in
                </button>

                <hr className="my-8" />

                {/* <p className="mt-4">
                                    <a
                                        className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                                        href="./forgot-password.html"
                                    >
                                        Forgot your password?
                                    </a>
                                </p> */}
                <p className="mt-1">
                  <Link
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    to="/register"
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

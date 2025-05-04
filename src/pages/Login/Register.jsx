/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useStudent } from "../../StudentContext";

const Register = () => {
  const [courses, setCourses] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  // const { fetchStudentData } = useStudent(); // Fetch student data from context
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Load course data
  useEffect(() => {
    axios.get(`${BASE_URL}/course/data`).then((res) => {
      setCourses(res.data.courses);
    });
  }, [BASE_URL]);

  // generate unique student id
  const generateStudentId = () => {
    const prefix = "STU";
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `${prefix}${randomNumber}`;
  };

  const onSubmit = (data) => {
    axios.post(`${BASE_URL}/create/account`, {
        name: data.name,
        email: data.email,
        phone: data.phone,
        course_name: data.course_name,
        batch_no: data.batch_no,
        admission_slip_no: data.admission_slip_no,
        password: data.password,
        ex_1: generateStudentId(),
    })
    .then(function () {
      navigate("/");
    })
    
};


  return (
    <>
      <Toaster />
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                className="object-cover w-full h-full dark:hidden"
                src="../assets/img/create-account-office.jpeg"
                alt="Office"
              />
              <img
                aria-hidden="true"
                className="hidden object-cover w-full h-full dark:block"
                src="../assets/img/create-account-office-dark.jpeg"
                alt="Office"
              />
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Create account
                </h1>
                <label className="block text-sm">
                  <span className="text-gray-700 dark:text-gray-400">Name</span>
                  <input
                    {...register("name", { required: true })}
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="Md Ali"
                    type="text"
                    name="name"
                  />
                </label>
                <label className="block text-sm mt-4">
                  <span className="text-gray-700 dark:text-gray-400">Email</span>
                  <input
                    {...register("email", { required: true })}
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="example@email.com"
                    type="email"
                    name="email"
                  />
                </label>
                <label className="block text-sm mt-4">
                  <span className="text-gray-700 dark:text-gray-400">Phone</span>
                  <input
                    {...register("phone", { required: true })}
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="+8801xxxxxxxx"
                    type="number"
                    name="phone"
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">Course Name</span>
                  <select
                    {...register("course_name", { required: true })}
                    name="course_name"
                    className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                  >
                    <option>Select Course</option>
                    {courses?.map((course) => (
                      <option key={course.id} value={course.course_name}>
                        {course.course_name}-{course.batch_no}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm mt-4">
                  <span className="text-gray-700 dark:text-gray-400">Batch No.</span>
                  <input
                    {...register("batch_no", { required: true })}
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="Batch"
                    type="number"
                    name="batch_no"
                  />
                </label>

                <label className="block text-sm mt-4">
                  <span className="text-gray-700 dark:text-gray-400">Admission Slip No</span>
                  <input
                    {...register("admission_slip_no", { required: true })}
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="***************"
                    type="number"
                    name="admission_slip_no"
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">Password</span>
                  <input
                    {...register("password", { required: true })}
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="***************"
                    type="password"
                    name="password"
                  />
                </label>
                <button
                  type="submit"
                  className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                  Create account
                </button>

                <hr className="my-8" />
                <p className="mt-4">
                  <Link
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    to="/"
                  >
                    Already have an account? Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

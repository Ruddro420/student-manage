import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {

 /*  const [courses, setCourses] = useState([])
  const axiosSecure = useAxiosSecure();
  const {createUser} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    axiosSecure.get('/courses')
      .then(res => {
        setCourses(res.data)
      })
      .catch(err => console.log(err))
  }, [axiosSecure])


  const handleSubmit = (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target);
    const payload = Object.fromEntries(formdata.entries());
    toast.promise(createUser({email: payload.email, password: payload.password})
    .then(res => {
      console.log(res)
      axiosSecure.post('/students', {...payload, batch: parseInt(payload.batch), })
      .then(result => {
        console.log(result.data)
        navigate('/dashboard')
        window.location.reload()
      })
     
    })
    .catch(err => {
      console.log(err)
    throw new Error(err.message)
    
    })
    , {
      loading: 'Loading',
      success: 'Account created successfully',
      error: (err) => err.message
    })
    
  }
 */

  return (
    <>
    <Toaster/>
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
              <form onSubmit={handleSubmit} className="w-full">
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Create account
                </h1>
                <label className="block text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Email
                  </span>
                  <input
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="example@email.com"
                    type="email"
                    name="email"
                  />
                </label>
                <label className="block text-sm mt-4">
                  <span className="text-gray-700 dark:text-gray-400">
                    Phone
                  </span>
                  <input
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="+8801xxxxxxxx"
                    type="number"
                    name="phone"
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Course Name
                  </span>
                  <select name="courseId" className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                    <option>Select Course</option>
                    {courses.map(course => <option key={course.id} value={course.id}>{course.title}-{course.batch}</option>)}
                  </select>
                </label>

                <label className="block text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Batch No.
                  </span>
                  <input
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="Batch"
                    type="number"
                    name="batch"
                  />
                </label>
               
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Admission Slip No
                  </span>
                  <input
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="***************"
                    type="number"
                    name="admission_slip"
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700 dark:text-gray-400">
                    Password
                  </span>
                  <input
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    placeholder="***************"
                    type="password"
                    name="password"
                  />
                </label>
                <button
                  className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                  Create account
                </button>

                <hr className="my-8" />
                <p className="mt-4">
                  <Link
                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    to="login"
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

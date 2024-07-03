import {  ArrowRightFromLine } from "lucide-react";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from '../../hooks/useAuth';

const Courses = () => {
    const {user} = useAuth()
    const {data} = user
    const {courses} = data
    console.log(data);
    return (
        <>
        
        <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                আমার কোর্সসমূহ
            </h2>
            
            <div className="grid gap-10 mb-8 md:grid-cols-2">
                {courses.map((course, index) => (
                    <div key={index} className="max-w-md overflow-hidden rounded-lg bg-white shadow">
                    <img
                        src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                        className="aspect-video w-full object-cover"
                        alt=""
                    />
                    <div className="p-4">
                        <div className="flex gap-2 ">
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500 px-2 py-1 text-xs font-semibold text-white mr-3"> ব্যাচ {course.course.batch} </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500 px-2 py-1 text-xs font-semibold text-white"> {course.course.status} </span>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-xl font-medium text-gray-900 mt-5">{course.course.title}</h3>
                        </div>
                        <div>
                            <Link to={`/dashboard/course-details/${course.course.id}`} className="hover:bg-slate-500 w-full flex items-center justify-center bg-black text-white py-2 rounded-md mt-4">
                                এগিয়ে যাই <ArrowRightFromLine className="ml-3"/>
                            </Link>
                        </div>
                    </div>
                </div>
                ))}

            </div>

        </div>
        </>
    );
};

export default Courses;
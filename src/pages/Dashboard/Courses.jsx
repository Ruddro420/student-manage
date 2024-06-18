import { ArrowRightFromLine } from "lucide-react";

const Courses = () => {
    return (
        <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                আমার কোর্সসমূহ
            </h2>
            {/* <a
                className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
                href="https://github.com/estevanmaito/windmill-dashboard"
            >
                <div className="flex items-center">
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                    </svg>
                    <span>Star this project on GitHub</span>
                </div>
                <span>View more &RightArrow;</span>
            </a> */}

            <div className="grid gap-10 mb-8 md:grid-cols-2">
                <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow m-5">
                    <img
                        src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                        className="aspect-video w-full object-cover"
                        alt=""
                    />
                    <div className="p-4">
                        <div className="flex gap-2 ">
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500 px-2 py-1 text-xs font-semibold text-white mr-3"> ব্যাচ ২ </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500 px-2 py-1 text-xs font-semibold text-white"> অনগোয়িং </span>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-xl font-medium text-gray-900 mt-5">ওয়েব ডিজাইন (Web Design & Development)</h3>
                        </div>
                        <div>
                            <button className="w-full flex items-center justify-center bg-black text-white py-2 rounded-md mt-4">
                                এগিয়ে যাই <ArrowRightFromLine className="ml-2" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Courses;
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState hook

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0); // State to manage active tab index

    return (
        <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 translate-x-1">
            <div className="py-4 text-gray-500 dark:text-gray-400">
                <Link
                    className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                    to="/dashboard"
                >
                    ইন্সপায়ার্ড আইটি
                </Link>
                <ul className="mt-6">
                    <li className="relative px-2 py-3">

                        <Link
                            className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 dark:hover:text-gray-200 dark:text-gray-100 p-3 ${activeTab === 0 ? 'bg-purple-600 text-white p-3 rounded' : ''}`}
                            onClick={() => setActiveTab(0)}
                            to="/dashboard"
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                ></path>
                            </svg>
                            <span className="ml-4">আমার কোর্স</span>
                        </Link>
                    </li>
                    <li className="relative px-2 py-3">
                        <Link
                            className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  dark:hover:text-gray-200 p-3 ${activeTab === 1 ? 'bg-purple-600 text-white p-3 rounded' : ''}`}
                            onClick={() => setActiveTab(1)}
                            to="/dashboard/recording"
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                ></path>
                            </svg>
                            <span className="ml-4">ক্লাস রেকর্ডিং</span>
                        </Link>
                    </li>
                    <li className="relative px-2 py-3">
                        <Link
                            className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  dark:hover:text-gray-200 p-3 ${activeTab === 2 ? 'bg-purple-600 text-white p-3 rounded' : ''}`}
                            to="/dashboard/resources"
                            onClick={() => setActiveTab(2)}>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                ></path>
                            </svg>
                            <span className="ml-4">রিসোর্স</span>
                        </Link>
                    </li>
                    <li className="relative px-2 py-3">
                        <Link
                            className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  dark:hover:text-gray-200 p-3 ${activeTab === 3 ? 'bg-purple-600 text-white p-3 rounded' : ''}`}
                            to="/dashboard/performances"
                            onClick={() => setActiveTab(3)}>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                ></path>
                                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                            </svg>
                            <span className="ml-4">আমার এসাইনমেন্ট</span>
                        </Link>
                    </li>
                    <li className="relative px-2 py-3">
                        <Link
                            className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150  dark:hover:text-gray-200 p-3 ${activeTab === 3 ? 'bg-purple-600 text-white p-3 rounded' : ''}`}
                            to="/dashboard/performances"
                            onClick={() => setActiveTab(4)}>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                ></path>
                                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                            </svg>
                            <span className="ml-4">পারফর্মেন্স</span>
                        </Link>
                    </li>
                </ul>
                {/* Additional menu items can be added similarly */}
            </div>
        </aside>
    );
};

export default Sidebar;

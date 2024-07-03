import { useState } from "react";
import NotificationMenu from "./NotificationMenu";
import ProfileMenu from "./ProfileMenu";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [isCloseButtonVisible, setIsCloseButtonVisible] = useState(true);

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        setIsCloseButtonVisible(!sidebarOpen); // Hide the button when the sidebar is closed
    };

    const handleLinkClick = (tabIndex) => {
        setActiveTab(tabIndex);
        setSidebarOpen(false); // Close sidebar when a link is clicked
        setIsCloseButtonVisible(false); // Hide the button when a link is clicked
    };

    return (
        <>
            <header className="z-10 py-4 bg-white border-b dark:bg-gray-800">
                <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                    <button
                        className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
                        aria-label="Menu"
                        onClick={handleToggleSidebar}
                    >
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>

                    <div className="flex justify-center flex-1 lg:mr-32">
                        <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                            <div className="absolute inset-y-0 flex items-center pl-2">
                                <svg
                                    className="w-4 h-4 text-gray-700 dark:text-gray-300"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-400 dark:focus:shadow-outline-gray dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:text-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                                type="text"
                                placeholder="Search for projects"
                                aria-label="Search"
                            />
                        </div>
                    </div>
                    <ul className="flex items-center flex-shrink-0 space-x-6">
                        {/* Notification Menu */}
                        {/* <NotificationMenu /> */}

                        {/* Profile Menu */}
                        <ProfileMenu />
                    </ul>
                </div>
            </header>
            <aside
                className={`fixed inset-0 z-50 flex transform transition-transform duration-300 ease-in-out ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                onClick={handleToggleSidebar}
            >
                <div
                    className="w-64 bg-white dark:bg-gray-800 overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
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
                                    className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 dark:hover:text-gray-200 dark:text-gray-100 p-3 ${
                                        activeTab === 0
                                            ? 'bg-purple-600 text-white p-3 rounded'
                                            : ''
                                    }`}
                                    onClick={() => handleLinkClick(0)}
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
                                    className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 dark:hover:text-gray-200 p-3 ${
                                        activeTab === 1
                                            ? 'bg-purple-600 text-white p-3 rounded'
                                            : ''
                                    }`}
                                    onClick={() => handleLinkClick(1)}
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
                                    className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 dark:hover:text-gray-200 p-3 ${
                                        activeTab === 2
                                            ? 'bg-purple-600 text-white p-3 rounded'
                                            : ''
                                    }`}
                                    to="/dashboard/resources"
                                    onClick={() => handleLinkClick(2)}
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
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                            ></path>
                                    </svg>
                                    <span className="ml-4">রিসোর্স</span>
                                </Link>
                            </li>
                            <li className="relative px-2 py-3">
                                <Link
                                    className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 dark:hover:text-gray-200 p-3 ${
                                        activeTab === 3
                                            ? 'bg-purple-600 text-white p-3 rounded'
                                            : ''
                                    }`}
                                    to="/dashboard/performances"
                                    onClick={() => handleLinkClick(3)}
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
                                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                        ></path>
                                        <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                    </svg>
                                    <span className="ml-4">পারফর্মেন্স</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {isCloseButtonVisible && (
                    <div className="flex-1 w-fit dark:text-white h-[10px] transition-transform duration-300 ease-in-out" onClick={handleToggleSidebar}>
                        <X size={40} className="rounded-2xl mt-6 ml-2 transform transition-transform duration-300 ease-in-out hover:scale-110"/>
                    </div>
                )}
            </aside>
        </>
    );
};

export default Header;

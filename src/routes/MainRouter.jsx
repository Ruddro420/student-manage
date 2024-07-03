import {
    createBrowserRouter,
} from "react-router-dom";
import Courses from "../pages/Dashboard/Courses";
import MainLayout from "../Layout/MainLayout";
import Register from "../pages/Login/Register";
import Login from "../pages/Login/Login";
import Recording from "../pages/Recording/Recording";
import Resources from "../pages/Resources/Resources";
import Performance from "../pages/Performance/Performance";
import CourseDetails from "../pages/Courses/CourseDetails";
import ClassSummary from "../pages/Courses/ClassSummary";
import Assingment from "../pages/Assingment/Assingment";
import VideoPlayer from "../pages/Recording/VideoPlayer";
import Profile from "../pages/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <MainLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Courses />,
            },
            {
                path: "/dashboard/recording",
                element: <Recording />,
            },
            {
                path: "/dashboard/resources",
                element: <Resources />,
            },
            {
                path: "/dashboard/performances",
                element: <Performance />,
            },
            {
                path: "/dashboard/course-details/:id",
                element: <CourseDetails />,
            },
            {
                path: "/dashboard/class-summary/:id",
                element: <ClassSummary />,
            },
            {
                path: "/dashboard/assingment/:id",
                element: <Assingment />,
            },
            {
                path: "/dashboard/class-recording/:id",
                element: <VideoPlayer />,
            },
            {
                path: "/dashboard/profile",
                element: <Profile/>,
            },
        ],
    },
]);
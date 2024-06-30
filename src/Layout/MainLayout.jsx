import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = () => {
    return (
        <body >
            <div  className="flex h-screen bg-gray-50 dark:bg-gray-900">
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
        </body>
    );
};

export default MainLayout;
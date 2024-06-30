import { Play } from "lucide-react";

const Table = () => {
    return (
        <>
            <div>
                <div className="p-3 border rounded-lg mb-2 mt-5 bg-[#1D2939] text-white">
                    <h1>ক্লাস ১</h1>
                </div>
                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr
                                    className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">শিরোনাম</th>
                                    <th className="px-4 py-3">সময়</th>
                                    <th className="px-4 py-3">দেখুন</th>
                                </tr>
                            </thead>
                            <tbody
                                className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                <tr className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            <div>
                                                <p className="font-semibold">Hans Burger</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        6/10/2020
                                    </td>
                                    <td className="px-4 py-3 text-sm flex items-center dark:text-white dark:bg-[dark:divide-gray-700] bg-[#F3F4F6] cursor-pointer">
                                        <span className="mr-1">দেখুন</span>
                                        <Play />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <div className="p-3 border rounded-lg mb-2 mt-5 bg-[#1D2939] text-white">
                    <h1>ক্লাস ২</h1>
                </div>
                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr
                                    className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">শিরোনাম</th>
                                    <th className="px-4 py-3">সময়</th>
                                    <th className="px-4 py-3">দেখুন</th>
                                </tr>
                            </thead>
                            <tbody
                                className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 dark:text-white">
                                <tr className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            <div>
                                                <p className="font-semibold">Hans Burger</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        6/10/2020
                                    </td>
                                    <td className="px-4 py-3 text-sm flex items-center bg-[#F3F4F6] dark:bg-gray-800 dark:text-white">
                                        <span className="mr-1">দেখুন</span>
                                        <Play />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;
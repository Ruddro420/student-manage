/* eslint-disable react/prop-types */
import axios from "axios";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import data from '../../../data/module.json'

const LiveClass = () => {
    //const [data, setData] = useState([])
    // get module data
    /* useEffect(() => {
        axios.get('../../../data/module.json')
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })

    }, []) */
    return (
        <>
        {data?.map(module => (
            <div key={module.id}>
                <div className="p-3 border rounded-lg mb-2 mt-5 bg-[#1D2939] text-white">
                    <h1>{module.title}</h1>
                </div>
                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3 w-1/2">শিরোনাম</th>
                                    <th className="px-4 py-3 w-1/4">সময়</th>
                                    <th className="px-4 py-3 w-1/4">দেখুন</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {module.class.map(liveClass => (
                                    <tr key={liveClass.id} className="text-gray-700 dark:text-gray-400">
                                        <td className="px-4 py-3 w-1/2">
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{liveClass.title}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm w-1/4">
                                            {liveClass.date}
                                        </td>
                                        <td className="px-4 py-3 text-sm w-full flex items-center justify-center bg-[#F3F4F6] cursor-pointer">
                                            <span className="mr-1">দেখুন</span>
                                            <Play />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        ))}
    </>
    
    
    );
};

export default LiveClass;
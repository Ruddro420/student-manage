/* eslint-disable react/prop-types */

import { Eye } from "lucide-react";
import ResourcesModal from "../../components/Modal/ResourcesModal";
import { useState } from "react";

const ClassSummaryResources = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState();
    const modalHandler = (id) => {
        setIsOpen(true);
        setModalData(id);
    };
    return (
        <>
            <div>
                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">শিরোনাম</th>
                                    <th className="px-4 py-3">সময়</th>
                                    <th className="px-4 py-3">দেখুন</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {data?.map(item => (
                                    <tr key={item.id} className="text-gray-700 dark:text-gray-400">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">{item.title}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            {item.date}
                                        </td>
                                        <button className="px-2 py-3 text-sm flex items-center justify-between dark:bg-gray-800 dark:text-white border  bg-[#F3F4F6] cursor-pointer w-[100px] rounded m-2 hover:bg-slate-400" onClick={() => modalHandler(item)}>
                                            <td >
                                                <div className="flex items-center">
                                                    <span className="mr-1">চেক করুন</span>
                                                    <Eye />
                                                </div>
                                            </td>
                                        </button>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ResourcesModal isOpen={isOpen} setIsOpen={setIsOpen} modalData={modalData} />
        </>
    );
};

export default ClassSummaryResources;
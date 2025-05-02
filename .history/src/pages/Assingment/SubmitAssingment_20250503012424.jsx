/* eslint-disable react/prop-types */
import { Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { dateFormat } from "../../lib/date";
import axios from "axios";
import { useStudent } from "../../StudentContext";
import NoDataFound from "../../components/NoDataFound/NoDataFound";
import AssingmentModal from "../../components/Modal/AssingmentModal";

const SubmitAssingment = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState();
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    // get student data froom context
    const { student } = useStudent();

    const loadData = () => {
        axios.get(`${BASE_URL}/submit/assingment/data/${student.ex_1}`)
            .then((res) => {
                setAssignments(res.data || []); // Ensure it's always an array
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching assignments:", error);
                setAssignments([]); // Set to empty array in case of an error
                setLoading(false);
            });
    };

    useEffect(() => {
        if (student?.ex_1) {
            loadData();
        }
    }, [student?.ex_1]);

    // Ensure `assignments` is an array before calling reduce
    const groupedAssignments = (assignments || []).reduce((acc, assignment) => {
        if (!acc[assignment.m_name]) {
            acc[assignment.m_name] = [];
        }
        acc[assignment.m_name].push(assignment);
        return acc;
    }, {});
    // Modal function
    const modalHandler = (id) => {
        setIsOpen(true);
        setModalData(id);
    };
    return (
        <>
            <div className="container px-6 mx-auto grid">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    আমার এসাইনমেন্ট
                </h2>
                {loading ? (
                    <p className="text-center">Loading...</p>
                ) : Object.keys(groupedAssignments).length > 0 ? (
                    <div className="module-container">
                        {Object.entries(groupedAssignments).map(([moduleName, moduleAssignments]) => (
                            <div key={moduleName} className="mb-5">
                                {/* Module Title */}
                                <div className="p-3 border dark:bg-gray-800 rounded-lg bg-[#1D2939] text-white">
                                    <h1>{moduleName}</h1>
                                </div>

                                {/* Assignments Table */}
                                <div className="w-full overflow-hidden rounded-lg shadow-xs mt-3">
                                    <div className="w-full overflow-x-auto">
                                        <table className="w-full whitespace-no-wrap table-fixed">
                                            <thead>
                                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                                    <th className="px-4 py-3 w-1/3">শিরোনাম</th>
                                                    <th className="px-4 py-3 w-1/3">সময়</th>
                                                    <th className="px-4 py-3 w-1/3">দেখুন</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                                {moduleAssignments.map((assignment) => (
                                                    <tr key={assignment.id} className="text-gray-700 dark:text-gray-400">
                                                        <td className="px-4 py-3 w-1/3">
                                                            <p className="font-semibold">{assignment.a_name}</p>
                                                        </td>
                                                        <td className="px-4 py-3 text-sm">
                                                            {dateFormat(assignment.created_at)}
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="px-2 py-3 text-sm flex items-center justify-between dark:bg-gray-800 dark:text-white border  bg-[#F3F4F6] cursor-pointer w-[100px] rounded m-2 hover:bg-slate-400"
                                                                onClick={() => modalHandler(assignment)}
                                                            >
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <span className="mr-1">চেক করুন</span>
                                                                        <Eye />
                                                                    </div>
                                                                </td>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <NoDataFound />
                )}
                <AssingmentModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    modalData={modalData}
                />
            </div>


        </>
    );
};

export default SubmitAssingment;

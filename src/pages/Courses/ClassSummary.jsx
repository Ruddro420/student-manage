import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseSummaryTab from "./CourseSummaryTab";
import getdata from '../../../data/module.json'

const ClassSummary = () => {
    const id = useParams();
    const [data, setData] = useState([])
    // get module data
    useEffect(() => {
        const findData = getdata.find(item => item.id == id.id)
                setData(findData);
       /*  axios.get('../../../data/module.json')
            .then(function (response) {
                const findData = response.data.find(item => item.id == id.id)
                setData(findData);
            })
            .catch(function (error) {
                console.log(error);
            }) */
    }, [id])
    //console.log(data);
    return (
        <>
            <div className="w-full overflow-hidden bg-white shadow border-2 border-[#E5E7EB] border-transparent">
                <div className="p-4">
                    <div className="flex items-center">
                        <div className="bg-[#12B76A] text-white px-3 py-1 text-center inline-block rounded-lg">
                            <h3 className="text-xl">মডিউল</h3>
                            <h2 className="text-xl font-extrabold">{data.count}</h2>
                        </div>
                        <div>
                            <h3 className="text-2xl text-gray-900 font-extrabold text-left ml-3">{data.heading}</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* Study Plan */}
            <div>
                <h3 className="text-2xl text-gray-900 font-extrabold text-left ml-3 mt-5">স্টাডি প্ল্যান</h3>
            </div>
            {/* Course Summary Tab */}
            <CourseSummaryTab data={data} />
        </>
    );
};

export default ClassSummary;
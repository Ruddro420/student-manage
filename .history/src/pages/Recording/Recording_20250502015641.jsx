
import { useMemo, useState } from "react";
import TabComponent from "./TabComponent";
import { useStudent } from "../../StudentContext";
import axios from "axios";

const Recording = () => {
    const [course, setCourse] = useState([])
    const [loading, setLoading] = useState(true)
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const { student } = useStudent();

    // load course data
    useMemo(() => {
        axios.get(`${BASE_URL}/student/course/show/${student?.course_name}/${student?.batch_no}`).then((res) => {
            setLoading(false)
            setCourse(res.data);
        });
    }, [BASE_URL, student?.batch_no, student?.course_name]);

    return (
        <div className="container px-2 lg:px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                ক্লাস রেকর্ডিং সমূহ
            </h2>
            {/* Tab Component */}
            <TabComponent data={course} />
        </div>
    );
};

export default Recording;
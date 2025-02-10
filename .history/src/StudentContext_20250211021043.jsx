/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [student, setStudent] = useState(null);
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // Load student from localStorage on mount
    useEffect(() => {
        const storedStudent = localStorage.getItem("student");
        if (storedStudent) {
            setStudent(JSON.parse(storedStudent));
        }
    }, []);

   /*  const fetchStudentData = async (studentId) => {
        try {
            const response = await fetch(`${BASE_URL}/student/data/${studentId}`);
            const data = await response.json();
            setStudent(data.student);

            // Update localStorage
            localStorage.setItem("student", JSON.stringify(data.student));
        } catch (error) {
            console.error("Error fetching student data:", error);
        }
    }; */

    return (
        <StudentContext.Provider value={{ student, setStudent/* , fetchStudentData  */}}>
            {children}
        </StudentContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStudent = () => {
    return useContext(StudentContext);
};

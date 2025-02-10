/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

// Create context
const StudentContext = createContext();

// Provider component
export const StudentProvider = ({ children }) => {
    const [student, setStudent] = useState(null); // Store logged-in student data

    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // Function to fetch student data (after login)
    const fetchStudentData = async (studentId) => {
        try {
            const response = await fetch(`${BASE_URL}/student/data/${studentId}`); // Replace with actual API
            const data = await response.json();
            setStudent(data); // Store logged-in student data
        } catch (error) {
            console.error("Error fetching student data:", error);
        }
    };

    return (
        <StudentContext.Provider value={{ student, setStudent, fetchStudentData }}>
            {children}
        </StudentContext.Provider>
    );
};

// Custom hook to use student context
export const useStudent = () => {
    return useContext(StudentContext);
};

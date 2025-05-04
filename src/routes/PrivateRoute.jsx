/* eslint-disable no-unused-vars */
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import ProgressWindow from "../components/Loader/ProgressWindow";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("student") || "null");
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch student data from the server
  useEffect(() => {
    axios
      .get(`${BASE_URL}/account/data`)
      .then((response) => {
        setStudentData(response.data.student);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [BASE_URL]);

  // Find matching user in the student list
  const found = studentData.find(
    (student) =>
      student.email === user?.email && student.password === user?.password
  );

  // Update localStorage if valid and status is active
  useEffect(() => {
    if (found && found.status === 1) {
      localStorage.setItem("student", JSON.stringify(found));
    }else if (found && found.status !== 1) {
      localStorage.removeItem("student");
    }
  }, [found]);

  // Show loading screen
  if (loading) {
    return (
      <ProgressWindow>
        <progress className="progress w-56"></progress>
      </ProgressWindow>
    );
  }

  // Redirect to login if user is not found or not logged in
  if (!user || !found) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Show toast if user account is pending
  if (found.status !== 1) {
    // toast.error("Your account is Pending");
    return <Navigate to="/" replace />;
  }

  // Authorized user
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;

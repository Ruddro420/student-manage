import axios from "axios";
import { ArrowRightFromLine } from "lucide-react";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStudent } from "../../StudentContext";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

const Courses = () => {
  const [course, setCourse] = useState([])
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { student } = useStudent();

  
  // load course data
  const loadData = () => {
    axios.get(`${BASE_URL}/student/course/show/${student.course_name}/${student.batch_no}`).then((res) => {
      setCourse(res);
    });
  };
  useEffect(() => {
    loadData();
  }, [BASE_URL]);

  console.log(student);
  return (
    <>

     
    </>
  );
};

export default Courses;

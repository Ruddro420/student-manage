/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AssingPerformance from "./AssingPerformance";
import ProgressBar from "./ProgressBar";
import axios from "axios";
import { useStudent } from "../../StudentContext";

// Utility function to convert numbers to Bengali
const convertToBengali = (num) => {
  const bengaliNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num.toString().replace(/\d/g, (digit) => bengaliNumerals[digit]);
};

const Performance = () => {
 
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [totalAssignmentsSubmitted, setTotalAssignmentsSubmitted] = useState(0);
  const [totalCourseAssignment, setTotalCourseAssignment] = useState(0);
  const [totalPresence, setTotalPresence] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [assinments, setAssinments] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { student } = useStudent();
  // Get module data
  useEffect(() => {

    /* total submited assignment */
    axios
      .get(`${BASE_URL}/student/total/assingment/${student.ex_1}`)
      .then(function (response) {
        console.log(response);

        setTotalAssignmentsSubmitted(response.data.total);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });

    /* total assignment */
    axios
      .get(`${BASE_URL}/student/total/assingment/course/${student.course_name}/${student.batch_no}`)
      .then(function (response) {
        console.log(response);

        setTotalCourseAssignment(response.data.total);
        console.log(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });


    /* total present */
    axios
      .get(`${BASE_URL}/student/total/present/absent/${student.ex_1}`)
      .then(function (response) {
        console.log(response);

        setTotalPresence(response.data.total);
        console.log(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });

      /* Total Payment */
    axios
      .get(`${BASE_URL}/student/payment/${student.ex_1}`)
      .then(function (response) {
        console.log(response);

        setTotalPayment(response.data.total);
        console.log(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });

    axios
      .get(`${BASE_URL}/student/assingment/${student.ex_1}`)
      .then(function (response) {
        console.log(response);

        setAssinments(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });

    axios
      .get(`${BASE_URL}/student/payment/history/${student.ex_1}`)
      .then(function (response) {
        console.log(response);

        setPayments(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });



  }, [BASE_URL]);



  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">পারফর্মেন্স</h1>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 font-medium">Total Present</p>
                <h2 className="text-3xl font-bold mt-2">{totalPresence}</h2>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <i className="fas fa-credit-card text-blue-500 text-xl"></i>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green-500 flex items-center">
                {/* <i className="fas fa-arrow-up mr-1"></i> 12.5% */}
              </span>
              {/* <span className="text-gray-500 text-sm ml-2">In full course</span> */}
            </div>
          </div>


          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 font-medium">Total Submit Assignments</p>
                <h2 className="text-3xl font-bold mt-2">{totalAssignmentsSubmitted}</h2>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <i className="fas fa-tasks text-green-500 text-xl"></i>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green-500 flex items-center">
                {/* <i className="fas fa-arrow-up mr-1"></i> 5.2% */}
              </span>
              {/* <span className="text-gray-500 text-sm ml-2">In full course</span> */}
            </div>
          </div>


          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 font-medium">Total Course Assignments</p>
                <h2 className="text-3xl font-bold mt-2">{totalCourseAssignment}</h2>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <i className="fas fa-user-check text-purple-500 text-xl"></i>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-red-500 flex items-center">
                {/* <i className="fas fa-arrow-down mr-1"></i> 2.1% */}
              </span>
              {/* <span className="text-gray-500 text-sm ml-2">In full course</span> */}
            </div>
          </div>


          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 font-medium">Total Payment</p>
                <h2 className="text-3xl font-bold mt-2">{totalPayment} ৳</h2>
                <div className="flex mt-1">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star-half-alt text-yellow-400"></i>
                </div>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <i className="fas fa-chart-line text-yellow-500 text-xl"></i>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green-500 flex items-center">
                {/* <i className="fas fa-arrow-up mr-1"></i> {0.4} */}
              </span>
              {/* <span className="text-gray-500 text-sm ml-2">points increase</span> */}
            </div>
          </div>


        </div>


        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Payment Trends</h3>
              <select className="bg-gray-100 border-0 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option selected>Last 90 days</option>
              </select>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">

              <p className="text-gray-400">Payment chart visualization</p>
            </div>
          </div>


          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Assignment Completion</h3>
              <select className="bg-gray-100 border-0 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>By Week</option>
                <option selected>By Month</option>
                <option>By Quarter</option>
              </select>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">

              <p className="text-gray-400">Assignment completion chart</p>
            </div>
          </div>
        </div>
*/}

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Submited Assignment Details</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Module Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marks</th>
                
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {assinments.map((assignment, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">JD</div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{assignment.a_name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{assignment.m_name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{assignment.ex_1}</div>
                    <div className="text-sm text-gray-500">Out of 10</div>
                  </td>

                </tr>
))}
              </tbody>
            </table>
          </div>
         {/*  <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-500">Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">24</span> students</div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</button>
              <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">Next</button>
            </div>
          </div> */}
        </div> 

        {/* Payment History */}
        <div className="mt-10 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Payment History</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ammount</th>
                
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {payments.map((payment, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">JD</div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{payment.date}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.payment} ৳</div>
                  </td>
                  
                </tr>
                ))}

              </tbody>
            </table>
          </div>
 {/*          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-500">Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">24</span> students</div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</button>
              <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">Next</button>
            </div>
          </div> */}
        </div> 


      </div>

    </>
  );
};

export default Performance;

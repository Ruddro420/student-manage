/* eslint-disable no-unused-vars */
import { useState } from "react";
import AssingPerformance from "./AssingPerformance";
import ProgressBar from "./ProgressBar";

// Utility function to convert numbers to Bengali
const convertToBengali = (num) => {
  const bengaliNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num.toString().replace(/\d/g, (digit) => bengaliNumerals[digit]);
};

const Performance = () => {
  const [kcal, setKcal] = useState(80);
  const [steps, setSteps] = useState(60);
  const [km, setKm] = useState(90);
  /* const {user} = useAuth(); */
  // console.log(user)

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
                <p className="text-gray-500 font-medium">Payment Count</p>
                <h2 className="text-3xl font-bold mt-2">1,248</h2>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <i className="fas fa-credit-card text-blue-500 text-xl"></i>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green-500 flex items-center">
                <i className="fas fa-arrow-up mr-1"></i> 12.5%
              </span>
              <span className="text-gray-500 text-sm ml-2">vs last month</span>
            </div>
          </div>


          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 font-medium">Daily Assignments</p>
                <h2 className="text-3xl font-bold mt-2">87%</h2>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <i className="fas fa-tasks text-green-500 text-xl"></i>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green-500 flex items-center">
                <i className="fas fa-arrow-up mr-1"></i> 5.2%
              </span>
              <span className="text-gray-500 text-sm ml-2">completion rate</span>
            </div>
          </div>


          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 font-medium">Class Presence</p>
                <h2 className="text-3xl font-bold mt-2">92%</h2>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <i className="fas fa-user-check text-purple-500 text-xl"></i>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-red-500 flex items-center">
                <i className="fas fa-arrow-down mr-1"></i> 2.1%
              </span>
              <span className="text-gray-500 text-sm ml-2">vs last week</span>
            </div>
          </div>


          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 font-medium">Class Performance</p>
                <h2 className="text-3xl font-bold mt-2">4.8</h2>
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
                <i className="fas fa-arrow-up mr-1"></i> 0.4
              </span>
              <span className="text-gray-500 text-sm ml-2">points increase</span>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

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


        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Detailed Performance</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payments</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignments</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Presence</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">JD</div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">John Doe</div>
                        <div className="text-sm text-gray-500">Class A</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">12/12</div>
                    <div className="text-sm text-gray-500">100%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">24/25</div>
                    <div className="text-sm text-gray-500">96%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">28/30</div>
                    <div className="text-sm text-gray-500">93%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900 mr-2">4.9</div>
                      <div className="flex">
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Excellent</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">AS</div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Alice Smith</div>
                        <div className="text-sm text-gray-500">Class B</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">10/12</div>
                    <div className="text-sm text-gray-500">83%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">20/25</div>
                    <div className="text-sm text-gray-500">80%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">25/30</div>
                    <div className="text-sm text-gray-500">83%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900 mr-2">4.2</div>
                      <div className="flex">
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star-half-alt text-yellow-400 text-xs"></i>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Good</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-semibold">RJ</div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Robert Johnson</div>
                        <div className="text-sm text-gray-500">Class A</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">8/12</div>
                    <div className="text-sm text-gray-500">67%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">15/25</div>
                    <div className="text-sm text-gray-500">60%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">20/30</div>
                    <div className="text-sm text-gray-500">67%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900 mr-2">3.5</div>
                      <div className="flex">
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                        <i className="fas fa-star-half-alt text-yellow-400 text-xs"></i>
                        <i className="far fa-star text-yellow-400 text-xs"></i>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Average</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-500">Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">24</span> students</div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</button>
              <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Performance;

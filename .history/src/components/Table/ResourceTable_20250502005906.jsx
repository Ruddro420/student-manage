/* eslint-disable react/prop-types */
import { Eye } from "lucide-react";
import ResourcesModal from "../Modal/ResourcesModal";
import { useState } from "react";

const ResourceTable = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState();
  //const [data, setData] = useState([])

  // Modal function
  const modalHandler = (id) => {
    setIsOpen(true);
    setModalData(id);
  };
  return (
    <>
      {/* {data?.modules.map((module) => (
        <>
          {module.resources.length > 0 && (
            <div key={module.id}>
              <div className="p-1 lg:p-3 border rounded-lg mb-2 mt-5 bg-[#1D2939] text-white">
                <h1>{module.title}</h1>
              </div>
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                        <th className="px-4 py-3 w-1/2">শিরোনাম</th>
                        <th className="px-4 py-3 w-1/4">সময়</th>
                        <th className="px-4 py-3 w-1/4">দেখুন</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                      {module.resources?.map((item) => (
                        <tr
                          key={item.id}
                          className="text-gray-700 dark:text-gray-400"
                        >
                          <td className="px-1 lg:px-4 py-3 w-1/2">
                            <div className="flex items-center text-sm">
                              <div>
                                <p className="font-semibold">{item.title}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm w-1/4">
                            {item.date}
                          </td>

                          <td>
                            <button
                              className="px-4 py-3 text-sm flex items-center bg-[#F3F4F6] dark:bg-gray-800 dark:text-white cursor-pointer w-[110px] border rounded m-2 hover:bg-slate-400"
                              onClick={() => modalHandler(item)}
                            >
                              <div className="flex items-center">
                                <span className="mr-1">চেক করুন</span>
                                <Eye />
                              </div>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </>
      ))} */}
      <ResourcesModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalData={modalData}
      />
    </>
  );
};

export default ResourceTable;

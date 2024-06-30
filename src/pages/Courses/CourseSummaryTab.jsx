/* eslint-disable react/prop-types */
import { useState } from 'react';
import ClassSummaryAssingment from './ClassSummaryAssingment';
import ClassSummaryRecording from './ClassSummaryRecording';
import ClassSummaryResources from './ClassSummaryResources';

const CourseSummaryTab = ({ data }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="overflow-hidden rounded-xl p-1 mb-3 ml-2 mt-3">
                <ul className="flex items-center gap-2 text-sm font-medium">
                    <li>
                        <a
                            onClick={() => setActiveTab(0)}
                            className={`inline-flex cursor-pointer items-center gap-2 rounded px-3 py-2 dark:bg-gray-800 dark:text-white  hover:shadow border ${activeTab === 0 ? 'tab-color shadow' : ''}`}>
                            এসাইনমেন্ট
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setActiveTab(1)}
                            className={`inline-flex cursor-pointer items-center gap-2 rounded px-3 py-2 dark:bg-gray-800 dark:text-white  hover:shadow border ${activeTab === 1 ? 'tab-color shadow' : ''}`}>

                            রেকডিং
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setActiveTab(2)}
                            className={`inline-flex cursor-pointer items-center gap-2 rounded border px-3 py-2 dark:bg-gray-800 dark:text-white  hover:shadow ${activeTab === 2 ? 'tab-color shadow' : ''}`}>
                            রিসোর্স সমূহ
                        </a>
                    </li>
                </ul>
            </div>
            <div className="py-3 ml-3">
                <div className={`${activeTab === 0 ? 'block' : 'hidden'} transition-opacity duration-600`}><ClassSummaryAssingment data={data.assignments} /></div>
                <div className={`${activeTab === 1 ? 'block' : 'hidden'} transition-opacity duration-600`}><ClassSummaryRecording data ={data.class} /></div>
                <div className={`${activeTab === 2 ? 'block' : 'hidden'} transition-opacity duration-600`}><ClassSummaryResources data={data.resources} /></div>
            </div>
        </div>
    );
};

export default CourseSummaryTab;

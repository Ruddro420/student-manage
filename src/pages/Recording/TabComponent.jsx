import { useState } from 'react';
import LiveClass from './LiveClass';
import NoDataFound from '../../components/NoDataFound/NoDataFound';

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="overflow-hidden rounded-xl p-1">
                <ul className="flex items-center gap-2 text-sm font-medium">
                    <li>
                        <a
                            onClick={() => setActiveTab(0)}
                            className={`inline-flex cursor-pointer items-center gap-2 rounded border px-3 py-2 dark:bg-gray-800 dark:text-white hover:shadow ${activeTab === 0 ? 'tab-color shadow' : ''}`}
                        >
                            লাইভ ক্লাস
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setActiveTab(1)}
                            className={`inline-flex cursor-pointer items-center gap-2 rounded border px-3 py-2 dark:bg-gray-800 dark:text-white  hover:shadow ${activeTab === 1 ? 'tab-color shadow' : ''}`}
                        >
                            সাপোর্ট ক্লাস
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setActiveTab(2)}
                            className={`inline-flex cursor-pointer items-center gap-2 rounded border px-3 py-2 dark:bg-gray-800 dark:text-white  hover:shadow ${activeTab === 2 ? 'tab-color shadow' : ''}`}
                        >
                            বোনাস ক্লাস
                        </a>
                    </li>

                </ul>
            </div>
            <div className="py-3">
                <div className={`${activeTab === 0 ? 'block' : 'hidden'} transition-opacity duration-600`}><LiveClass /></div>
                <div className={`${activeTab === 1 ? 'block' : 'hidden'} transition-opacity duration-600`}>
                    <NoDataFound />
                </div>
                <div className={`${activeTab === 2 ? 'block' : 'hidden'} transition-opacity duration-600`}>
                    <NoDataFound />
                </div>
            </div>
        </div>
    );
};

export default TabComponent;

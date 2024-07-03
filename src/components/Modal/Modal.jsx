/* eslint-disable react/prop-types */

const Modal = ({ isOpen, setIsOpen, modalData }) => {

    return (
        <div className="relative z-10">

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-md w-full p-6">
                        <div className="flex justify-between items-center pb-3">
                            <h3 className="text-xl font-semibold">{modalData.title}</h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="">
                            {modalData.study_plan}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;

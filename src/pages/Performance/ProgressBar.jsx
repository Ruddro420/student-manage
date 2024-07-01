/* eslint-disable react/prop-types */
const ProgressBar = ({ percentage, color, label,text }) => {
    return (
        <div className="w-[200px] bg-gray-200 rounded-full h-6 mb-4">
            <div
                className="h-6 rounded-full text-center text-white"
                style={{
                    width: `${percentage}%`,
                    backgroundColor: color
                }}
            >

            </div>
            <div className='mt-3'>
                <h2 className='font-bold dark:text-white'>{text} {label}%</h2>
            </div>
        </div>
    );
};

export default ProgressBar;

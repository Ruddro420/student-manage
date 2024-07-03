import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClipboardCheckIcon, Link } from "lucide-react";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import { dateFormat } from "../../lib/date";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Assingment = () => {
    const {id} = useParams()
    const [assignment, setAssignment] = useState(null)
    const [mySubmission, setMySubmission] = useState(null)
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {data} = user
    // console.log(data);
    useEffect(()=>{
        axiosSecure.get('/courses/assignments/'+ id)
        .then(res=>{
            // console.log(res.data);
            setAssignment(res.data)
        })

        axiosSecure.get(`/assignments/submission/${data?.id}/${assignment?.moduleId}/${assignment?.id}`)
        .then(res=>{
            console.log(res.data);
            setMySubmission(res.data)
        })

    }, [axiosSecure, id, data.id,])

    const updateSubmission = () => {
        axiosSecure.get(`/assignments/submission/${data?.id}/${assignment?.moduleId}/${assignment?.id}`)
        .then(res=>{
            console.log(res.data);
            setMySubmission(res.data)
        })
    }

    const handleSubmission = (e) => {
        e.preventDefault()
        toast.promise(axiosSecure.post('/courses/assignments/submission', {
            assignmentId: id,
            studentId: data.id,
            task: e.target.task.value,
            moduleId: assignment.moduleId,
        }).then(()=>{
            updateSubmission()
        }), {
            loading: 'Submitting assignment...',
            success: <b>Successfully Submitted!</b>,
            error: <b>Something went wrong.</b>,
        })
        
    }
    
    
    

    return (
        <>
        {assignment && <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"><b>এসাইনমেন্টঃ</b> {assignment.title}</h2>
            <hr />
            <div className="grid gap-10 mb-8 md:grid-cols-2 mt-5">
                {/* Left Bar */}
                <div>
                    <div className="mt-3 text-justify dark:text-white">
                        {assignment.description}
                    </div>
                    <div className="mt-8 dark:text-white">
                        <p><b>Submission Instruction : Please submit your home work link.</b></p>
                        <p className="mt-3">শুধুমাত্র এই মডিউল এ, আপনাদের এসাইনমেন্ট টি গিটহাবে সাবমিট করা বাধ্যতামূলক নয়। আপনারা ডক ফাইলে বা অন্য কোনো উপায়ে এসাইনমেন্ট টি সাবমিট করতে পারবেন।</p>
                    </div>
                </div>
                {/* Right Bar */}
                <div className="col-span-1 bg-[#1D2939] text-white p-5 rounded">
                    <div>
                    <div className="flex justify-between">{mySubmission?.status === "confirm" && <h2 className="text-2xl">মার্ক পেয়েছেন <b className="bg-[#12B76A] text-white px-5 py-1 rounded">{mySubmission?.mark}</b></h2>}
                        {mySubmission?.status === 'pending' && <p className="bg-[#9333EA] text-white px-5 py-1 rounded">Pending</p>}
                        </div>
                        <div className="mt-8">
                            <h4 className="text-[#12B76A] mb-3">ইন্সট্র্যাক্টর ফিডব্যাক</h4>
                            <p>Congratulations!! You have done very well. Keep up the good work. Wish you all the best.</p>
                        </div>
                        <div className="mt-5">
                            <label className="block text-sm">
                                <div className="flex justify-between">
                                    <div><span className="text-[#12B76A] dark:text-gray-400"><b>আপনার সাবমিশন</b></span></div>
                                    <div><h4> <b>ডেডলাইনঃ</b> {dateFormat(assignment.deadline)}</h4></div>
                                </div>
                                <form onSubmit={handleSubmission} className="flex items-center space-x-2 mt-3">
                                    <div className="bg-[#9333EA] text-white px-5 py-2 rounded">
                                        <Link />
                                    </div>
                                    <input
                                        className="block w-full text-sm border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input text-black"
                                        placeholder="https://docs.google.com/document/d/1NkNqjoKOd6WltifryyJNbYDM3yI1eTzGmQxLG5DDnZM"
                                        type="url"
                                        disabled={mySubmission}
                                        name="task"
                                        defaultValue={mySubmission?.task}
                                    />
                                    {!mySubmission && <button  className="bg-[#12B76A] text-white px-5 py-2 rounded flex items-center">
                                        <ClipboardCheckIcon className="w-5 h-5" />
                                    </button>}
                                </form>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        </>
    );
};

export default Assingment;

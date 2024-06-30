import { Check } from "lucide-react";

const Profile = () => {
  return (
    <div className="container px-6 mx-auto pb-8 flex-col  dark:text-white flex justify-center">
      <div className="profile-heading  flex flex-wrap gap-6 justify-center text-center w-full my-4">
        <div className="flex-1 text-left  text-2xl font-semibold ">
          প্রোফাইল
        </div>
        <div className="flex-1 p-4"></div>
      </div>

      <div className="profile-section grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center text-center w-full">
        {/* Profile Section */}
        <div className="flex-1 border rounded-xl p-4">
          <di className="text-left font-semibold flex text-lg mb-4">
           পার্সোনাল ডিটেইলস
          </di>
          <form action="">
            <div className="w-full">
              <label className="block text-sm text-left">
                <span className="text-gray-700 dark:text-gray-400">
                  পুরো নাম
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                 
                  placeholder="পুরো নাম"
                  type="text"
                />
              </label>
              <label className="block mt-4 text-sm text-left">
                <span className="text-gray-700 dark:text-gray-400">
                  প্রাইমারি ইমেইল
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="example@example.com"
                  type="email"
                  disabled
                />
              </label>
              <label className="block mt-4 text-sm text-left">
                <span className="text-gray-700 dark:text-gray-400">
                  অল্টারনেটিভ ইমেইল
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="Your Phone"
                  type="number"
                />
              </label>
              <label className="block mt-4 text-sm text-left">
                <span className="text-gray-700 dark:text-gray-400">
                  অল্টারনেটিভ নাম্বার
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="Your Phone"
                  type="number"
                />
              </label>
              <label className="block mt-4 text-sm text-left">
                <span className="text-gray-700 dark:text-gray-400">
                  প্রাইমারি নাম্বার
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="Your Phone"
                  type="number"
                />
              </label>
              <label className="block mt-4 text-sm text-left">
                <span className="text-gray-700 dark:text-gray-400">
                  অল্টারনেটিভ নাম্বার
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="Your Phone"
                 
                  type="number"
                />
              </label>

              <button className="w-full flex gap-2 justify-center items-center px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-black border border-transparent rounded-lg hover:bg-gray-800 focus:outline-none focus:shadow-outline-purple">
              
                  আপডেট 
                  <Check />
              </button>
            </div>
          </form>
        </div>
        {/* Password section */}
        <div className="flex-1">
          <div className="border rounded-xl p-4">
            <di className="text-left font-semibold flex text-lg mb-4">
              পাসওয়ার্ড পরিবর্তন
            </di>
            <form className="" action="">
              <label className="block text-sm text-left">
                <span className="text-gray-700 dark:text-gray-400">
                  কনফার্ম পাসওয়ার্ড
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder="পাসওয়ার্ড পরিবর্তন"
                  type="password"
                />
              </label>
              <label className="block mt-4 text-sm text-left">
                <span className="text-gray-700 dark:text-gray-400">
                  কনফার্ম পাসওয়ার্ড
                </span>
                <input
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                  placeholder=" কনফার্ম পাসওয়ার্ড"
                  type="password"
                />
              </label>

              <button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-black border border-transparent rounded-lg hover:bg-gray-800 focus:outline-none focus:shadow-outline-purple">
                পাসওয়ার্ড সেট করি
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

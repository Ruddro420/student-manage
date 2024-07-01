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

  return (
    <div className="container px-6 mx-auto grid">
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        পারফর্মেন্স
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-3  lg:justify-between">
          <div className="mt-3">
            <AssingPerformance
              percentage={kcal}
              label={convertToBengali(kcal)}
              unit="%"
              color="#F97066"
              text="হোমওয়ার্ক"
            />
          </div>
          <div className="mt-3">
            <AssingPerformance
              percentage={km}
              label={convertToBengali(km)}
              unit="%"
              color="#FFA36F"
              text="ক্লাস পারফর্মেন্স"
            />
          </div>
          <div className="mt-3">
            <AssingPerformance
              percentage={steps}
              label={convertToBengali(steps)}
              unit="%"
              color="#FFAB00"
              text="এসাইনমেন্ট"
            />
          </div>
        </div>
        {/* Right Side */}
        <div className="shadow p-5 rounded-lg border-2 pb-8 mt-3">
          <div className="mb-5 text-center">
            <h2 className="text-2xl text-[#FE8924] font-extrabold">
              বাহ! আপনি শিয়াল মামার মত এভারেজ।
            </h2>
            <p className="dark:text-white">
              নিজেকে আরেকটু আপগ্রেড করেন, আরেকটু পুশ করেন। আপনার পক্ষে সম্ভব
              বেস্ট হয়ে উঠা।
            </p>
          </div>
          <hr />
          <div className="flex justify-between mt-5 lg:gap-0 gap-8 flex-wrap">
            <div>
              <ProgressBar
                percentage={steps}
                color="#12B76A"
                text="সামগ্রিক প্রোগ্রেস"
                label={convertToBengali(steps)}
              />
            </div>
            <div>
              <ProgressBar
                percentage={km}
                color="#9333EA"
                text="ক্লাস উপস্থিতি"
                label={convertToBengali(steps)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;

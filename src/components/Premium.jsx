import React from "react";

const Premium = () => {
  return (
    <div className="w-full flex justify-center mt-20">
      <div className="flex w-3/4">

        {/* Silver Membership */}
        <div className="card bg-base-300 rounded-box p-6 grow flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-semibold mb-3 text-center">
              Silver Membership
            </h1>
            <ul className="list-disc list-inside space-y-2">
              <li>Chat with your connections</li>
              <li>Verified blue tick</li>
              <li>Limited profile visibility boost</li>
              <li>3 months validity</li>
            </ul>
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-gradient-to-r from-gray-500 to-gray-700
                               p-2 rounded-2xl w-30 text-white
                               hover:scale-105 transition-transform duration-200">
              Buy Silver
            </button>
          </div>
        </div>

        <div className="divider divider-horizontal mx-4"></div>

        {/* Gold Membership */}
        <div className="card bg-base-300 rounded-box p-6 grow flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-semibold mb-3 text-center">
              Gold Membership
            </h1>
            <ul className="list-disc list-inside space-y-2">
              <li>Unlimited chat with connections</li>
              <li>Verified blue tick</li>
              <li>High profile visibility boost</li>
              <li>Priority support</li>
              <li>6 months validity</li>
            </ul>
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600
                               p-2 rounded-2xl w-30 text-black font-semibold
                               hover:scale-105 transition-transform duration-200">
              Buy Gold
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Premium;


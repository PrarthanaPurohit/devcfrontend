import React from 'react'

const UserCard = ({ user }) => {
  if (!user) return null;
  const { firstName, lastName, age, gender, about, photoUrl, skills = [] } = user;

  return (
    <div className="hover-3d flex justify-center m-10">
      <div className="hover-3d w-96 bg-base-200 p-5 rounded-2xl shadow-xl">

        {/* Profile Image */}
        <figure className="w-full rounded-2xl overflow-hidden mb-4">
          <img
            src={photoUrl}
            alt={firstName}
            className="w-full h-60 object-cover"
          />
        </figure>

        {/* 8 divs for 3D effect */}
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>

        {/* Content */}
        <div className="space-y-2 mx-4 px-1 py-1">
          <h2 className="text-xl font-bold">
            {firstName} {lastName}
          </h2>

          <p className="text-sm opacity-70">
            {gender} • {age} years
          </p>

          <p className="text-sm">{about}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="badge badge-neutral"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-3 flex gap-2">
            <button className="btn btn-primary btn-sm w-1/2">
              Connect
            </button>
            <button className="btn btn-outline btn-sm w-1/2">
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

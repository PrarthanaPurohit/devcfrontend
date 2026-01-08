import React from 'react'
import axios from 'axios';
import {BASE_URL} from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeFeed } from '../utils/feedSlice';

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  if (!user) return null;
  const { firstName, lastName, age, gender, about, photoUrl, skills = [], _id  } = user;

  // Handle accept or reject req
  const handleSendRequest = async (status, userId) => {
    try{
      const res = await  axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {},{withCredentials: true})
      dispatch(removeFeed(userId)) //remove current card
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="hover-3d flex justify-center m-10">
      <div className="hover-3d w-96 h-130 bg-base-200 p-5 rounded-2xl shadow-xl flex flex-col ">


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
        <div className="space-y-2 mx-4 px-1 py-1 mt-4 flex flex-col flex-1">

          <h2 className="text-xl font-bold mx-4">
            {firstName} {lastName}
          </h2>

          <p className="text-sm mx-4 opacity-70">
            {gender} • {age} years
          </p>

          <p className="mx-4 text-sm line-clamp-3">
  {about}
</p>


          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-2 mx-4">
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
          <div className="mt-auto flex justify-between items-center gap-4 mx-4 mb-2">

            <button 
            onClick={() => handleSendRequest("interested", _id)}
            className="btn btn-primary btn-sm w-1/2">
              Connect
            </button>
            <button 
            onClick= {() => handleSendRequest("ignored", _id)}
             className="btn btn-outline btn-sm w-1/2">
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

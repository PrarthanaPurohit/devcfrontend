import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserCard from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { addUser } from '../utils/userSlice';


const EditProfile = ({user}) => {
    
    
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [about, setAbout] = useState(user.about);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [error, setError] = useState('');
    const [showToast, setShowToast] = useState(false)
    const dispatch = useDispatch();



    const saveProfile = async() => {
        setError("");
        try{
            const res = await axios.patch(BASE_URL+"/profile/edit",{firstName, lastName, age, gender, photoUrl, about}, {withCredentials:true})
            dispatch(addUser(res?.data?.data))
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false)
            }, 3000)
        }catch(err){
            setError(err.response.data);
        }
        
    }
   
    
  return (
    <>
    <div className='flex justify-center'>
    <div className="flex justify-center m-8 p-6">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <label className="label">First Name</label>
        <input type="text"
        value={firstName}
         className="input" 
         placeholder="First name" 
         onChange={(e) => setFirstName(e.target.value)} />

        <label className="label">Last Name</label>
        <input type="text"
        value={lastName}
         className="input" 
         placeholder="Last name" 
         onChange={(e) => setLastName(e.target.value)}/>

         <label className="label">About</label>
        <textarea
  value={about}
  placeholder="About"
  className="textarea textarea-bordered w-full"
  rows={3}
  onChange={(e) => setAbout(e.target.value)}
  onInput={(e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }}
/>


      
         <label className="label">Gender</label>
<div className="join">
  <input 
    className="join-item btn" 
    type="radio" 
    name="gender" 
    aria-label="Male" 
    value="Male"
    checked={gender === "Male"}
    onChange={(e) => setGender(e.target.value)}
  />
  <input 
    className="join-item btn" 
    type="radio" 
    name="gender" 
    aria-label="Female" 
    value="Female"
    checked={gender === "Female"}
    onChange={(e) => setGender(e.target.value)}
  />
  <input 
    className="join-item btn" 
    type="radio" 
    name="gender" 
    aria-label="Other" 
    value="Other"
    checked={gender === "Other"}
    onChange={(e) => setGender(e.target.value)}
  />
</div>

         <label className="label">Age</label>
        <input type="text"
        value={age}
         className="input" 
         placeholder="Age" 
         onChange={(e) => setAge(e.target.value)}/>

         <label className="label">Last Name</label>
        <input type="text"
        value={photoUrl}
         className="input" 
         placeholder="Photo URL" 
         onChange={(e) => setPhotoUrl(e.target.value)}/>

        <p className="text-red-700">{error}</p>
        <button
        onClick={saveProfile}
        className="btn btn-neutral mt-4">Save</button>
      </fieldset>
    </div>
    <UserCard user = {{ firstName, lastName, about, age, gender, photoUrl }}/>
    </div>
    {showToast &&(
    <div className="toast toast-top toast-center">
  
  <div className="alert alert-success">
    <span>Profile saved successfully.</span>
  </div>
</div>)}
</>
  )
}

export default EditProfile
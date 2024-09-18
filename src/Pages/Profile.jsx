import React, { useState, useEffect } from "react";
import { useAuth } from "../context/contextapi";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { user, updateUser,userdata } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    userdata();
  }, []);

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    branch: "",
    batch: "",
    phone: "",
    profilePic: "",
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        firstName: user.username,
        lastName: user.lastName,
        branch: user.branch,
        batch: user.batch,
        phone: user.phone || "",
        profilePic: user.profilePic || "/img/profile.jpeg",
      });
    }
  }, [user]);

  const handleUpdate = async (data) => {
    try {
      const updatedData = await updateUser(data);
      setProfileData(updatedData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg my-5 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      <div className="flex flex-col items-center mb-6">
        <div className="relative group">
          <img
            src={profileData.profilePic} 
            alt="Profile"
            className="w-24 h-24 rounded-full border shadow-lg"
          />
          {isEditing && (
            <label
              htmlFor="profilePic"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-sm py-1 px-3 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Change
              <input
                type="file"
                id="profilePic"
                className="hidden"
                {...register("profilePic")}
              />
            </label>
          )}
        </div>
      </div>

      {!isEditing ? (
        <div className="text-left m-auto flex p-2 ">
          <p className="text-lg font-medium text-gray-700">
            Name : {user.username  || "firstName: N/A"}
          </p>
          <p className="text-gray-500">LastName :{profileData.lastName || " N/A"}</p>
          <p className="text-gray-500">Branch :{profileData.branch || " N/A"}</p>
          <p className="text-gray-500">Batch :{profileData.batch || "N/A"}</p>
          <p className="text-gray-500"> Phone :{profileData.phone || "N/A"}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="text-gray-700 font-medium mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              defaultValue={profileData.firstName}
              className={`border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.firstName ? "border-red-500" : ""
              }`}
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">First Name is required</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-gray-700 font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              defaultValue={profileData.lastName}
              className={`border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.lastName ? "border-red-500" : ""
              }`}
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">Last Name is required</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="branch" className="text-gray-700 font-medium mb-1">
              Branch
            </label>
            <input
              type="text"
              id="branch"
              name="branch"
              defaultValue={profileData.branch}
              className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("branch")}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="batch" className="text-gray-700 font-medium mb-1">
              Batch
            </label>
            <input
              type="text"
              id="batch"
              name="batch"
              defaultValue={profileData.batch}
              className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("batch")}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-700 font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              defaultValue={profileData.phone}
              className="border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("phone", {
                required: true,
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;

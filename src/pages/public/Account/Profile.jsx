import { useQuery } from "@tanstack/react-query";
import SetTitle from "../../../components/SetTitle";
import useAuthContext from "./../../../hooks/useAuthContext";
import useSecureAxios from "./../../../hooks/useSecureAxios";
import Loaders from "./../../../components/Loaders";
import { FaEdit, FaEye } from "react-icons/fa";
import SecondaryBtn from "./../../../components/Button/SecondaryBtn";
import { useState } from "react";

const Profile = () => {
  const { authUser } = useAuthContext();
  const { secureAxios } = useSecureAxios();
  const [isEdit, setIsEdit] = useState(false);

  const {
    data: profileInfo = {},
    isLoading,
    refetch: refetchProfileInfo,
  } = useQuery({
    queryKey: ["profileInfo", secureAxios, authUser],
    queryFn: async () => {
      const res = await secureAxios.get(
        `/user-profile?email=${authUser?.email}`
      );
      return res.data;
    },
  });

  const handelUpdateProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
  };

  return (
    <main>
      <SetTitle title="Profile - DMF Language Club"></SetTitle>
      {isLoading ? (
        <Loaders></Loaders>
      ) : (
        <section className="w-full md:w-4/5 lg:w-3/4 mx-auto my-10">
          <div className=" pt-10 border-2 p-5 rounded-lg shadow-lg">
            <h1 className="text-3xl my-2 text-center font-semibold">
              Profile Information
            </h1>
            <div className="flex flex-col md:flex-row w-full">
              <div className="card-body w-full md:w-1/3 relative">
                <button
                  onClick={() => setIsEdit(!isEdit)}
                  type="button"
                  className="btn btn-circle btn-outline text-blue-600 absolute top-0 text-xl "
                >
                  {isEdit ? <FaEye></FaEye> : <FaEdit></FaEdit>}
                </button>
                <div className="flex flex-col items-center gap-5">
                  <div className="avatar">
                    <div className="w-32 h-32 rounded-full">
                      <img src={profileInfo?.photoURL} />
                    </div>
                  </div>
                </div>
              </div>

              <form
                onSubmit={handelUpdateProfile}
                className="card-body w-full md:w-3/4"
              >
                <div className="form-control gap-2 w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    disabled={!isEdit}
                    defaultValue={profileInfo.displayName}
                    className="input input-bordered w-full text-xl border-blue-600 focus:outline-blue-600"
                  />
                </div>
                <div className="form-control gap-2 w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    disabled={!isEdit}
                    defaultValue={profileInfo.email}
                    className="input input-bordered w-full text-xl border-blue-600 focus:outline-blue-600"
                  />
                </div>
                <div className="form-control gap-2 w-full">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    disabled={!isEdit}
                    defaultValue={profileInfo?.phone}
                    className="input input-bordered w-full text-xl border-blue-600 focus:outline-blue-600"
                  />
                </div>
                <div className="form-control gap-2 w-full">
                  <input
                    type="url"
                    placeholder="Photo URL"
                    disabled={!isEdit}
                    defaultValue={profileInfo.photoURL}
                    className="input input-bordered w-full border-blue-600 focus:outline-blue-600"
                  />
                </div>
                <div className="form-control gap-2 w-full">
                  <select
                    name="gender"
                    disabled={!isEdit}
                    defaultValue={profileInfo?.gender}
                    className="input input-bordered w-full text-xl border-blue-600 focus:outline-blue-600"
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
                <div className="form-control gap-2 w-full">
                  <textarea
                    placeholder="Your Address"
                    rows={2}
                    name="address"
                    disabled={!isEdit}
                    defaultValue={profileInfo?.address}
                    className="border rounded-lg p-3 w-full text-xl border-blue-600 focus:outline-blue-600"
                  ></textarea>
                </div>
                <div className="form-control gap-2 w-full">
                  <SecondaryBtn disabled={!isEdit}>Update</SecondaryBtn>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Profile;

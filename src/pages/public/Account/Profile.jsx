import { useQuery } from "@tanstack/react-query";
import SetTitle from "../../../components/SetTitle";
import useAuthContext from "./../../../hooks/useAuthContext";
import useSecureAxios from "./../../../hooks/useSecureAxios";
import Loaders from "./../../../components/Loaders";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
  const { authUser } = useAuthContext();
  const { secureAxios } = useSecureAxios();

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

  console.log(profileInfo);

  return (
    <main>
      <SetTitle title="Profile - DMF Language Club"></SetTitle>
      {isLoading ? (
        <Loaders></Loaders>
      ) : (
        <section className="w-3/4 mx-auto my-10">
          <div className=" pt-10 border-2 p-5 rounded-lg shadow-lg">
            <h1 className="text-3xl my-2 text-center font-semibold">
              Profile Information
            </h1>
            <div className="flex w-full">
              <div className="w-1/3 flex flex-col items-center gap-5">
                <div className="avatar">
                  <div className="w-32 h-32 rounded-full">
                    <img src={profileInfo?.photoURL} />
                  </div>
                </div>
                <div className="form-control gap-2">
                  <div className="flex gap-5 items-center">
                    <input
                      type="url"
                      placeholder="Photo URL"
                      disabled
                      defaultValue={profileInfo.photoURL}
                      className="input input-bordered w-full border-blue-600 focus:outline-blue-600"
                    />
                    <button type="button" className="text-2xl">
                      <FaEdit></FaEdit>
                    </button>
                  </div>
                </div>
              </div>
              <form className="card-body w-3/4">
                <div className="form-control gap-2 w-full">
                  <div className="flex gap-2 w-full items-center">
                    <input
                      type="text"
                      placeholder="Name"
                      disabled
                      defaultValue={profileInfo.displayName}
                      className="input input-bordered w-full text-xl border-blue-600 focus:outline-blue-600"
                    />
                    <button type="button" className="text-2xl">
                      <FaEdit></FaEdit>
                    </button>
                  </div>
                </div>
                <div className="form-control gap-2 w-full">
                  <div className="flex gap-2 w-full items-center">
                    <input
                      type="email"
                      placeholder="Email"
                      disabled
                      defaultValue={profileInfo.email}
                      className="input input-bordered w-full text-xl border-blue-600 focus:outline-blue-600"
                    />
                    <button type="button" className="text-2xl">
                      <FaEdit></FaEdit>
                    </button>
                  </div>
                </div>
                <div className="form-control gap-2 w-full">
                  <div className="flex gap-2 w-full items-center">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      disabled
                      defaultValue={profileInfo?.phone}
                      className="input input-bordered w-full text-xl border-blue-600 focus:outline-blue-600"
                    />
                    <button type="button" className="text-2xl">
                      <FaEdit></FaEdit>
                    </button>
                  </div>
                </div>
                <div className="form-control gap-2 w-full">
                  <div className="flex gap-2 w-full items-center">
                    <select
                      name="gender"
                      disabled
                      defaultValue={profileInfo?.gender}
                      className="input input-bordered w-full text-xl border-blue-600 focus:outline-blue-600"
                    >
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                    </select>
                    <button type="button" className="text-2xl">
                      <FaEdit></FaEdit>
                    </button>
                  </div>
                </div>
                <div className="form-control gap-2 w-full">
                  <div className="flex gap-2 w-full items-center">
                    <textarea
                      placeholder="Your Address"
                      rows={2}
                      name="address"
                      disabled
                      defaultValue={profileInfo?.address}
                      className="border rounded-lg p-3 w-full text-xl border-blue-600 focus:outline-blue-600"
                    ></textarea>
                    <button type="button" className="text-2xl">
                      <FaEdit></FaEdit>
                    </button>
                  </div>
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

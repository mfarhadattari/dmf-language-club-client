import { useEffect, useState } from "react";
import useAuthContext from "./../../hooks/useAuthContext";
import useSecureAxios from "./../../hooks/useSecureAxios";
import Loaders from "../../components/Loaders";
const InstructorHome = () => {
  const { authUser } = useAuthContext();
  const { secureAxios } = useSecureAxios();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    secureAxios.get(`/instructor/data?email=${authUser?.email}`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [authUser, secureAxios]);
  
  return (
    <main>
      <section>
        <h1 className="text-3xl italic">Welcome {authUser?.displayName}!</h1>
      </section>
      {loading ? (
        <Loaders></Loaders>
      ) : (
        <section>
          <div className="mt-10 space-y-10 ">
            <div className="flex gap-10 w-full">
              <div className="stat border-2 px-10 rounded-lg shadow-lg w-1/2">
                <div className="stat-figure text-secondary">
                  <div className="avatar">
                    <div className="w-20 rounded-full">
                      <img src="https://cdn-icons-png.flaticon.com/128/1043/1043730.png" />
                    </div>
                  </div>
                </div>
                <div className="stat-value text-5xl">{data?.totalClass}</div>
                <div className="stat-title text-xl">Total Class</div>
              </div>
              <div className="stat border-2 px-10 rounded-lg shadow-lg w-1/2">
                <div className="stat-figure text-secondary">
                  <div className="avatar">
                    <div className="w-20 rounded-full">
                      <img src="https://cdn-icons-png.flaticon.com/128/3135/3135810.png" />
                    </div>
                  </div>
                </div>
                <div className="stat-value text-5xl">{data?.totalStudent}</div>
                <div className="stat-title text-xl">Total Student</div>
              </div>
            </div>
            <div className="flex gap-10 w-full">
              <div className="stat border-2 px-5 rounded-lg shadow-lg">
                <div className="stat-figure text-secondary">
                  <div className="avatar">
                    <div className="w-20 rounded-full">
                      <img src="https://cdn-icons-png.flaticon.com/128/6897/6897039.png" />
                    </div>
                  </div>
                </div>
                <div className="stat-value text-5xl">{data?.pendingClass}</div>
                <div className="stat-title text-xl">Pending Class</div>
              </div>
              <div className="stat border-2 px-5 rounded-lg shadow-lg">
                <div className="stat-figure text-secondary">
                  <div className="avatar">
                    <div className="w-20 rounded-full">
                      <img src="https://cdn-icons-png.flaticon.com/128/3699/3699516.png" />
                    </div>
                  </div>
                </div>
                <div className="stat-value text-5xl">{data?.approveClass}</div>
                <div className="stat-title text-xl">Approve Class</div>
              </div>
              <div className="stat border-2 px-5 rounded-lg shadow-lg">
                <div className="stat-figure text-secondary">
                  <div className="avatar">
                    <div className="w-20 rounded-full">
                      <img src="https://cdn-icons-png.flaticon.com/128/10099/10099802.png" />
                    </div>
                  </div>
                </div>
                <div className="stat-value text-5xl">{data?.deniedClass}</div>
                <div className="stat-title text-xl">Denied Class</div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default InstructorHome;

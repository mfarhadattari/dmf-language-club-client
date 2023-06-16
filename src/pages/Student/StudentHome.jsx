import { useEffect, useState } from "react";
import Loaders from "../../components/Loaders";
import useAuthContext from "../../hooks/useAuthContext";
import useSecureAxios from "./../../hooks/useSecureAxios";
import SetTitle from './../../components/SetTitle';

const StudentHome = () => {
  const { authUser } = useAuthContext();
  const { secureAxios } = useSecureAxios();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    secureAxios.get(`/student/data?email=${authUser.email}`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [authUser, secureAxios]);

  return (
    <main>
      <SetTitle title="Dashboard - DMF Language Club"></SetTitle>
      <section>
        <h1 className="text-3xl italic">Welcome {authUser?.displayName}!</h1>
      </section>
      {loading ? (
        <Loaders></Loaders>
      ) : (
        <section>
          <div className="mt-10 space-y-5 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <div className="stat border-2 px-10 rounded-lg shadow-lg ">
                <div className="stat-figure text-secondary">
                  <div className="avatar">
                    <div className="w-20 rounded-full">
                      <img src="https://cdn-icons-png.flaticon.com/128/5626/5626719.png" />
                    </div>
                  </div>
                </div>
                <div className="stat-value text-5xl">{data?.totalCarts}</div>
                <div className="stat-title text-xl">Selected</div>
              </div>
              <div className="stat border-2 px-10 rounded-lg shadow-lg ">
                <div className="stat-figure text-secondary">
                  <div className="avatar">
                    <div className="w-20 rounded-full">
                      <img src="https://cdn-icons-png.flaticon.com/128/6815/6815043.png" />
                    </div>
                  </div>
                </div>
                <div className="stat-value text-5xl">{data?.totalOrders}</div>
                <div className="stat-title text-xl">Orders</div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default StudentHome;

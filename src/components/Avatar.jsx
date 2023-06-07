import useAuthContext from "../hooks/useAuthContext";

const Avatar = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center gap-3">
      <button className="btn btn-sm">Logout</button>
      <div className="avatar">
        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          {
            <img
              src={
                authUser?.photoURL
                  ? authUser.photoURL
                  : "https://cdn-icons-png.flaticon.com/128/149/149071.png"
              }
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Avatar;
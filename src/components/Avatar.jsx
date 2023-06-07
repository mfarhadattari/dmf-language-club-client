import useAuthContext from "../hooks/useAuthContext";
import ConfirmationAlert from "./Message/ConfirmationAlert";
import FirebaseErrorAlert from "./Message/FirebaseErrorAlert";
import SuccessAlert from "./Message/SuccessAlert";

const Avatar = () => {
  const { authUser, logoutUser } = useAuthContext();

  const handelLogOut = () => {
    ConfirmationAlert("Want to logout?").then((res) => {
      if (res.isConfirmed) {
        logoutUser()
          .then(() => {
            SuccessAlert("Logout Successfully!");
          })
          .catch((error) => {
            FirebaseErrorAlert(error.message);
          });
      }
    });
  };

  return (
    <div className="flex items-center gap-3">
      <button className="btn btn-sm" onClick={handelLogOut}>
        Logout
      </button>
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

import Swal from "sweetalert2";

const FirebaseErrorAlert = (message) => {
  const sentence = message.split("/")[1].slice(0, -2).split("-").join(" ");
  const title = sentence[0].toUpperCase() + sentence.slice(1);
  return Swal.fire({
    icon: "error",
    title: title,
    showConfirmButton: false,
    timer: 2000,
  });
};

export default FirebaseErrorAlert;

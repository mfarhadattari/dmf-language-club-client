import Swal from "sweetalert2";

const ConfirmationAlert = (message) => {
  return Swal.fire({
    title: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  });
};

export default ConfirmationAlert;

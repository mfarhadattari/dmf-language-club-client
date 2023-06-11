import Swal from "sweetalert2";

const Feedback = () => {
  return Swal.fire({
    title: "Feedback",
    input: "textarea",
    inputPlaceholder: 'Type your message here...',
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Send",
  });
};

export default Feedback;

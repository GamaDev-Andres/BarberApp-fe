import swal from "sweetalert2";

export const handleErrors = (response) => {
  swal.fire("Error!", response.msg, "error");
};

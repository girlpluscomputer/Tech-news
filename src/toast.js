import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const toast = (
  errorMessage,
  backgroundColor = 'lightBlue',
  duration = 3000
) => {
  return Toastify({
    text: errorMessage,
    duration,
    close: true,
    gravity: "top",
    position: 'right',
    backgroundColor,
    stopOnFocus: true
  }).showToast();
};

toast.danger = errorMessage => toast(errorMessage, 'tomato');

export default toast;

import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const toast = (message, backgroundColor = 'lightBlue', duration = 3000) => {
  return Toastify({
    text: message,
    duration,
    close: true,
    gravity: 'top',
    position: 'right',
    backgroundColor,
    stopOnFocus: true
  }).showToast();
};

toast.danger = message => toast(message, 'tomato');
toast.success = message => toast(message, 'green');

export default toast;

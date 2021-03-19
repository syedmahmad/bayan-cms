import { useEffect } from 'react';

var useClickAwayListener = function useClickAwayListener(ref, callback) {
  // Call the callback function if clicked on outside of element
  var handleClickOutside = function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(function () {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

export default useClickAwayListener;
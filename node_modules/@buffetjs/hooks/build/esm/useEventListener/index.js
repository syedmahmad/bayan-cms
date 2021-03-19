import { useEffect, useRef } from 'react';

function useEventListener(event, eventListener) {
  var isEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var listenerRef = useRef();
  listenerRef.current = eventListener;
  useEffect(function () {
    function handleEvent(e) {
      listenerRef.current(e);
    }

    if (isEnabled) {
      window.addEventListener(event, handleEvent);
    } else {
      window.removeEventListener(event, handleEvent);
    }

    return function () {
      window.removeEventListener(event, handleEvent);
    };
  }, [event, isEnabled]);
}

export default useEventListener;
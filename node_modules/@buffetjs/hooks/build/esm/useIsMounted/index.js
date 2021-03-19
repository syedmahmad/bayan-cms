import { useRef, useEffect } from 'react'; // Hook taken from https://github.com/hupe1980/react-is-mounted-hook

function useIsMounted() {
  var ref = useRef(true);
  useEffect(function () {
    ref.current = true;
    return function () {
      ref.current = false;
    };
  }, []);
  return ref.current;
}

export default useIsMounted;
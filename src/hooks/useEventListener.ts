import { useEffect, useRef } from 'react';

function useEventListener<T extends keyof WindowEventMap>(
  eventType: T,
  callback: (event: WindowEventMap[T]) => void,
  element: Window | HTMLElement,
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;

    const handler = (e: WindowEventMap[T]) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}

export default useEventListener;

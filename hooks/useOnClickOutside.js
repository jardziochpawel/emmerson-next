import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
            const listener = event => {

                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }

                handler(event);
            };
            window.document.addEventListener('mousedown', listener);
            return () => {
                window.document.removeEventListener('mousedown', listener);
            };
        },
        [ref, handler],
    );
};
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(() => {
    const result = window.localStorage.getItem(key);
    try {
      return result ? JSON.parse(result) : initialState;
    } catch (err) {
      return initialState;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;

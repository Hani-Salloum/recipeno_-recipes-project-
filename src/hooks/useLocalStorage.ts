// import { useState, useEffect } from "react";

// function useLocalStorage<T>(key: string, initialValue: T) {
//   const [storedValue, setStoredValue] = useState<T>(initialValue);
//   const [isHydrated, setIsHydrated] = useState(false); // ✅ ensure client-side only

//   // Load from localStorage after mount
//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     try {
//       const item = window.localStorage.getItem(key);
//       setStoredValue(item ? (JSON.parse(item) as T) : initialValue);
//     } catch (error) {
//       console.error("Error reading localStorage", error);
//     }

//     setIsHydrated(true);
//   }, [key]);

//   const setValue = (value: T | ((val: T) => T)) => {
//     try {
//       setStoredValue((prevValue) => {
//         const newValue = value instanceof Function ? value(prevValue) : value;
//         if (typeof window !== "undefined") {
//           window.localStorage.setItem(key, JSON.stringify(newValue));
//         }
//         return newValue;
//       });
//     } catch (error) {
//       console.error("Error setting localStorage", error);
//     }
//   };

//   return [isHydrated ? storedValue : initialValue, setValue] as const;
// }

// export default useLocalStorage;

import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [state, setState] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      setState(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  };

  return [state, setValue];
}

export default useLocalStorage;

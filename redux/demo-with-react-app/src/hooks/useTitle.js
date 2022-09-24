import { useEffect } from 'react';

export const useTitle = newTitle => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = newTitle;
    return () => {
      document.title = prevTitle;
    };
  });
};

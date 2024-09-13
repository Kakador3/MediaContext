// src/shared/hooks/useMediaQuery.ts
import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  console.log(matches);

  useEffect(() => {
    // Проверка существования window для безопасного использования на сервере
    if (typeof window !== "undefined") {
      const matchMedia = window.matchMedia(query);

      const handleChange = () => {
        setMatches(matchMedia.matches);
      };

      handleChange(); // Установить начальное значение

      if (matchMedia.addEventListener) {
        matchMedia.addEventListener("change", handleChange);
        return () => {
          matchMedia.removeEventListener("change", handleChange);
        };
      } else {
        matchMedia.addListener(handleChange);
        return () => {
          matchMedia.removeListener(handleChange);
        };
      }
    }
  }, [query]);

  return matches;
};

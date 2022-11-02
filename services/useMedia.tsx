import React, { useEffect, useState } from "react";

const useMedia = (media: any) => {
  const [match, setMatch] = useState(true);

  useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    };

    window.addEventListener("resize", changeMatch);

    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;

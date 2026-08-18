// src/components/Typewriter.jsx
import { useState, useEffect } from "react";

function Typewriter({ words }) {
  const [wordIndex,  setWordIndex]  = useState(0);
  const [displayed,  setDisplayed]  = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let timer;

    if (!isDeleting && displayed.length < word.length) {
      timer = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === word.length) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 45);
    } else {
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, wordIndex, words]);

  return (
    <span style={{ color: "#00f5d4", borderRight: "2px solid #00f5d4", paddingRight: 2 }}>
      {displayed}
    </span>
  );
}

export default Typewriter;

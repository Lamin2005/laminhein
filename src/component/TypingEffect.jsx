import React, { useState, useEffect, useMemo } from "react";
import "./Header.css";
import { useTheme } from "../context/ThemeContext";

const TypingEffect = () => {
  const words = useMemo(() => ["Computer Science", "Developer"], []);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const {darkMode} = useTheme();

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const speed = isDeleting ? 80 : 150;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before delete
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex,words]);

  return (
    <h2 style={{ color: `${darkMode ? "white" : "black"}` }}>
      And I am a
      <span className="typing-text"> {displayText}</span>
      <span className="cursor" />
    </h2>
  );
};

export default TypingEffect;

import React, { useState, useEffect } from "react";

const TypingEffect = ({ textArray, typingSpeed, backspaceSpeed, delay }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTyping) {
        // Typing
        setDisplayText((prevText) => {
          const targetText = textArray[currentIndex];
          if (prevText !== targetText) {
            const nextChar = targetText.charAt(prevText.length);
            return prevText + nextChar;
          } else {
            setIsTyping(false);
            setTimeout(() => {
              setIsTyping(true);
              setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
            }, delay);
            return prevText;
          }
        });
      } else {
        // Backspacing
        setDisplayText((prevText) => {
          if (prevText.length > 0) {
            return prevText.slice(0, -1);
          } else {
            setIsTyping(true);
            return "";
          }
        });
      }
    }, isTyping ? typingSpeed : backspaceSpeed);

    return () => clearInterval(intervalId);
  }, [currentIndex, isTyping, textArray, typingSpeed, backspaceSpeed, delay]);

  return <div>{displayText}</div>;
};

export default TypingEffect;

import React, { useEffect, useState } from "react";

const Typetext = ({ phrases }) => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  useEffect(() => {
    const currentPhrases = phrases[phraseIndex];
    let timeout = setTimeout(() => {
      setText(currentPhrases.slice(0, charIndex));

      if (!isDeleted && charIndex <= currentPhrases.length) {
        setCharIndex((prev) => prev + 1);
        setTypingSpeed(Math.random() * (120 - 40) + 40);
      }
      if (!isDeleted && charIndex === currentPhrases.length + 1) {
        setIsDeleted(true);
        setTypingSpeed(1500);
      }
      if (isDeleted && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
        setTypingSpeed(50);
      }
      if (isDeleted && charIndex === 0) {
        setIsDeleted(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setTypingSpeed(200);
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleted, phraseIndex, phrases, typingSpeed]);
  return (
    <>
      <div>
        <h2 className=" text-xl sm:text-2xl flex justify-center font-semibold min-h-[2.5rem] min-w-[300px]">
          {text}
          {/* { text && <span className="animate-pulse ml-1">|</span> } */}
        </h2>
      </div>
    </>
  );
};

export default Typetext;

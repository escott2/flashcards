import { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ question, answer }) => {
  const [displayQuestion, setDisplayQuestion] = useState(true);

  const handleToggleCard = () => {
    setDisplayQuestion((prevValue) => !prevValue);
  };

  return (
    <div onClick={handleToggleCard} className="flashcard">
      {displayQuestion ? <div>{question}</div> : <div>{answer}</div>}
    </div>
  );
};

export default Flashcard;

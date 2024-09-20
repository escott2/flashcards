import { useState } from "react";
import flashCardData from "../../data/flashcardData.json";
import Flashcard from "./Flashcard";

const FlashCardPosition = ({ currentPosition, totalCards }) => {
  return (
    <p className="flashcard-position">
      {currentPosition}/{totalCards}
    </p>
  );
};

const SingleCardLayout = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const totalCards = flashCardData.length;

  const handlePrevious = () => {
    if (currentCardIndex >= 1) {
      setCurrentCardIndex((prevValue) => prevValue - 1);
    }
  };

  const handleNext = () => {
    if (currentCardIndex < totalCards - 1) {
      setCurrentCardIndex((prevValue) => prevValue + 1);
    }
  };

  return (
    <>
      {totalCards > 0 && (
        <FlashCardPosition
          currentPosition={currentCardIndex + 1}
          totalCards={totalCards}
        />
      )}
      <Flashcard
        question={flashCardData[currentCardIndex].question}
        answer={flashCardData[currentCardIndex].answer}
      />
      <div className="button-container">
        <button onClick={handlePrevious} className="button previous">
          <span class="arrow">←</span>
        </button>
        <button onClick={handleNext} className="button next">
          <span class="arrow">→</span>
        </button>
      </div>
    </>
  );
};

export default SingleCardLayout;

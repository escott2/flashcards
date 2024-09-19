import flashCardData from "../../data/flashcardData.json";
import Flashcard from "./Flashcard";

const Flashcards = () => {
  return (
    <>
      {flashCardData.map((flashcard) => {
        return (
          <Flashcard
            key={flashcard.id}
            question={flashcard.question}
            answer={flashcard.answer}
          />
        );
      })}
    </>
  );
};

export default Flashcards;

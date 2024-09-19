const Flashcard = ({ question, answer }) => {
  return (
    <>
      <h2>Front</h2>
      {question}
      <h2>Back</h2>
      {answer}
    </>
  );
};

export default Flashcard;

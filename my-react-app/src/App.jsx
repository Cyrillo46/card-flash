import { useState } from "react";
import "./App.css";

const FlashcardApp = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const handleNewQuestionChange = (event) => {
    setNewQuestion(event.target.value);
  };

  const handleNewAnswerChange = (event) => {
    setNewAnswer(event.target.value);
  };

  const handleAddFlashcard = () => {
    if (newQuestion.trim() !== "" && newAnswer.trim() !== "") {
      const newFlashcard = {
        question: newQuestion,
        answer: newAnswer,
      };

      setFlashcards([...flashcards, newFlashcard]);
      setNewQuestion("");
      setNewAnswer("");
    }
  };

  const handleDeleteFlashcard = (index) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards.splice(index, 1);
    setFlashcards(updatedFlashcards);
  };

  return (
    <div className="container">
      <h1 className="title">Flashcard App</h1>

      <div className="flashcard-form">
        <input
          type="text"
          value={newQuestion}
          onChange={handleNewQuestionChange}
          className="flashcard-input"
          placeholder="Enter a new question"
        />
        <input
          type="text"
          value={newAnswer}
          onChange={handleNewAnswerChange}
          className="flashcard-input"
          placeholder="Enter the answer"
        />
        <button className="add-button" onClick={handleAddFlashcard}>
          Add
        </button>
      </div>

      <div className="flashcard-list">
        {flashcards.map((flashcard, index) => (
          <div className="flashcard" key={index}>
            <h3 className="flashcard-title">Flashcard {index + 1}</h3>
            <p className="flashcard-content">Question: {flashcard.question}</p>
            <p className="flashcard-content">Answer: {flashcard.answer}</p>
            <button
              className="delete-button"
              onClick={() => handleDeleteFlashcard(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashcardApp;

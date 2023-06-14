import React, { useState } from "react";
import "./App.css";

const FlashcardApp = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const addFlashcard = () => {
    const newFlashcards = [...flashcards, { question, answer }];
    setFlashcards(newFlashcards);
    setQuestion("");
    setAnswer("");
  };

  const removeFlashcard = (index) => {
    const newFlashcards = [...flashcards];
    newFlashcards.splice(index, 1);
    setFlashcards(newFlashcards);
  };

  return (
    <div>
      <h1>Flashcard App</h1>

      <div>
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={addFlashcard}>Add Flashcard</button>
      </div>

      <div>
        {flashcards.map((flashcard, index) => (
          <div key={index}>
            <div>Question: {flashcard.question}</div>
            <div>Answer: {flashcard.answer}</div>
            <button onClick={() => removeFlashcard(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashcardApp;

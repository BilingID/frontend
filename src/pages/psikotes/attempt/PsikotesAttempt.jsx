import MainLayout from "components/layout/MainLayout";
import { useEffect, useState } from "react";
import FinishAttempt from "./FinishAttempt";

const Question = ({ question }) => {
  return <h4 className="fw-normal py-5">{question}</h4>;
};

const AnswersOption = ({ choices, selected, handleButton }) => {
  return (
    <div className="d-flex flex-column gap-4 mt-3 mb-5">
      {choices?.map((choice) => (
        <button
          key={choice.id}
          className={`btn btn-default shadow-btn fw-normal ${
            selected == choice.id && "border-primary"
          }`}
          value={choice.id}
          style={{ width: "100%", textAlign: "left" }}
          onClick={handleButton}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
};

const AttemptPsikotes = ({ questions, answers, setAnswers, handleSubmit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleButton = (event) => {
    setAnswers((prev) => {
      prev[currentQuestion] = event.target.value;
      return [...prev];
    });
  };

  return (
    <>
      <div className="container my-5">
        <div className="progress my-3" style={{ height: "10px" }}>
          <div
            className="progress-bar"
            aria-label="Basic example"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <h5 className="fw-normal">
          Pertanyaan ke {currentQuestion + 1}/{questions.length}
        </h5>
      </div>
      <div className="container my-5">
        <Question question={questions[currentQuestion]?.question_text} />
        <AnswersOption
          choices={questions[currentQuestion]?.choices}
          selected={answers[currentQuestion]}
          handleButton={handleButton}
        />
        <div
          className={`d-flex pt-4 ${
            currentQuestion > 0 ? "justify-content-between" : "justify-content-end"
          }`}
        >
          {currentQuestion > 0 && (
            <button
              className="btn btn-primary"
              onClick={() => setCurrentQuestion((prev) => (prev - 1 >= 0 ? prev - 1 : prev))}
            >
              Sebelumnya
            </button>
          )}
          {currentQuestion < questions.length - 1 && (
            <button
              className="btn btn-primary"
              onClick={() =>
                setCurrentQuestion((prev) => (prev + 1 < questions.length ? prev + 1 : prev))
              }
            >
              Selanjutnya
            </button>
          )}

          {currentQuestion == questions.length - 1 && (
            <button className="btn btn-primary" onClick={handleSubmit}>
              Selesaikan Tes
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AttemptPsikotes;

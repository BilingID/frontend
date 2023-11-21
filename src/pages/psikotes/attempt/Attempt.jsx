import MainLayout from "components/layout/MainLayout";
import { useEffect, useState } from "react";
import AttemptPsikotes from "./PsikotesAttempt";
import { useParams } from "react-router-dom";
import Psychotest from "services/api/psikotes";
import { toast } from "react-toastify";
import { useUserContext } from "context/UserContext";
import useSessionStorage from "hooks/useSessionStorage";

const Question = ({ question }) => {
  return <h4 className="fw-normal py-5">{question}</h4>;
};

const AnswersOption = ({ answers }) => {
  return (
    <div className="d-flex flex-column gap-4 mt-3 mb-5">
      {answers.map((answer, index) => (
        <button
          key={index}
          className="btn btn-default shadow-btn fw-normal"
          value={index}
          style={{ width: "100%", textAlign: "left" }}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

const AttemptPsikotesIndex = () => {
  const { code } = useParams();

  const [questions, setQuestions] = useSessionStorage(`questions-${code}`, []);
  const [answers, setAnswers] = useSessionStorage(`answers-${code}`, []);

  const { token } = useUserContext();

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data, message, status } = await Psychotest.getQuestions(token, code);

      if (status === "error") {
        toast.warn(message);
        return;
      }

      setQuestions(data);
    };

    if (!questions.length) fetchQuestion();
  }, []);

  const handleSubmit = () => {};

  return (
    <MainLayout>
      <AttemptPsikotes
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
        handleSubmit={handleSubmit}
      />
      {/* <FinishAttempt /> */}
    </MainLayout>
  );
};

export default AttemptPsikotesIndex;

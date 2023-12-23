import MainLayout from "components/layout/MainLayout";
import { useEffect, useState } from "react";
import AttemptPsikotes from "./PsikotesAttempt";
import { useParams } from "react-router-dom";
import Psychotest from "services/api/psikotes";
import { toast } from "react-toastify";
import { useUserContext } from "context/UserContext";
import useSessionStorage from "hooks/useSessionStorage";
import FinishAttempt from "./FinishAttempt";

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
  const [isFinished, setIsFinished] = useSessionStorage(`isFinished-${code}`, false);

  const { token } = useUserContext();

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data, message, status } = await Psychotest.getQuestions(token, code);

      if (status === "error") {
        toast.warn("Gagal mengambil data psikotes");
        return;
      }

      setQuestions(data);
    };

    if (!questions.length) fetchQuestion();
  }, []);

  const handleSubmit = async (event) => {
    event.target.disabled = true;

    const psychotestKeys = ["P", "I", "J", "T", "E", "N", "S", "F"];
    const psychotestData = {};

    psychotestKeys.forEach((key) => {
      psychotestData[key] = 0;
    });

    answers.forEach((answer) => {
      psychotestData[answer]++;
    });

    const { data, message, status } = await Psychotest.submitAnswers(token, code, psychotestData);

    if (status !== "success") {
      toast.warn("Gagal menyimpan jawaban anda");
    } else {
      toast.success("Jawaban anda berhasil disimpan");
      setIsFinished(true);
    }

    event.target.disabled = false;
  };

  return (
    <MainLayout>
      {isFinished ? (
        <FinishAttempt />
      ) : (
        <AttemptPsikotes
          questions={questions}
          answers={answers}
          setAnswers={setAnswers}
          handleSubmit={handleSubmit}
        />
      )}
    </MainLayout>
  );
};

export default AttemptPsikotesIndex;

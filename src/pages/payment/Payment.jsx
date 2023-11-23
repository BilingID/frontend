import MainLayout from "components/layout/MainLayout";

import style from "pages/styles/payment.module.css";
import { useEffect, useState } from "react";
import PaymentMethod from "./PaymentMethod";
import PaymentStart from "./PaymentStart";
import { PaymentHeader } from "components/payment/Header";
import PaymentSuccess from "./PaymentSuccess";
import { useUserContext } from "context/UserContext";
import { useParams } from "react-router-dom";
import Psychotest from "services/api/psikotes";
import moment from "moment";

export const StepProgressBar = ({ steps, start = 0, className = "" }) => {
  return (
    <div className={`${style.stepLine} ${className}`}>
      {steps.map((step, key) => {
        return (
          <div key={key} className={key <= start ? style.stepBarActive : style.stepBar}>
            <span>{step}</span>
          </div>
        );
      })}
    </div>
  );
};

const Payment = ({ step, label }) => {
  const [progress, setProgress] = useState(step || 0);
  const { token } = useUserContext();
  const { code } = useParams();

  const [payment, setPayment] = useState({});

  const getPayment = async () => {
    const { data } = await Psychotest.getPayment(token, code);

    if (data.status === "paid") {
      setProgress(2);
    } else {
      setProgress(1);
    }

    setPayment(data);
  };

  useEffect(() => {
    if (code) getPayment();
  }, [code]);

  return (
    <MainLayout>
      <div className="container my-5">
        <div className="row">
          <div className="col text-center">
            <PaymentHeader title={`Pembayaran ${label}`} />
            <StepProgressBar
              steps={["Metode pembayaran", "Konfirmasi pembayaran", "Pembayaran selesai"]}
              start={progress}
              className="my-5"
            />
          </div>
        </div>
        {progress === 0 && <PaymentMethod setProgress={setProgress} />}
        {progress === 1 && <PaymentStart payment={payment} />}
        {progress === 2 && <PaymentSuccess />}
      </div>
    </MainLayout>
  );
};

export default Payment;

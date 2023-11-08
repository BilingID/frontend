import MainLayout from "components/layout/MainLayout";

import style from "pages/styles/payment.module.css";
import { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import PaymentStart from "./PaymentStart";
import { PaymentHeader } from "components/payment/Header";

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

const Payment = () => {
  const [progress, setProgress] = useState(1);

  return (
    <MainLayout>
      <div className="container my-5">
        <div className="row">
          <div className="col text-center">
            <PaymentHeader title={"Pembayaran Psikotes"} />
            <StepProgressBar
              steps={["Metode pembayaran", "Konfirmasi pembayaran", "Pembayaran selesai"]}
              start={progress}
              className="my-5"
            />
          </div>
        </div>
        {progress == 0 && <PaymentMethod />}
        {progress == 1 && <PaymentStart />}
      </div>
    </MainLayout>
  );
};

export default Payment;

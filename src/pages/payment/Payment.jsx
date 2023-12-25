import MainLayout from "components/layout/MainLayout";

import style from "pages/styles/payment.module.css";
import { useEffect, useState } from "react";
import PaymentMethod from "./PaymentMethod";
import PaymentStart from "./PaymentStart";
import { PaymentHeader } from "components/payment/Header";
import PaymentSuccess from "./PaymentSuccess";
import { useUserContext } from "context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import Psychotest from "services/api/psikotes";
import Counseling from "services/api/konseling";
import { toast } from "react-toastify";

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

const Payment = ({ step, type }) => {
  const [progress, setProgress] = useState(step || 0);
  const navigate = useNavigate();
  const { token } = useUserContext();
  const { code, psikologId, id } = useParams();

  const [payment, setPayment] = useState({});

  const getPayment = async () => {
    if (type !== "Psikotes") {
      const { data } = await Counseling.getPayment(token, code);

      if (data.status === "paid") {
        setProgress(2);
      } else {
        setProgress(1);
      }

      setPayment(data);
    } else {
      const { data } = await Psychotest.getPayment(token, code);

      if (data.status === "paid") {
        setProgress(2);
      } else {
        setProgress(1);
      }

      setPayment(data);
    }
  };

  const createPayment = async () => {
    if (type !== "Psikotes") {
      const { data, message, status } = await Counseling.create(token, {
        psychologist_id: psikologId,
      });

      if (status === "error") {
        toast.warn("Gagal membuat transaksi pembayaran");
        return;
      }

      navigate(`/konseling/${data.id}/payment`);
    } else {
      const { data, message, status } = await Psychotest.create(token);

      if (status === "error") {
        toast.warn("Gagal membuat transaksi pembayaran");
        return;
      }

      navigate(`/psikotes/${data.code}/payment`);
    }
  };

  useEffect(() => {
    if (code) getPayment();
  }, [code]);

  return (
    <MainLayout>
      <div className="container my-5">
        <div className="row">
          <div className="col text-center">
            <PaymentHeader title={`Pembayaran ${type}`} />
            <StepProgressBar
              steps={["Metode pembayaran", "Konfirmasi pembayaran", "Pembayaran selesai"]}
              start={progress}
              className="my-5"
            />
          </div>
        </div>
        {progress === 0 && (
          <PaymentMethod createPayment={createPayment} isCounseling={type === "Konseling"} />
        )}
        {progress === 1 && <PaymentStart payment={payment} isCounseling={type === "Konseling"} />}
        {progress === 2 && <PaymentSuccess type={type} />}
      </div>
    </MainLayout>
  );
};

export default Payment;

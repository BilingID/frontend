import MainLayout from "components/layout/MainLayout";

import style from "pages/styles/payment.module.css";
import { useState } from "react";

import BankBcaIcon from "assets/icon/png/bca.png";

import { ReactComponent as ArrowRightIcon } from "assets/icon/svg/arrow-right.svg";

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

export const PaymentBank = ({ bank, path }) => {
  return (
    <div className="col-3 d-flex flex-column align-items-center">
      <div className="border btn bg-white rounded-corner" style={{ padding: "35px 40px" }}>
        <img src={path} height={30} />
      </div>
      <div className="text-center fs-7 lh-lg mt-3" style={{ width: "120px" }}>
        Bayar melalui {bank}
      </div>
    </div>
  );
};

const Payment = () => {
  const [progress, setProgress] = useState(0);
  const [toggleTransferBank, setToogleTransferBank] = useState(false);

  return (
    <MainLayout>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 style={{ margin: "80px auto" }}>Pembayaran Psikotes</h1>
            <StepProgressBar
              steps={["Metode pembayaran", "Konfirmasi pembayaran", "Pembayaran selesai"]}
              start={progress}
              className="my-5"
            />
          </div>
        </div>
        <div className="row">
          <h4>Pilih metode pembayaran</h4>
          <div className="col-8">
            <div className="rounded-corner border bg-body-tertiary pe-auto" style={{ padding: 30 }}>
              <div
                className="d-flex justify-content-between align-items-center "
                onClick={() => setToogleTransferBank(!toggleTransferBank)}
              >
                <div>
                  <h5>Transfer Bank</h5>
                  <span>Menerima pembayaran dari semua bank</span>
                </div>
                <div>
                  <ArrowRightIcon
                    style={{ transform: `rotate(${toggleTransferBank ? -90 : 90}deg)` }}
                  />
                </div>
              </div>
              {toggleTransferBank && (
                <div className="row" style={{ marginTop: 30 }}>
                  <PaymentBank bank="BCA" path={BankBcaIcon} />
                </div>
              )}
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary my-4">Bayar Sekarang</button>
            </div>
          </div>
          <div className="col-4">
            <div className="rounded-corner border bg-body-tertiary pe-auto" style={{ padding: 30 }}>
              <h4 className="mb-3">Psikotes</h4>
              <div className="d-flex justify-content-between border-bottom py-3">
                <span>Subtotal</span>
                <span>Rp. 50.000</span>
              </div>
              <div className="d-flex justify-content-between py-3">
                <span>Total pembayaran</span>
                <span className="fw-bold text-primary">Rp. 50.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Payment;

import BankBcaIcon from "assets/icon/png/bca.png";

import { ReactComponent as ArrowRightIcon } from "assets/icon/svg/arrow-right.svg";
import { useUserContext } from "context/UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Psychotest from "services/api/psikotes";

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

export const PaymentItem = ({ title, price, last = false, payed = false }) => {
  return (
    <div className={`d-flex justify-content-between py-3 ${last ? "border-bottom" : ""}`}>
      <span>{title}</span>
      <span className={payed ? "fw-bold text-primary" : ""}>Rp. {price}</span>
    </div>
  );
};

const PaymentMethod = ({ createPayment }) => {
  const [toggleTransferBank, setToogleTransferBank] = useState(false);

  return (
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
          <button className="btn btn-primary my-4" onClick={createPayment}>
            Bayar Sekarang
          </button>
        </div>
      </div>

      <div className="col-4">
        <div className="rounded-corner border bg-body-tertiary pe-auto" style={{ padding: 30 }}>
          <h4 className="mb-3">Psikotes</h4>
          <PaymentItem title="Psikotes" price="50.000" />
          <PaymentItem title="Psikotes" price="50.000" last />
          <PaymentItem title="Total pembayaran" price="50.000" payed />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;

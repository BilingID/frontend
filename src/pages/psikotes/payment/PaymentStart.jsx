import { useUserContext } from "context/UserContext";
import moment from "moment";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import Psychotest from "services/api/psikotes";

const PaymentCountdown = ({ hours, minutes, seconds, completed }) => {
  // padding
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  return (
    <h3 className="my-4 ">
      {completed ? (
        <span className="text-danger">Waktu habis</span>
      ) : (
        <span className="bg-primary text-white py-1 px-4 rounded-corner">
          {hours} : {minutes} : {seconds}
        </span>
      )}
    </h3>
  );
};

const PaymentStart = ({ payment }) => {
  const { code } = useParams();
  const [expiredAt, setExpiredAt] = useState(null);

  useEffect(() => {
    setExpiredAt(new Date(payment?.expired_at?.slice(0, -1)).getTime());
  }, [payment]);

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <div className="rounded-corner border bg-body-tertiary " style={{ padding: 30 }}>
            <h4 className="mb-5">Detail pembayaran</h4>

            <h5>Kode pesanan</h5>
            <p>#123456789 a/n Arla Sifhana Putri</p>

            <h5>Harga</h5>
            <p>Rp. {payment?.amount}</p>

            <h5>Metode pembayaran</h5>
            <p>Rp. {payment?.amount}</p>
          </div>
        </div>
        <div className="col d-flex flex-column gap-4">
          <div className="rounded-corner border bg-body-tertiary " style={{ padding: 30 }}>
            <h4>Batas pembayaran</h4>
            {expiredAt && <Countdown date={expiredAt} renderer={PaymentCountdown} />}
            <p>
              Segera lakukan pembayaran. Pembayaran akan dibatalkan jika melewati batas waktu yang
              telah ditentukan
            </p>
          </div>
          <div className="rounded-corner border bg-body-tertiary " style={{ padding: 30 }}>
            <h4>Kode pembayaran</h4>
            {payment?.payment_code ? (
              <QRCode
                value={`http://localhost:8000/api/v1/psikotes/${code}/process`}
                level="M"
                className="my-4"
              />
            ) : (
              <p>Belum ada kode pembayaran</p>
            )}

            <p>Scan kode QR</p>
            <a href={`http://localhost:8000/api/v1/psikotes/${code}/process`}>DEBUG PAY</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStart;

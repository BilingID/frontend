import QrCode from "assets/img/qr-example.png";
import Countdown from "react-countdown";

const PaymentCountdown = ({ hours, minutes, seconds, completed }) => {
  // padding
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  return (
    <h3 className="my-4 text-danger">
      {!completed ? `${hours} : ${minutes} : ${seconds}` : `Done!`}
    </h3>
  );
};

const PaymentStart = () => {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <div className="rounded-corner border bg-body-tertiary " style={{ padding: 30 }}>
            <h4 className="mb-5">Detail pembayaran</h4>

            <h5>Kode pesanan</h5>
            <p>#123456789 a/n Arla Sifhana Putri</p>

            <h5>Harga</h5>
            <p>Rp. 50.000</p>

            <h5>Metode pembayaran</h5>
            <p>Rp. 50.000</p>
          </div>
        </div>
        <div className="col d-flex flex-column gap-4">
          <div className="rounded-corner border bg-body-tertiary " style={{ padding: 30 }}>
            <h4>Batas pembayaran</h4>
            <Countdown date={Date.now() + 60000 * 15} renderer={PaymentCountdown} />
            <p>
              Segera lakukan pembayaran. Pembayaran akan dibatalkan jika melewati batas waktu yang
              telah ditentukan
            </p>
          </div>
          <div className="rounded-corner border bg-body-tertiary " style={{ padding: 30 }}>
            <h4>Kode pembayaran</h4>
            <img src={QrCode} className="my-4" />
            <p>Scan kode QR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStart;

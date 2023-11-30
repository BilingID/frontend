import { ReactComponent as TickSuccess } from "assets/icon/svg/tick-circle.svg";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = ({ type }) => {
  const navigate = useNavigate();

  const message =
    type === "Psikotes"
      ? "Pembayaran telah sukses dilakukan. Kamu bisa kembali ke halaman psikotes atau langsung mengerjakan psikotesnya."
      : "Pembayaran telah sukses dilakukan. Kamu bisa kembali ke halaman konseling, sampai jadwal konselingmu tiba.";

  const route = type === "Psikotes" ? "/psikotes" : "/konseling";

  return (
    <div className="text-center">
      <TickSuccess className="mx-auto" />
      <h1 className="my-5">Pembayaran berhasil!</h1>
      <p className="w-50 mx-auto lh-lg">{message}</p>
      <div className="mx-auto my-5">
        <button
          className="btn btn-default shadow-btn text-primary me-3"
          onClick={() => navigate(route)}
        >
          Kembali
        </button>
        <button className="btn btn-primary shadow-btn" onClick={() => navigate(route)}>
          {type === "Psikotes" ? "Halaman Tes" : "Halaman Konseling"}
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;

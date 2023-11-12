import { ReactComponent as TickSuccess } from "assets/icon/svg/tick-circle.svg";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <TickSuccess className="mx-auto" />
      <h1 className="my-5">Pembayaran berhasil!</h1>
      <p className="w-50 mx-auto lh-lg">
        Pembayaran telah sukses dilakukan. Kamu bisa kembali ke halaman psikotes atau langsung
        mengerjakan psikotesnya.
      </p>
      <div className="mx-auto my-5">
        <button
          className="btn btn-default shadow-btn text-primary me-3"
          onClick={() => navigate("/psikotes")}
        >
          Kembali
        </button>
        <button className="btn btn-primary shadow-btn" onClick={() => navigate("/psikotes")}>
          Halaman Tes
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;

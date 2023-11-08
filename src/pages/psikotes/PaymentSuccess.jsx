import { ReactComponent as TickSuccess } from "assets/icon/svg/tick-circle.svg";

const PaymentSuccess = () => {
  return (
    <div className="text-center">
      <TickSuccess className="mx-auto" />
      <h1 className="my-5">Pembayaran berhasil!</h1>
      <p className="w-50 mx-auto lh-lg">
        Pembayaran telah sukses dilakukan. Kamu bisa kembali ke halaman psikotes atau langsung
        mengerjakan psikotesnya.
      </p>
      <div className="mx-auto my-5">
        <button className="btn btn-default shadow-btn text-primary me-3">Kembali</button>
        <button className="btn btn-primary shadow-btn">Halaman Tes</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;

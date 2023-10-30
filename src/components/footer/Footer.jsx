import AlfamartIcon from "assets/icon/svg/alfamart.svg";
import DanaIcon from "assets/icon/svg/dana.svg";
import ShopeeIcon from "assets/icon/svg/shopee-pay.svg";
import GopayIcon from "assets/icon/svg/gopay.svg";
import IndomaretIcon from "assets/icon/svg/indomaret.svg";

const Footer = (props) => {
  return (
    <footer {...props}>
      {/* create footer brand */}
      <div className="container py-5">
        <div className="row">
          <div className="col-4 mb-5">
            <div className="fs-2 fw-bold text-primary">BiLing.ID</div>
            <div className="fs-6 mt-2 lh-lg w-75">
              Kamu mendapatkan bantuan, menjadi lebih baik, dan pantas untuk bahagia.
            </div>
          </div>
          <div className="col my-4">
            <div className="fs-6 mb-4 text-black">Layanan</div>
            <div className="d-flex flex-column gap-3">
              <div className="fs-7">Simulasi tes psikologi</div>
              <div className="fs-7">Tes Psikologi</div>
              <div className="fs-7">Konseling</div>
            </div>
          </div>
          <div className="col my-4">
            <div className="fs-6 mb-4 text-black">Pelajari</div>
            <div className="d-flex flex-column gap-3">
              <div className="fs-7">Panduan konseling</div>
              <div className="fs-7">FAQ</div>
            </div>
          </div>
          <div className="col my-4">
            <div className="fs-6 mb-4 text-black">Metode Pembayaran</div>
            <div className="d-flex flex-wrap gap-2">
              <img src={GopayIcon} className="mb-2" />
              <img src={DanaIcon} className="mb-2" />
              <img src={ShopeeIcon} className="mb-2" />
              <img src={AlfamartIcon} className="mb-2" />
              <img src={IndomaretIcon} className="mb-2" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

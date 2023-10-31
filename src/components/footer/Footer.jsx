import AlfamartIcon from "assets/icon/svg/alfamart.svg";
import DanaIcon from "assets/icon/svg/dana.svg";
import ShopeeIcon from "assets/icon/svg/shopee-pay.svg";
import GopayIcon from "assets/icon/svg/gopay.svg";
import IndomaretIcon from "assets/icon/svg/indomaret.svg";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");

  return (
    <footer {...props}>
      {/* create footer brand */}
      <div className="container py-5">
        <div className="row">
          <div className="col-4 mb-5">
            <div className="mb-3 fs-2 text-primary">
              <span className="pe-auto" onClick={handleClick}>
                BiLing.ID
              </span>
            </div>
            <span className="lh-lg">
              Kamu mendapatkan bantuan, menjadi lebih baik, dan pantas untuk bahagia.
            </span>
          </div>
          <div className="col my-4">
            <p className="mb-4 text-black">Layanan</p>
            <div className="d-flex flex-column gap-3">
              <span>Simulasi tes psikologi</span>
              <span>Tes Psikologi</span>
              <span>Konseling</span>
            </div>
          </div>
          <div className="col my-4">
            <p className="mb-4 text-black">Pelajari</p>
            <div className="d-flex flex-column gap-3">
              <span>Panduan konseling</span>
              <span>FAQ</span>
            </div>
          </div>
          <div className="col my-4">
            <p className="mb-4 text-black">Metode Pembayaran</p>
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

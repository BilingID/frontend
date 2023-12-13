import MainLayout from "components/layout/MainLayout";
import LandingImg from "assets/img/landing.png";
import { ReactComponent as ProfileTick } from "assets/icon/svg/profile-tick.svg";
import { ReactComponent as BatteryEmpty } from "assets/icon/svg/battery-empty.svg";
import { ReactComponent as People } from "assets/icon/svg/people.svg";
import Section3Left from "assets/img/section-3-left.png";
import Section3Right from "assets/img/section-3-right.png";
import { ReactComponent as ArrowDown } from "assets/icon/svg/arrow-down.svg";
import { ReactComponent as ArrowRight } from "assets/icon/svg/arrow-right.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DotNumber = ({ number }) => (
  <div
    className="text-primary bg-primary-transparent d-flex justify-content-center align-items-center rounded-circle fw-bold"
    style={{ width: 75, height: 75 }}
  >
    <h4 className="m-0">{number}</h4>
  </div>
);

const StatisticItem = ({ icon, number, label, last, ...props }) => (
  <div className={`col-3 py-4 ${!last && "border-end"}`} {...props}>
    <div
      className="text-primary container bg-primary-transparent d-flex justify-content-center align-items-center rounded-circle"
      style={{ width: 100, height: 100 }}
    >
      {icon}
    </div>
    <h1 className="my-4">{number}</h1>
    <p>{label}</p>
  </div>
);

const Landing = () => {
  const statisticData = [
    { icon: <ProfileTick width={48} height={48} />, number: "987", label: "Psikolog Aktif" },
    { icon: <BatteryEmpty width={48} height={48} />, number: "1,234", label: "Konseling" },
    { icon: <People width={48} height={48} />, number: "10,987", label: "Jumlah Klien" },
  ];

  const steps = [
    {
      number: 1,
      title: "Simulasikan psikotes",
      description:
        "Lakukan simulasi psikotes terlebih dahulu, agar kamu dapat mempunyai gambaran dan perkiraan hasil tes yang sesungguhnya",
    },
    {
      number: 2,
      title: "Lakukan psikotes",
      description:
        "Lakukan psikotes sesuai dengan hasil simulasi yang kamu dapatkan, dan dapatkan hasilnya",
    },
    {
      number: 3,
      title: "Pilih Psikolog tepat",
      description: "Pilih psikolog yang sesuai dengan kebutuhan kamu, dan jadwalkan konseling",
    },
    {
      number: 4,
      title: "Jadwalkan konseling",
      description:
        "Pilih jadwal konseling yang sesuai dengan kebutuhan kamu, dan jadwalkan konseling",
    },
    {
      number: 5,
      title: "Mulai berbicara",
      description: "Mulai konseling dengan psikolog yang kamu pilih, dan mulai berbicara",
    },
    {
      number: 6,
      title: "Hidup lebih baik",
      description:
        "Dengan konseling yang kamu lakukan, kamu akan mendapatkan kehidupan yang lebih baik",
    },
  ];

  const faqData = [
    {
      question: "Apa saja yang akan saya dapatkan setelah konseling?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate voluptates dolorem necessitatibus maiores? Iusto repellat accusamus vero provident exercitationem. Architecto.",
    },
    {
      question: "Konseling itu prosesnya seperti apa?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate voluptates dolorem necessitatibus maiores? Iusto repellat accusamus vero provident exercitationem. Architecto.",
    },
    {
      question: "Berapa lama durasi sesi konseling online?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate voluptates dolorem necessitatibus maiores? Iusto repellat accusamus vero provident exercitationem. Architecto.",
    },
    {
      question: "Platform apa yang digunakan untuk konseling online?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate voluptates dolorem necessitatibus maiores? Iusto repellat accusamus vero provident exercitationem. Architecto.",
    },
    {
      question: "Apakah privasi dan kerahasiaan cerita saya terjamin?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate voluptates dolorem necessitatibus maiores? Iusto repellat accusamus vero provident exercitationem. Architecto.",
    },
  ];

  const [showFaq, setShowFaq] = useState([false, false, false, false, false]);

  const handleFaqClick = (index) => {
    setShowFaq((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const navigate = useNavigate();

  return (
    <MainLayout>
      <section
        id="landing"
        className="container container-fluid py-5"
        style={{ minHeight: "75vh" }}
      >
        <div className="row">
          <div className="col-9 mt-5" style={{ maxWidth: "940px" }}>
            <h1 className="lh-base mb-3">
              Konseling untuk kehidupan yang lebih baik dengan Psikolog terbaik
            </h1>
            <span className="d-block lh-lg mt-4 mb-5" style={{ maxWidth: "550px" }}>
              Dengan bimbingan konseling online, kamu mendapatkan bantuan, menjadi lebih baik, dan
              kamu pantas untuk bahagia.
            </span>
            <button className="btn btn-primary" onClick={() => navigate("/psikotes")}>
              Mulai Psikotes
            </button>
          </div>
          <div lg={3} className="col mt-5">
            <img src={LandingImg} alt="Landing" width={342} height={540} />
          </div>
        </div>
      </section>

      <section id="statistic" className="container container-fluid text-center py-5">
        <h2 className="mb-4">Paling diutamakan dan terpercaya</h2>
        <span>Platform Konseling Online di Indonesia</span>
        <div className="row justify-content-center" style={{ margin: "90px 0" }}>
          {statisticData.map((item, index) => (
            <StatisticItem
              key={index}
              icon={item.icon}
              number={item.number}
              label={item.label}
              last={index == statisticData.length - 1}
            />
          ))}
        </div>
      </section>

      <section id="konseling-online-terbaik" className="container container-fluid py-5">
        <div className="row">
          <div className="col-6">
            <img src={Section3Left} alt="Section Left" className="me-4" />
            <img src={Section3Right} alt="Section Right" />
          </div>
          <div className="col mt-3">
            <h2 className="mb-4">Konseling online terbaik</h2>
            <span className="lh-lg">
              Team Psikolog kami telah berpengalaman membantu orang dalam menangani beberapa
              masalah.
            </span>
            <div className="row mt-5">
              {[...Array(2)].map((_, index) => (
                <div className="col" key={index}>
                  <ul>
                    <li className="section-3-list">Stress Berat</li>
                    <li className="section-3-list">Depresi</li>
                    <li className="section-3-list">Hubungan</li>
                    <li className="section-3-list">Keuangan</li>
                    <li className="section-3-list">Penyalahgunaan</li>
                    <li className="section-3-list">Kehilangan</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-use" className="container container-fluid text-center my-5 py-5">
        <h2 className="my-3">Mulailah jelajahi kesehatan emosional & mentalmu</h2>
        <span>Ikuti langkah-langkah berikut untuk menggunakan platform BiLing.ID</span>

        <div className="row mt-5">
          {steps.map((step, index) => (
            <div className="col-4 my-3" key={index}>
              <div
                className="text-start px-4 pt-4 pb-5 bg-white shadow-btn"
                style={{
                  borderTop: "10px solid #2E7DF1",
                  borderRadius: "0 0 40px 40px",
                  height: "100%",
                }}
              >
                <DotNumber number={step.number} />
                <h4 className="mt-4 mb-3">{step.title}</h4>
                <span className="lh-lg">{step.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="frequently-answer-question"
        className="container container-fluid text-center my-5 py-5"
      >
        <h2>FAQ BiLing.ID</h2>
        <span>Pertanyaan seputar bimbingan konseling online</span>

        <div className="container text-start rounded-corner shadow-btn py-2 mt-5">
          {faqData.map((item, index) => (
            <div className="px-3 pe-auto" onClick={() => handleFaqClick(index)} key={index}>
              <div className="py-3 d-flex justify-content-between align-items-center">
                <h4 className="fw-normal">{item.question}</h4>
                {!showFaq[index] ? (
                  <ArrowRight width={48} height={48} />
                ) : (
                  <ArrowDown width={48} height={48} />
                )}
              </div>
              <div className={index != faqData.length - 1 ? "border-bottom" : ""}>
                <h5 className={`pb-3 fw-normal ${!showFaq[index] && "d-none"}`}>{item.answer}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Landing;

import MainLayout from "components/layout/MainLayout";

const Psikotes = () => {
  return (
    <MainLayout>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h1
              style={{
                padding: "0 216px",
                lineHeight: "105px",
              }}
            >
              Tes kepribadian MBTI: Kenali dirimu lebih jauh!
            </h1>
            <p
              style={{
                lineHeight: "35px",
                padding: "0 216px",
              }}
            >
              Tes MBTI ini bertujuan untuk membantu memahami keunikan kepribadian yang ada pada
              dirimu. Ketahuilah preferensi dan kecenderungan psikologimu sekarang!
            </p>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: 150, marginBottom: 120 }}>
        <div className="row">
          <div className="col">
            <h2 className="mb-4">Baca panduan pengisiannya dulu yuk!</h2>
            <ol className="list-group list-group-numbered mb-4">
              <li className="list-group-item border-0">
                Di tes ini tidak ada jawaban benar atau salah. Jadi isilah dengan jujur sesuai
                kepribadianmu.
              </li>
              <li className="list-group-item border-0">
                Tes ini tidak ada batasan waktu pengerjaan.
              </li>
              <li className="list-group-item border-0">
                Kerjakan dengan fokus, cari tempat yang kondusif dan bikin kamu nyaman.
              </li>
              <li className="list-group-item border-0">
                Seluruh proses tes dan jawaban akan hilang kalau kamu keluar di tengah tes.
              </li>
              <li className="list-group-item border-0">Isilah semua pertanyaan dengan lengkap.</li>
            </ol>
            <h4 className="mb-5">Selamat memulai tes!</h4>
            <button className="btn btn-primary">Mulai</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Psikotes;

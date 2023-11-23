import MainLayout from "components/layout/MainLayout";
import { ReactComponent as DocumentIcon } from "assets/icon/svg/Ellipse-65.svg";

const ShowProfile = () => {
  return (
    <MainLayout>
      <div className="container container-fluid py-5">
        <div className="row pb-5 border-bottom">
          <div className="col-auto">
            <DocumentIcon />
          </div>
          <div className="col d-flex flex-column justify-content-center">
            <h2 className="">Hani Kumala, M. Psi., Psikolog</h2>
            <p>
              Jumlah sesi konseling:{" "}
              <div className="badge rounded-corner bg-warning py-3 px-5 fs-6 text-white">
                2001+ Sesi
              </div>
            </p>
          </div>
        </div>
        <h4 className="mt-5">Profil Psikolog</h4>
        <p className="text-justify mt-4 lh-lg">
          Halo, nama saya Hani Kumala. Saya seorang Psikolog Klinis Dewasa lulusan Magister
          Psikologi Profesi Atma Jaya Jakarta. Saya juga seorang penulis buku yang berjudul
          "Memahami Trauma dengan Perhatian Khusus pada Masa Kanak-Kanak yang diterbitkan oleh
          Gramedia Pustaka Utama.
        </p>
        <p className="text-justify mt-4 lh-lg">
          Saat ini saya aktif terlibat di dalam berbagai proyek yang berhubungan dengan kesehatan
          mental baik di Jakarta dan juga di Flores, NTT. Pada beberapa kesempatan, saya terlibat di
          dalam penelitian dan proyek yang diadakan oleh instansi pemerintah misalnya Kementerian
          Sosial, Kementerian Kesehatan, Badan Narkotika Nasional, dll. Semenjak tahun 2018, saya
          mulai mempelajari dan memakai terapi dengan pendekatan dialektik (Dialectic Behavior
          Therapy-DBT).
        </p>
        <p className="text-justify mt-4 lh-lg">
          Tahun 2021 ini, Saya mulai memperdalam lagi kemampuan diri dengan mempelajari Terapi EMDR
          (Eye Movement Desensitization Reprocessing). Kerinduan terbesar saya di dalam setiap sesi
          adalah agar para klien dapat menemukan kembali keberdayaan diri mereka dan mampu menjalani
          hidup dengan lebih bermakna
        </p>

        <h4 className="mt-5">Informasi Psikolog</h4>
        <p className="mt-3">Agama: Kristen</p>
        <p className="mt-2">Status pernikahan: Belum menikah</p>
        <p className="mt-2">Tahun kelahiran: 1988</p>
        <p className="mt-2">Suku: Tionghoa</p>
        <p className="mt-2">Bahasa: Indonesia, Inggris</p>
        <p className="mt-2">Sudah melaksanakan konseling sejak tahun: 2019</p>

        <h4 className="mt-5">Keahlian Psikolog</h4>
        <p className="mt-3">&bull; Kelelahan emosional dan demotivasi,</p>
        <p className="mt-2">&bull; Kecemasan berlebih,</p>
        <p className="mt-2">&bull; Pengalaman traumatis,</p>
        <p className="mt-2">&bull; Keluhan mood & emosi</p>
        <p className="mt-2">
          Keahlian lain: Kecanduan dan kebiasaan buruk, Menyakiti atau bunuh diri, Masalah interaksi
          sosial, Hubungan asmara, Masalah dengan orang tua Pendekatan Terapi: Pendekatan Dialectic
          Behavior Therapy (DBT)
        </p>
        <p className="mt-2">
          &bull; Dialectical Behavior Therapy (DBT) merupakan evidence-based therapy yang efektif
          dalam menangani gangguan kepribadian dan konflik interpersonal. DBT akan membantumu untuk
          mengembangkan cara yang sehat untuk mengatasi stres, mengatur emosi, hidup di sini dan
          saat ini (mindful), dan meningkatkan hubungan dengan orang lain.
        </p>

        <div className="text-center">
          <button className="btn btn-primary mt-5 mb-5">Daftar Konseling</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ShowProfile;

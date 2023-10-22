import { ReactComponent as NoteIcon } from "assets/icon/svg/note.svg";

const PsikotesField = ({ label, paymentDate, status }) => {
  return (
    <div className="border rounded-corner">
      <div className="d-flex m-4 gap-4">
        <div
          className={`${
            status === 1
              ? "bg-warning-transparent text-warning"
              : "bg-primary-transparent text-primary"
          } p-4 rounded-corner text-primary`}
        >
          <NoteIcon width={72} height={72} />
        </div>
        <div className="flex-grow-1 d-flex flex-column justify-content-center gap-2">
          <div className="fs-4 fw-bold mb-1">{label}</div>
          <div className="fw-bold">
            Tanggal pembayaran: <span className="fs-7 fw-normal">{paymentDate}</span>
          </div>
          <div className="fw-bold">
            Status:{" "}
            <span className={`fs-7 fw-normal ${status === 1 ? "text-danger" : "text-primary"} `}>
              {status === 1 ? "Belum dikerjakan" : "Telah dikerjakan"}
            </span>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center gap-2 me-4">
          <button className="btn btn-primary">{status === 1 ? "Mulai Tes" : "Lihat Hasil"}</button>
        </div>
      </div>
    </div>
  );
};

const PsikotesItem = () => {
  return (
    <div className="box px-5 py-5">
      <div className="fs-2 border-bottom pb-3 mb-4">Psikotes</div>

      <div className="d-flex flex-column gap-4">
        <PsikotesField label="Tes Kepribadian MBTI" paymentDate="10/2/2023" status={0} />
        <PsikotesField label="Tes Kepribadian MBTI" paymentDate="10/2/2023" status={1} />
        <PsikotesField label="Tes Kepribadian MBTI" paymentDate="10/2/2023" status={0} />
      </div>
    </div>
  );
};

export default PsikotesItem;

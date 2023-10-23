import { ReactComponent as NoteIcon } from "assets/icon/svg/note.svg";

export const ListContainer = ({ children }) => {
  return <div className="d-flex flex-column gap-4">{children}</div>;
};

export const ListItem = ({ label, paymentDate, date, status }) => {
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
          {paymentDate ? (
            <div className="fw-bold">
              Tanggal pembayaran: <span className="fs-7 fw-normal">{paymentDate}</span>
            </div>
          ) : (
            <div className="fw-bold">
              Waktu: <span className="fs-7 fw-normal">{date}</span>
            </div>
          )}
          <div className="fw-bold">
            Status:{" "}
            <span className={`fs-7 fw-normal ${status === 1 ? "text-danger" : "text-primary"} `}>
              {status === 1 ? "Belum dikerjakan" : "Telah dikerjakan"}
            </span>
          </div>
        </div>

        {paymentDate ? (
          <div className="d-flex flex-column justify-content-center align-items-center gap-2 me-4">
            <button className="btn btn-primary">
              {status === 1 ? "Mulai Tes" : "Lihat Hasil"}
            </button>
          </div>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center gap-2 me-4">
            <button className="btn btn-primary">
              {status === 1 ? "Mulai Konseling" : "Lihat Diagnosa"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

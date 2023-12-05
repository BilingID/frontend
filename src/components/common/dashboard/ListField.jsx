import { ReactComponent as NoteIcon } from "assets/icon/svg/note.svg";

export const ListContainer = ({ children }) => {
  return <div className="d-flex flex-column gap-4">{children}</div>;
};

export const Field = ({ children }) => {
  return (
    <div className="border rounded-corner">
      <div className="d-flex m-4 gap-4">{children}</div>
    </div>
  );
};

export const FieldIcon = ({ children, type }) => {
  return (
    <div
      className={`${
        type === 0 ? "bg-warning-transparent text-warning" : "bg-primary-transparent text-primary"
      } p-4 rounded-corner text-primary`}
    >
      {children}
    </div>
  );
};

export const FieldInfo = ({ label, children }) => {
  return (
    <div className="flex-grow-1 d-flex flex-column justify-content-center gap-2">
      <div className="fs-4 fw-bold mb-1">{label}</div>
      {children}
    </div>
  );
};

export const FieldButton = ({ label, onClick, type }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2 me-4">
      <button
        className={
          type === 1 ? "btn btn-primary" : "btn bg-primary-transparent text-primary btn-default"
        }
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export const ListItem = ({ label, paymentDate, date, status, handleButton, ...props }) => {
  return (
    <div className="border rounded-corner" {...props}>
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
            <button className="btn btn-primary" onClick={handleButton}>
              {status === 1 ? "Mulai Tes" : "Lihat Hasil"}
            </button>
          </div>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center gap-2 me-4">
            <button className="btn btn-primary" onClick={handleButton}>
              {status === 1 ? "Mulai Konseling" : "Lihat Diagnosa"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

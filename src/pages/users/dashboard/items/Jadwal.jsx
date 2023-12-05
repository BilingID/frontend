import {
  Field,
  FieldButton,
  FieldIcon,
  FieldInfo,
  ListContainer,
  ListItem,
} from "components/common/dashboard/ListField";
import { useNavigate } from "react-router-dom";
import { ReactComponent as NoteIcon } from "assets/icon/svg/note.svg";

const ListKonseling = ({ finished, date, onClick }) => {
  return (
    <Field>
      <FieldIcon type={finished ? 1 : 0}>
        <NoteIcon width={72} height={72} />
      </FieldIcon>

      <FieldInfo label={"Konseling"}>
        <div className="fw-bold">
          Waktu: <span className="fs-7 fw-normal">{date}</span>
        </div>

        <div className="fw-bold">
          {finished ? (
            <>
              Status: <span className="fs-7 fw-normal text-primary">Telah dikerjakan</span>
            </>
          ) : (
            <>
              Status: <span className="fs-7 fw-normal text-danger">Belum dikerjakan</span>
            </>
          )}
        </div>
      </FieldInfo>

      <FieldButton
        label={finished ? "Lihat Diagnosa" : "Mulai Konseling"}
        type={finished ? 1 : 0}
        onClick={onClick}
      />
    </Field>
  );
};

const JadwalItem = () => {
  const navigate = useNavigate();

  return (
    <div className="box px-5 py-5">
      <div className="fs-2 border-bottom pb-3 mb-4">Jadwal</div>

      <ListContainer>
        <ListKonseling date={"10/2/2023"} onClick={() => navigate("/konseling/start")} />
        <ListKonseling date={"10/2/2023"} onClick={() => navigate("/konseling/result")} finished />
      </ListContainer>
    </div>
  );
};

export default JadwalItem;

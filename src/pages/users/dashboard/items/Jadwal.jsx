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
import Counseling from "services/api/konseling";
import { useUserContext } from "context/UserContext";
import { useEffect, useState } from "react";
import moment from "moment";

const ListKonseling = ({ id, finished, date, pairName }) => {
  const navigate = useNavigate();
  let navigateTo = "";

  if (finished) {
    navigateTo = `/konseling/${id}/result`;
  } else {
    navigateTo = `/konseling/${id}/start`;
  }

  return (
    <Field>
      <FieldIcon type={finished ? 1 : 0}>
        <NoteIcon width={72} height={72} />
      </FieldIcon>

      <FieldInfo label={`Konseling - ${pairName}`}>
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
        onClick={() => navigate(navigateTo)}
      />
    </Field>
  );
};

const JadwalItem = () => {
  const navigate = useNavigate();
  const { user, token } = useUserContext();

  const [konseling, setKonseling] = useState([]);

  const fetchKonseling = async () => {
    // if (psikotes.length > 0) {
    //   return;
    // }

    const { data } = await Counseling.fetch(token);
    console.log(data);

    if (data) {
      setKonseling(data);
    }
  };

  useEffect(() => {
    fetchKonseling();
  }, []);

  return (
    <div className="box px-5 py-5">
      <div className="fs-2 border-bottom pb-3 mb-4">Jadwal</div>

      <ListContainer>
        {/* <ListKonseling date={"10/2/2023"} onClick={() => navigate("/konseling/start")} />
        <ListKonseling date={"10/2/2023"} onClick={() => navigate("/konseling/result")} finished /> */}
        {konseling.length === 0 && <div className="text-center">Tidak ada data konseling</div>}
        {konseling.map((item, index) => (
          <ListKonseling
            key={index}
            id={item.id}
            date={`${moment(item.meet_date).format("DD/MM/YYYY")} - ${item.meet_time}`}
            pairName={
              user.role === "psychologist" ? item.user.fullname : item.psychologist.fullname
            }
            finished={item.result.status === "finish"}
          />
        ))}
      </ListContainer>
    </div>
  );
};

export default JadwalItem;

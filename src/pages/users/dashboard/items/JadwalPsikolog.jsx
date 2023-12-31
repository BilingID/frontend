import { ListContainer, ListItem } from "components/common/dashboard/ListField";
import { useNavigate } from "react-router-dom";

const JadwalItem = () => {
  const navigate = useNavigate();
  return (
    <div className="box px-5 py-5">
      <div className="fs-2 border-bottom pb-3 mb-4">Jadwal</div>

      <ListContainer>
        <ListItem label="Andhika Rangga" date="10/2/2023" status={0} onClick={() => navigate("Konseling")}/>
        <ListItem label="Naoby Prawira" date="10/2/2023" status={1} onClick={() => navigate("Diagnosa")}/>
        <ListItem label="Abdul Aziz Febriyansah" date="10/2/2023" status={0} onClick={() => navigate("Konseling")}/>
        <ListItem label="Nizam Abdullah" date="10/2/2023" status={0} onClick={() => navigate("Konseling")}/>
        <ListItem label="Arla Sihfana" date="10/2/2023" status={1} onClick={() => navigate("Diagnosa")}/>
      </ListContainer>
    </div>
  );
};

export default JadwalItem;

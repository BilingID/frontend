import { ListContainer, ListItem } from "components/common/dashboard/ListField";
import { useUserContext } from "context/UserContext";
import { useEffect, useState } from "react";
import Psychotest from "services/api/psikotes";

const PsikotesItem = () => {
  const { token } = useUserContext();
  const [psikotes, setPsikotes] = useState([]);

  const fetchPsikotes = async () => {
    const { data } = await Psychotest.fetch(token);
    if (data) setPsikotes(data);
    // setPsikotes(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchPsikotes();
  }, []);

  return (
    <div className="box px-5 py-5">
      <div className="fs-2 border-bottom pb-3 mb-4">Psikotes</div>

      <ListContainer>
        {psikotes.map((item, index) => (
          <ListItem
            key={index}
            label="Psikotes"
            paymentDate={item.updated_at}
            status={item.status === "finish" ? 0 : 1}
            code={item.code}
          />
        ))}
      </ListContainer>
    </div>
  );
};

export default PsikotesItem;

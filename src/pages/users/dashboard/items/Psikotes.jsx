import { ListContainer, ListItem } from "components/common/dashboard/ListField";
import { useUserContext } from "context/UserContext";
import useSessionStorage from "hooks/useSessionStorage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Psychotest from "services/api/psikotes";

const PsikotesItem = () => {
  const { token } = useUserContext();
  const [psikotes, setPsikotes] = useSessionStorage("psikotes", []);
  const navigate = useNavigate();

  const fetchPsikotes = async () => {
    // if (psikotes.length > 0) {
    //   return;
    // }

    const { data } = await Psychotest.fetch(token);
    if (data) {
      setPsikotes(data);
    }
  };

  useEffect(() => {
    fetchPsikotes();
  }, []);

  const attemptPsikotes = (code) => {
    navigate(`/psikotes/${code}/attempt`);
  };

  const showResult = (code) => {
    navigate(`/psikotes/${code}/result`);
  };

  return (
    <div className="box px-5 py-5">
      <div className="fs-2 border-bottom pb-3 mb-4">Psikotes</div>

      {psikotes.length === 0 && <div className="text-center">Tidak ada data psikotes</div>}

      <ListContainer>
        {psikotes.map((item, index) => (
          <ListItem
            key={index}
            label="Psikotes"
            paymentDate={item.updated_at}
            // status={item.status === "finish" ? 0 : 1}
            status={item.attempt_date ? 0 : 1}
            handleButton={
              item.attempt_date ? () => showResult(item.code) : () => attemptPsikotes(item.code)
            }
          />
        ))}
      </ListContainer>
    </div>
  );
};

export default PsikotesItem;

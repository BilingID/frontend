import { ListContainer, ListItem } from "components/common/dashboard/ListField";

const PsikotesItem = () => {
  return (
    <div className="box px-5 py-5">
      <div className="fs-2 border-bottom pb-3 mb-4">Psikotes</div>

      <ListContainer>
        <ListItem label="Tes Kepribadian MBTI" paymentDate="10/2/2023" status={0} />
        <ListItem label="Tes Kepribadian MBTI" paymentDate="10/2/2023" status={1} />
        <ListItem label="Tes Kepribadian MBTI" paymentDate="10/2/2023" status={0} />
      </ListContainer>
    </div>
  );
};

export default PsikotesItem;

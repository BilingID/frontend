export const PaymentHeader = ({ title }) => {
  return (
    <h1
      style={{
        padding: "0 216px",
        lineHeight: "105px",
      }}
      className="mt-5"
    >
      {title}
    </h1>
  );
};

export const PaymentSubHeader = ({ title }) => {
  return (
    <p
      style={{
        lineHeight: "35px",
        padding: "0 216px",
      }}
    >
      {title}
    </p>
  );
};

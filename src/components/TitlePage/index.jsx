const TitlePage = (props) => {
  const { title = "Title Page", status = null } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p
        style={{
          fontWeight: "600",
          textTransform: "uppercase",
          fontSize: "1rem",
        }}
      >
        {title}
      </p>
      {status}
    </div>
  );
};

export default TitlePage;

export const EmailTemplate = ({ sender, description }) => (
  <div style={{ margin: "4% 10% 2%", textAlign: "justify" }}>
    <p
      style={{
        fontFamily: "Nunito,sans-serif",
        fontSize: "15px",
        margin: "2px",
      }}
    >
      From {sender}:
      <br />
      {description}
    </p>
  </div>
);

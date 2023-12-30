const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "80%",
        borderRadius: 0,
        backgroundColor: "orangered",
        textAlign: "center",
        color: "white",
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;

const isActive = true;

function App() {
  return (
    <h1
      style={{
        color: isActive ? "green" : "red",
        fontWeight: isActive ? "bold" : "normal"
      }}
    >
      Status
    </h1>
  );
}

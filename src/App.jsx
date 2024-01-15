// import "./App.css";
// import ScrollUpDown from "./components/ScrollUpDown";
import ScrollUpDown from "react-top-bottom-scroll";
function App() {
  return (
    <>
      {Array(100)
        .fill(0)
        .map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      {/* <ScrollUpDown
        renderIcon={(scrollDirection) => {
          return (
            <i
              className={
                scrollDirection === "down"
                  ? "fas fa-arrow-down"
                  : "fas fa-arrow-up"
              }
            ></i>
          );
        }}
        style={{
          color: "white",
        }}
      /> */}
      {/* <hr /> */}
      <ScrollUpDown />
    </>
  );
}

export default App;

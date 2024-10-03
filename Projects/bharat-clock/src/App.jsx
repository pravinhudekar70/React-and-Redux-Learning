import Heading from "./components/Heading";
import Info from "./components/Info";
import CurrentTimeDate from "./components/CurrentTimeDate";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Heading />
        <Info />
        <CurrentTimeDate />
      </div>
    </>
  );
}

export default App;

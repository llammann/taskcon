import "./App.css";
// import CardsSection from "./CardsSection";
// import HeaderBtnSection from "./HeaderBtnSection";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function App() {
  return (
    <>
      {/* <HeaderBtnSection />
      <CardsSection /> */}
      <div className="container">
        <h1>Album layout</h1>
        <p>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </p>
        <TextField id="outlined-basic" label="Search film" variant="outlined" />
        <Button variant="outlined">SECONDARY ACTION</Button>
      </div>
    </>
  );
}

export default App;

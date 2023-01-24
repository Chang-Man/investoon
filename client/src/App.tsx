import { Action } from "./components/Action";
import { Main } from "./components/Main";
import { Needs } from "./components/Needs";
import { Sol1 } from "./components/Sol1";
import { Sol2 } from "./components/Sol2";
import { Sol3 } from "./components/Sol3";
import { createTheme, ThemeProvider } from "@mui/material";
import ReactPageScroller from "react-page-scroller";
import { useState, useEffect } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Nanum Gothic",
  },
});

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  RouteChangeTracker();
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <ReactPageScroller
          animationTimer={700}
          pageOnChange={(num) => {
            setCurrentPage(num);
          }}
          customPageNumber={currentPage}
        >
          <Main setCurrentPage={setCurrentPage} />
          <Needs setCurrentPage={setCurrentPage} />
          <Sol1 setCurrentPage={setCurrentPage} />
          <Sol2 setCurrentPage={setCurrentPage} />
          <Sol3 setCurrentPage={setCurrentPage} />
          <Action setCurrentPage={setCurrentPage} />
        </ReactPageScroller>
      </div>
    </ThemeProvider>
  );
}

export default App;

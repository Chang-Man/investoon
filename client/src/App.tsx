import { Action } from "./components/Action";
import { Main } from "./components/Main";
import { Needs } from "./components/Needs";
import { Sol1 } from "./components/Sol1";
import { Sol2 } from "./components/Sol2";
import { Sol3 } from "./components/Sol3";
import { createTheme, ThemeProvider, Box, IconButton } from "@mui/material";
import ReactPageScroller from "react-page-scroller";
import { useState, useEffect } from "react";
import RouteChangeTracker from "./components/common/RouteChangeTracker";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { BrowserView, MobileView } from "react-device-detect";

const theme = createTheme({
  typography: {
    fontFamily: "KoPubWorldDotum",
  },
});

export default function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  const [currentPage, setCurrentPage] = useState(0);
  RouteChangeTracker();
  return (
    <ThemeProvider theme={theme}>
      <BrowserView style={{ backgroundColor: "#f1dcff" }}>
        <section
          style={{
            maxWidth: "400px",
            minWidth: "100px",
            height: "auto",
            margin: "0 auto",
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              zIndex: 1000,
              width: "400px",
              position: "fixed",
              padding: 3,
              boxSizing: "border-box",
              display: currentPage === 0 ? "none" : "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton />
            <IconButton
              onClick={() => setCurrentPage(0)}
              sx={{
                display: "block",
                width: "42px",
                height: "42px",
                // position: "sticky",
                color: "white",
                backgroundColor: "#865FF5",
              }}
            >
              <KeyboardDoubleArrowUpIcon />
            </IconButton>
          </Box>

          <ReactPageScroller
            animationTimer={700}
            pageOnChange={(num) => {
              setCurrentPage(num);
            }}
            containerWidth={"100%"}
            containerHeight-={"100%"}
            customPageNumber={currentPage}
          >
            <Main setCurrentPage={setCurrentPage} />
            <Needs setCurrentPage={setCurrentPage} />
            <Sol1 setCurrentPage={setCurrentPage} />
            <Sol2 setCurrentPage={setCurrentPage} />
            <Sol3 setCurrentPage={setCurrentPage} />
            <Action setCurrentPage={setCurrentPage} />
          </ReactPageScroller>
        </section>
      </BrowserView>
      <MobileView>
        <Box sx={{ height: "calc(var(--vh, 1vh) * 100)" }}>
          <Box
            sx={{
              zIndex: 1000,
              width: "100%",
              position: "fixed",
              padding: 3,
              boxSizing: "border-box",
              display: currentPage === 0 ? "none" : "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton />
            <IconButton
              onClick={() => setCurrentPage(0)}
              sx={{
                display: "block",
                width: "42px",
                height: "42px",
                // position: "sticky",
                color: "white",
                backgroundColor: "#865FF5",
              }}
            >
              <KeyboardDoubleArrowUpIcon />
            </IconButton>
          </Box>

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
        </Box>
      </MobileView>
    </ThemeProvider>
  );
}

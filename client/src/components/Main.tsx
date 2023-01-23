import Investoon from "../public/investoon.png";
import { Box, Typography } from "@mui/material";
// import { DownWhiteKey } from "../common/moveButton";
// import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export function Main({ setCurrentPage }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(var(--vh, 1vh) * 100)",
        boxSizing: "border-box",
        backgroundColor: "#865FF5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        pt: "2%",
        pb: "2%",
      }}
    >
      <ArrowCircleUpIcon sx={{ color: "#865FF5", fontSize: "2rem" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ width: { md: "30%", xs: "80%" } }}>
          <img style={{ width: "100%" }} src={Investoon} alt='인베스툰' />
        </Box>
        <Typography variant='h6' sx={{ color: "white", fontWeight: "bold" }}>
          웹툰, 웹소설 투자 플랫폼
        </Typography>
      </Box>
      <ArrowCircleDownIcon
        sx={{ color: "white", fontSize: "2rem", cursor: "pointer" }}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      />
      {/* <DownWhiteKey setCurrentPage={setCurrentPage} /> */}
    </Box>
  );
}

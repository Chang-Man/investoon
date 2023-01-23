import { Box, Typography } from "@mui/material";
import { Layout } from "./common/Layout";
import InvestImg from "../public/invest.jpg";

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export function Sol1({ setCurrentPage }: Props) {
  return (
    <Layout setCurrentPage={setCurrentPage}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", mb: 5 }}>
          <Typography
            variant='h5'
            sx={{ display: { xs: "block", md: "none" }, fontWeight: "bold" }}
          >
            웹툰/웹소설 지분을
            <br /> 주식처럼 사고 팔 수 있어요
          </Typography>
          <Typography
            variant='h4'
            sx={{ display: { xs: "none", md: "block" }, fontWeight: "bold" }}
          >
            웹툰/웹소설 지분을
            <br /> 주식처럼 사고 팔 수 있어요
          </Typography>
        </Box>
        <Box sx={{ width: { md: "65%", xs: "100%" } }}>
          {" "}
          <img src={InvestImg} style={{ width: "100%" }} />
        </Box>
      </Box>
    </Layout>
  );
}

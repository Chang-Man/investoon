import { Box, Typography } from "@mui/material";
import { Layout } from "./common/Layout";
import DividendImg from "../public/dividend.png";

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export function Sol2({ setCurrentPage }: Props) {
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
            보유한 만큼 안정적으로
            <br /> 배당 수익을 받아요
          </Typography>
          <Typography
            variant='h4'
            sx={{ display: { xs: "none", md: "block" }, fontWeight: "bold" }}
          >
            보유한 만큼 안정적으로
            <br /> 배당 수익을 받아요
          </Typography>
        </Box>
        <Box sx={{ width: { md: "65%", xs: "100%" } }}>
          {" "}
          <img src={DividendImg} style={{ width: "100%" }} />
        </Box>
      </Box>
    </Layout>
  );
}

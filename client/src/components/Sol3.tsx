import { Box, Typography } from "@mui/material";
import { Layout } from "./common/Layout";
import IpExampleImg from "../public/ipExample.png";

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export function Sol3({ setCurrentPage }: Props) {
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
            영상화 2차 저작 시
            <br /> 치솟는 수익률
          </Typography>
          <Typography
            variant='h4'
            sx={{ display: { xs: "none", md: "block" }, fontWeight: "bold" }}
          >
            영상화 2차 저작 시
            <br /> 치솟는 수익률
          </Typography>
        </Box>
        <Box sx={{ width: { md: "70%", xs: "100%" } }}>
          {" "}
          <img src={IpExampleImg} style={{ width: "100%" }} />
        </Box>
      </Box>
    </Layout>
  );
}

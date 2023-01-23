import { Box, Typography } from "@mui/material";
import { Layout } from "./common/Layout";
import NeedsImg from "../public/needs.jpg";

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export function Needs({ setCurrentPage }: Props) {
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
            그동안 웹툰/웹소설,
            <br /> 소비만 하셨나요?
          </Typography>
          <Typography
            variant='h4'
            sx={{ display: { xs: "none", md: "block" }, fontWeight: "bold" }}
          >
            그동안 웹툰/웹소설,
            <br /> 소비만 하셨나요?
          </Typography>
        </Box>
        <Box sx={{ width: { md: "65%", xs: "100%" } }}>
          {" "}
          <img src={NeedsImg} style={{ width: "100%" }} />
        </Box>
      </Box>
    </Layout>
  );
}

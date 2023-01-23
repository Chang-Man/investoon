import {
  Box,
  Button,
  FormControl,
  Grid,
  OutlinedInput,
  Typography,
} from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export function Action() {
  return (
    <Box
      sx={{
        height: "100%",
        weight: "100%",
        pr: { xs: "5%", md: "10%" },
        pl: { xs: "5%", md: "10%" },
        pt: "2%",
        pb: "2%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ArrowCircleUpIcon sx={{ color: "#865FF5", fontSize: "2rem" }} />
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
              <span style={{ color: "#865FF5" }}>E-mail</span>을 남기면
              <br /> 한 주를 드립니다!
            </Typography>
            <Typography
              variant='h4'
              sx={{ display: { xs: "none", md: "block" }, fontWeight: "bold" }}
            >
              <span style={{ color: "#865FF5" }}>E-mail</span>을 남기면
              <br /> 한 주를 드립니다!
            </Typography>
          </Box>
          <Grid
            container
            sx={{ width: "100%", textAlign: "center" }}
            spacing={5}
          >
            <Grid item xs={12} md={8}>
              <FormControl sx={{ width: "100%" }}>
                <input
                  style={{
                    width: "100%",
                    height: "60px",
                    border: "none",
                    fontSize: "1.5rem",
                    borderRadius: "60px",
                    paddingLeft: "5%",
                    // padding: "auto 20px auto 50px",
                    backgroundColor: "#D9D9D9",
                  }}
                ></input>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                sx={{
                  width: "50%",
                  height: "60px",
                  fontSize: "1.5rem",
                  borderRadius: "60px",
                  color: "white",
                  backgroundColor: "#865FF5",
                  "&:hover": {
                    backgroundColor: "#865FF5",
                  },
                }}
              >
                완료
              </Button>
            </Grid>
          </Grid>
        </Box>
        <ArrowCircleUpIcon sx={{ color: "white", fontSize: "2rem" }} />
      </Box>
    </Box>
  );
}

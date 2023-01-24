import {
  Box,
  Button,
  FormControl,
  Grid,
  OutlinedInput,
  Typography,
} from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useState } from "react";
import ReactGA from "react-ga";

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
export function Action({ setCurrentPage }: Props) {
  const [email, setEmail] = useState("");

  return (
    <Box
      sx={{
        height: "calc(var(--vh, 1vh) * 100)",
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
        <ArrowCircleUpIcon
          sx={{ color: "#865FF5", fontSize: "2rem", cursor: "pointer" }}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        />
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
          <Box
            sx={{
              width: "100%",
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <form
              method='POST'
              action='https://script.google.com/macros/s/AKfycbx0ZQzgEaLHBD68YPmuQhsZ0AWq1-YlHPGfwHimWY16cMy_SduBwUD026MePLHyzDicNw/exec'
              target='iframe1'
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onSubmit={() => {
                window.alert("제출 완료했습니다.");
                // setEmail("");
              }}
            >
              <input
                style={{
                  width: "80%",
                  height: "45px",
                  border: "none",
                  fontSize: "1.2rem",
                  borderRadius: "45px",
                  boxSizing: "border-box",
                  paddingLeft: "5%",
                  // padding: "auto 20px auto 50px",
                  backgroundColor: "#D9D9D9",
                }}
                name='email'
                type='email'
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                sx={{
                  mt: 5,
                  width: "40%",
                  height: "45px",
                  fontSize: "1.2rem",
                  borderRadius: "45px",
                  color: "white",
                  backgroundColor: "#865FF5",
                  "&:hover": {
                    backgroundColor: "#865FF5",
                  },
                }}
                type='submit'
              >
                완료
              </Button>
            </form>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <form
              method='POST'
              action='https://script.google.com/macros/s/AKfycbx0ZQzgEaLHBD68YPmuQhsZ0AWq1-YlHPGfwHimWY16cMy_SduBwUD026MePLHyzDicNw/exec'
              target='iframe1'
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
              onSubmit={() => {
                window.alert("제출 완료했습니다.");
                // setEmail("");
                ReactGA.event({
                  category: "Form",
                  action: "Email Submit",
                  label: "email",
                });
              }}
            >
              <input
                style={{
                  width: "60%",
                  height: "45px",
                  border: "none",
                  fontSize: "1.2rem",
                  borderRadius: "45px",
                  boxSizing: "border-box",
                  paddingLeft: "5%",
                  // padding: "auto 20px auto 50px",
                  backgroundColor: "#D9D9D9",
                }}
                name='email'
                type='email'
                // value=''
              />
              <Button
                sx={{
                  width: "15%",
                  height: "45px",
                  fontSize: "1.2rem",
                  borderRadius: "45px",
                  color: "white",
                  backgroundColor: "#865FF5",
                  "&:hover": {
                    backgroundColor: "#865FF5",
                  },
                }}
              >
                완료
              </Button>
            </form>
            <iframe
              id='iframe1'
              name='iframe1'
              style={{ display: "none" }}
            ></iframe>
          </Box>
          {/* <FormControl sx={{ width: "100%" }}>
            <Grid container sx={{ width: "100%" }} spacing={5}>
              <Grid item xs={12} md={8}>
                <input
                  style={{
                    width: "100%",
                    height: "45px",
                    border: "none",
                    fontSize: "1.2rem",
                    borderRadius: "45px",
                    boxSizing: "border-box",
                    paddingLeft: "5%",
                    // padding: "auto 20px auto 50px",
                    backgroundColor: "#D9D9D9",
                  }}
                ></input>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  sx={{
                    width: "50%",
                    height: "45px",
                    fontSize: "1.2rem",
                    borderRadius: "45px",
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
          </FormControl> */}
        </Box>
        <ArrowCircleUpIcon sx={{ color: "white", fontSize: "2rem" }} />
      </Box>
    </Box>
  );
}

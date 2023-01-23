import { Box } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

interface Props {
  children: React.ReactNode;
}
export const Layout: React.FunctionComponent<Props> = (props: Props) => {
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
        {props.children}
        <ArrowCircleDownIcon sx={{ color: "#865FF5", fontSize: "2rem" }} />
      </Box>
    </Box>
  );
};

// export default Layout;

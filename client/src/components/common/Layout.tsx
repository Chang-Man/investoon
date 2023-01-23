import { Box } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

interface Props {
  children: React.ReactNode;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
export const Layout: React.FunctionComponent<Props> = ({
  children,
  setCurrentPage,
}: Props) => {
  return (
    <Box
      sx={{
        height: "100%",
        weight: "100%",
        pr: { xs: "7%", md: "10%" },
        pl: { xs: "7%", md: "10%" },
        pt: "3%",
        pb: "3%",
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
        {children}
        <ArrowCircleDownIcon
          sx={{ color: "#865FF5", fontSize: "2rem", cursor: "pointer" }}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        />
      </Box>
    </Box>
  );
};

// export default Layout;

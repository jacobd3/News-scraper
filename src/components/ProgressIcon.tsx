import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function ProgressIcon() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress sx={{ color: "black" }} size={30} />
    </Box>
  );
}

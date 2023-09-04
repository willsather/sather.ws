"use client";

import { Box, Typography } from "@mui/material";
import NoteIcon from "@/public/icons/note.svg";

const Note = ({ children, ...rest }: { children: string }) => {
  return (
    <Box sx={{ backgroundColor: "#e1bee7", borderLeft: 10, borderColor: "#9c27b0" }} p={3} my={2}>
      <Box sx={{ display: "flex", flexDirection: "row" }} mb={2}>
        <NoteIcon width={24} height={24} fill="#9c27b0" />
        <Typography variant="h4" mx={1} sx={{ fontWeight: 800, color: "#9c27b0" }}>
          Note
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1">{children}</Typography>
      </Box>
    </Box>
  );
};

export default Note;

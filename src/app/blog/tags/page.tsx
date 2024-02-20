import { Box, Divider, Stack, Typography } from "@mui/material";
import Tag from "@/src/app/blog/tag";
import { Metadata } from "next";
import tagsMetadata from "@/src/metadata/tags";
import { getAllTags } from "@/lib/blog/tags";

export const metadata: Metadata = tagsMetadata;

export default async function TagsPage() {
  const tags = await getAllTags();

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
        <Typography variant="h1">TAGS</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }} mt={4}>
        <Typography variant="h2">categories i want to write about</Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Stack direction="row" justifyContent="center" useFlexGap flexWrap="wrap" spacing={{ xs: 2, md: 4 }}>
        {tags.map((tag) => {
          return <Tag key={tag} tag={tag} />;
        })}
      </Stack>
    </Box>
  );
}

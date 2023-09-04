import { BlogPostFrontmatter } from "@/lib/blog/utils";
import { Box, Divider, Typography } from "@mui/material";
import CustomMDX from "@/src/components/blog/CustomMDX";

const Post = ({ frontMatter, content }: { frontMatter: BlogPostFrontmatter; content: string }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" sx={{ color: "grey" }}>
          {frontMatter.date.toLocaleDateString()}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }} mt={2}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          {frontMatter.title}
        </Typography>
      </Box>

      <Divider sx={{ mt: 4 }} />

      <Box my={6}>
        <CustomMDX content={content} />
      </Box>
    </Box>
  );
};

export default Post;

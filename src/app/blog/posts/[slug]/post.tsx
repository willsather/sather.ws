import { Box } from "@mui/material";
import CustomMDX from "@/src/app/blog/(customMdx)/CustomMDX";

const Post = ({ content }: { content: string }) => {
  return (
    <Box>
      <Box my={6}>
        <CustomMDX content={content} />
      </Box>
    </Box>
  );
};

export default Post;

import CustomMDX from "@/src/app/blog/(customMdx)/CustomMDX";

const Post = ({ content }: { content: string }) => {
  return (
    <div>
      <div className="my-10">
        <CustomMDX content={content} />
      </div>
    </div>
  );
};

export default Post;

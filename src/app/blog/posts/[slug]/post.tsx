import CustomMDX from "@/app/blog/CustomMDX";

export default function Post({ content }: { content: string }) {
  return (
    <div>
      <div className="my-10">
        <CustomMDX content={content} />
      </div>
    </div>
  );
}

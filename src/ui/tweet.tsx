import { Tweet as ReactTweet } from "react-tweet";

export default function Tweet({ id }: { id: string }) {
  return (
    <div className="flex items-center justify-center">
      <ReactTweet id={id} />
    </div>
  );
}

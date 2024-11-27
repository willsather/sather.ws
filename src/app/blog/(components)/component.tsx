export default function Component({ name }: { name: string }) {
  return (
    <code className="rounded-md border-2 border-gray-500 px-1 text-gray-500 text-sm">
      {"<"}
      {name}
      {"/>"}
    </code>
  );
}

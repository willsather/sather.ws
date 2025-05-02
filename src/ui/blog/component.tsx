export default function Component({ name }: { name: string }) {
  return (
    <code className="rounded-md border-2 border-gray-300 bg-white! text-gray-500 text-sm">
      {"<"}
      {name}
      {"/>"}
    </code>
  );
}

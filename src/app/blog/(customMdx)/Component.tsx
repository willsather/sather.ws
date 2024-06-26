export default function Component({ name }: { name: string }) {
  return (
    <code className="text-sm text-gray-500 py-0.5 px-1 rounded-md border-2 border-gray-500">
      {"<"}
      {name}
      {"/>"}
    </code>
  );
}

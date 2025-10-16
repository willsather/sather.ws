export default function Component({ name }: { name: string }) {
  return (
    <code className="rounded-md border border-gray-500/30 bg-gray-500/10 text-gray-200 text-sm px-2 py-1">
      {"<"}
      {name}
      {"/>"}
    </code>
  );
}

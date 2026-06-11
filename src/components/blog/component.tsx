export default function Component({ name }: { name: string }) {
  return (
    <code className="rounded-md border border-neutral-500/30 bg-neutral-500/10 px-2 py-1 text-neutral-200 text-sm">
      {"<"}
      {name}
      {"/>"}
    </code>
  );
}

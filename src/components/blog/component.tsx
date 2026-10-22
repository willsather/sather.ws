export default function Component({ name }: { name: string }) {
  return (
    <code className="rounded-md border border-muted bg-muted px-2 py-1 text-muted-light text-sm">
      {"<"}
      {name}
      {"/>"}
    </code>
  );
}

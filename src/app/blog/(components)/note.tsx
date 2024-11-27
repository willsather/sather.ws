import type { ReactNode } from "react";

export type NoteType = "Note" | "Info" | "Success" | "Warning" | "Error";

export default function Note({
  type = "Note",
  children,
}: {
  type: NoteType;
  children: ReactNode;
}) {
  const colorClasses = {
    Note: "border-gray-400 bg-gray-100 text-gray-700",
    Info: "border-sky-400 bg-sky-100 text-sky-700",
    Success: "border-green-400 bg-green-100 text-green-700",
    Warning: "border-amber-400 bg-amber-100 text-amber-700",
    Error: "border-red-400 bg-red-100 text-red-700",
  };

  return (
    <div
      className={`my-3 rounded border border-s-4 ${colorClasses[type]} px-4 py-3`}
      role="alert"
    >
      <h5 className={`font-bold ${colorClasses[type]}`}>{type}</h5>
      <div>{children}</div>
    </div>
  );
}

export function InfoBlock({ children, ...props }: { children: ReactNode }) {
  return (
    <Note type="Info" {...props}>
      {children}
    </Note>
  );
}

export function SuccessBlock({ children, ...props }: { children: ReactNode }) {
  return (
    <Note type="Success" {...props}>
      {children}
    </Note>
  );
}

export function WarningBlock({ children, ...props }: { children: ReactNode }) {
  return (
    <Note type="Warning" {...props}>
      {children}
    </Note>
  );
}

export function ErrorBlock({ children, ...props }: { children: ReactNode }) {
  return (
    <Note type="Error" {...props}>
      {children}
    </Note>
  );
}

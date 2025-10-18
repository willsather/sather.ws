import {
  CheckCircle,
  Info,
  Lightbulb,
  OctagonAlert,
  TriangleAlert,
} from "lucide-react";
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
    Note: "border-sky-500/30 bg-sky-500/10 text-sky-200",
    Info: "border-sky-500/30 bg-sky-500/10 text-sky-200",
    Success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
    Warning: "border-amber-500/30 bg-amber-500/10 text-amber-200",
    Error: "border-red-500/30 bg-red-500/10 text-red-200",
  };

  const icons = {
    Note: Lightbulb,
    Info: Info,
    Success: CheckCircle,
    Warning: TriangleAlert,
    Error: OctagonAlert,
  };

  const IconComponent = icons[type];

  return (
    <div
      className={`my-3 flex items-start gap-3 rounded-xl border ${colorClasses[type]} px-4 py-4`}
      role="alert"
    >
      <IconComponent className="mt-0.5 size-4 flex-shrink-0" />
      <div className="font-mono text-xs leading-relaxed">{children}</div>
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

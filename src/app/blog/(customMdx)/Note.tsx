import { ReactNode } from "react";

export type NoteType = "Info" | "Success" | "Warning" | "Danger";

const getColor = (type: NoteType) => {
  switch (type) {
    case "Info":
      return "sky";

    case "Success":
      return "green";

    case "Warning":
      return "amber";

    case "Danger":
      return "red";

    default:
      return "gray";
  }
};

export default function Note({
  type,
  children,
}: {
  type: NoteType;
  children: ReactNode;
}) {
  const color = getColor(type);
  console.log("color", color);

  return (
    <div className="my-3" role="alert">
      <div
        className={`bg-${color}-400 text-white font-bold rounded-t px-4 py-2`}
      >
        {type}
      </div>
      <div
        className={`border border-t-0 border-${color}-400 rounded-b bg-${color}-100 px-4 py-3 text-${color}-700`}
      >
        {children}
      </div>
    </div>
  );
}

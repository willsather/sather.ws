"use client";

import type { FC } from "react";

type Language =
  | "BASH"
  | "BAT"
  | "C"
  | "CONSOLE"
  | "CPP"
  | "CSHARP"
  | "CSS"
  | "ERLANG"
  | "GO"
  | "HTML"
  | "JAVA"
  | "JS"
  | "JSX"
  | "JSON"
  | "MARKDOWN"
  | "MYSQL"
  | "OBJECTIVEC"
  | "OCAML"
  | "PHP"
  | "PYTHON"
  | "RB"
  | "RS"
  | "SASS"
  | "SCALA"
  | "SCSS"
  | "SHELL"
  | "SQL"
  | "TEXT"
  | "TS"
  | "TSX"
  | "VIM"
  | "XML"
  | "YAML"
  | "ZSH";

export interface FileNameProps {
  codeLanguage: string;
}

const FileName: FC<FileNameProps> = (props) => {
  if (props.codeLanguage == null) {
    return null;
  }

  const language = props.codeLanguage as Language;

  const languageColors: Record<Language, string> = {
    BASH: "border-gray-400 bg-gray-100 text-gray-400",
    BAT: "border-gray-400 bg-gray-100 text-gray-400",
    C: "border-purple-400 bg-purple-100 text-purple-400",
    CONSOLE: "border-gray-400 bg-gray-100 text-gray-400",
    CPP: "border-blue-400 bg-blue-100 text-blue-400",
    CSHARP: "border-purple-400 bg-purple-100 text-purple-400",
    CSS: "border-blue-400 bg-blue-100 text-blue-400",
    ERLANG: "border-rose-400 bg-rose-100 text-rose-400",
    GO: "border-cyan-400 bg-cyan-100 text-cyan-400",
    HTML: "border-orange-400 bg-orange-100 text-orange-400",
    JAVA: "border-red-400 bg-red-100 text-red-400",
    JS: "border-orange-400 bg-orange-100 text-orange-400",
    JSX: "border-orange-400 bg-orange-100 text-orange-400",
    JSON: "border-gray-400 bg-gray-100 text-gray-400",
    MARKDOWN: "border-gray-400 bg-gray-100 text-gray-400",
    MYSQL: "border-cyan-400 bg-cyan-100 text-cyan-400",
    OBJECTIVEC: "border-indigo-400 bg-indigo-100 text-indigo-400",
    OCAML: "border-amber-400 bg-amber-100 text-amber-400",
    PHP: "border-indigo-400 bg-indigo-100 text-indigo-400",
    PYTHON: "border-green-400 bg-green-100 text-green-400",
    RB: "border-red-400 bg-red-100 text-red-400",
    RS: "border-red-400 bg-red-100 text-red-400",
    SASS: "border-pink-400 bg-pink-100 text-pink-400",
    SCALA: "border-yellow-400 bg-yellow-100 text-yellow-400",
    SCSS: "border-pink-400 bg-pink-100 text-pink-400",
    SHELL: "border-gray-400 bg-gray-100 text-gray-400",
    SQL: "border-cyan-400 bg-cyan-100 text-cyan-400",
    TEXT: "border-gray-400 bg-gray-100 text-gray-400",
    TS: "border-blue-400 bg-blue-100 text-blue-400",
    TSX: "border-blue-400 bg-blue-100 text-blue-400",
    VIM: "border-green-400 bg-green-100 text-green-400",
    XML: "border-orange-400 bg-orange-100 text-orange-400",
    YAML: "border-orange-400 bg-orange-100 text-orange-400",
    ZSH: "border-gray-400 bg-gray-100 text-gray-400",
  };

  return (
    <p
      className={`${
        languageColors[language] ?? "border-gray-400 bg-gray-100 text-gray-400"
      } text-sm p-1 px-2 border-2 rounded-lg`}
    >
      {props.codeLanguage}
    </p>
  );
};

export default FileName;

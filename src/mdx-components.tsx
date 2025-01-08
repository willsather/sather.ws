import type { MDXComponents } from "mdx/types";

import a from "@/app/blog/(components)/a";
import blockquote from "@/app/blog/(components)/blockquote";
import h1 from "@/app/blog/(components)/h1";
import h2 from "@/app/blog/(components)/h2";
import h3 from "@/app/blog/(components)/h3";
import h4 from "@/app/blog/(components)/h4";
import h5 from "@/app/blog/(components)/h5";
import hr from "@/app/blog/(components)/hr";
import img from "@/app/blog/(components)/img";
import li from "@/app/blog/(components)/li";
import ol from "@/app/blog/(components)/ol";
import p from "@/app/blog/(components)/p";
import pre from "@/app/blog/(components)/pre";
import ul from "@/app/blog/(components)/ul";

import Component from "@/app/blog/(components)/component";
import Note, {
  ErrorBlock,
  InfoBlock,
  SuccessBlock,
  WarningBlock,
} from "@/app/blog/(components)/note";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    a,
    pre,
    img,
    Image: img,
    blockquote,
    hr,
    ul,
    ol,
    li,
    Component,
    Note,
    Info: InfoBlock,
    Success: SuccessBlock,
    Warning: WarningBlock,
    Error: ErrorBlock,
  };
}

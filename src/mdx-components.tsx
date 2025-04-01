import type { MDXComponents } from "mdx/types";

import a from "@/ui/blog/a";
import blockquote from "@/ui/blog/blockquote";
import Component from "@/ui/blog/component";
import h1 from "@/ui/blog/h1";
import h2 from "@/ui/blog/h2";
import h3 from "@/ui/blog/h3";
import h4 from "@/ui/blog/h4";
import h5 from "@/ui/blog/h5";
import hr from "@/ui/blog/hr";
import img from "@/ui/blog/img";
import li from "@/ui/blog/li";
import Note, {
  ErrorBlock,
  InfoBlock,
  SuccessBlock,
  WarningBlock,
} from "@/ui/blog/note";
import ol from "@/ui/blog/ol";
import p from "@/ui/blog/p";
import pre from "@/ui/blog/pre";
import ul from "@/ui/blog/ul";

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

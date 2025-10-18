import type { MDXComponents } from "mdx/types";

import a from "@/components/blog/a";
import blockquote from "@/components/blog/blockquote";
import Component from "@/components/blog/component";
import h1 from "@/components/blog/h1";
import h2 from "@/components/blog/h2";
import h3 from "@/components/blog/h3";
import h4 from "@/components/blog/h4";
import h5 from "@/components/blog/h5";
import hr from "@/components/blog/hr";
import img from "@/components/blog/img";
import li from "@/components/blog/li";
import Note, {
  ErrorBlock,
  InfoBlock,
  SuccessBlock,
  WarningBlock,
} from "@/components/blog/note";
import ol from "@/components/blog/ol";
import p from "@/components/blog/p";
import pre from "@/components/blog/pre";
import ul from "@/components/blog/ul";

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

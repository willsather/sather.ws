"use client";

import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import type { LinkProps as MuiLinkProps } from "@mui/material";

export interface LinkProps extends MuiLinkProps {}

const CustomLink = styled(Link)<LinkProps>(() => ({}));

export default CustomLink;

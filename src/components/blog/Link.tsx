"use client";

import { Link as MuiLink, styled } from "@mui/material";
import type { LinkProps as MuiLinkProps } from "@mui/material";

export interface LinkProps extends MuiLinkProps {}

const Link = styled(MuiLink)<LinkProps>(() => ({}));

export default Link;

import Link from "next/link";
import styles from "@/src/app/(header)/header.module.scss";
import { Typography } from "@mui/material";

const HeaderMenuItem = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      className={styles.headerMenuItem}
      href={link}
      style={{
        fontSize: "18px",
        color: "black",
        margin: "5px",
        textDecoration: "none",
        textAlign: "right",
      }}
    >
      <Typography variant="body1" color="primary.main">
        {text}
      </Typography>
    </Link>
  );
};

export default HeaderMenuItem;

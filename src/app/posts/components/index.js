import React from "react";

import styles from "./index.module.css";

function SubHeading({ children }) {
  return <div className={styles.subheading}>{children}</div>;
}

export default SubHeading;

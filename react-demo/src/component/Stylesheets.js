import "./stylesheet.css";
import styles from "./stylesheets.module.css"

export const StyleSheets = () => {
  const heading = {
    color: "green",

  };
  return (
    <>
      <h1 className="primary">Mayur</h1>
      <h2 style={{ color: "red" }}>Mayur</h2>
      <h2 style={heading}>Mayur</h2>
      <h3 className={styles.secondary}>Mayur</h3>
      <h4 className={styles.primary}>Mayur</h4>
    </>
  );
};

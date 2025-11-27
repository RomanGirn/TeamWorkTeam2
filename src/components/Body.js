import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/roman-photo.jpg"} alt="Roman Girny" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Roman Girny</h2>
          <p style={styles.position}>QA</p>
        </div>
      </div>
  <div style={styles.card}>
        <img src={"/mariana-photo.jpg"} alt="Mariana Nadorozhniak" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Mariana Nadorozhniak</h2>
          <p style={styles.position}>UI/UX</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/sasha-photo.jpg"} alt="Olexandr Skrypnychuk" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Olexandr Skrypnychuk</h2>
          <p style={styles.position}>Software Developer</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;

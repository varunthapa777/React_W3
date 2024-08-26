function ColorBox({ color }) {
  return (
    <div
      style={{
        width: "170px",
        height: "200px",
        backgroundColor: color,
        border: "5px solid black",
        margin: "10px 0",
        boxSizing: "border-box",
        transition: "background-color 1s ease",
      }}
    ></div>
  );
}

export default ColorBox;

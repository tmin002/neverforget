// width, height, src, onClick
function ImageButton({ width, height, src, onClick }) {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundImage: `url(${src})`,
        onClick: onClick,
        cursor: "pointer",
        backgroundSize: "contain",
        marginLeft: "30px",
      }}
    ></div>
  );
}

export default ImageButton;

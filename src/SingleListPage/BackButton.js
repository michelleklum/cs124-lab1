function BackButton(props) {
  return (
    <i
      className="fas fa-chevron-left fa-4x"
      onClick={() => props.onChangePage("Home")}
    ></i>
  );
}

export default BackButton;

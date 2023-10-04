// typing of click events
type ButtonProps = {
  //   handleClick: () => void;
  handleClickEvent: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

function Button(props: ButtonProps) {
  return <button onClick={(e) => props.handleClickEvent(e, 1)}>Click</button>;
}

export default Button;

// typing of children props
type HeadingProps = {
  children: string;
};

function Heading(props: HeadingProps) {
  return <h2>{props.children}</h2>;
}

export default Heading;

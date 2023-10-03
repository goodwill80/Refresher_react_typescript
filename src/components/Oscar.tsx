// typing a react component as React.ReactNode;
type OscarProps = {
  children: React.ReactNode;
};

function Oscar(props: OscarProps) {
  return <div>{props.children}</div>;
}

export default Oscar;

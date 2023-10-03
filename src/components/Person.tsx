//typing object props
type PersonProps = {
  personName: {
    first: string;
    last: string;
  };
};

function Person(props: PersonProps) {
  return (
    <div>
      {props.personName.first} {props.personName.last}
    </div>
  );
}

export default Person;

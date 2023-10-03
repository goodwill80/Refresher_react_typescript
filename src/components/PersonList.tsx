// typing an array of objects
type PersonListProps = {
  nameList: { first: string; last: string }[];
};

function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.nameList.map((name, index) => {
        return (
          <h2 key={index}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
}

export default PersonList;

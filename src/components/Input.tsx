//typing of onChange event
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return <input type="text" value={props.value} onChange={handleInputChange} />;
}

export default Input;

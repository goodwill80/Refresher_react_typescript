// Typing individual props and optionals - i.e. messageCount
type GreetProps = {
  name: string;
  messageCount?: number; // ? means optional
  isLoggedIn: boolean;
};

// interface GreetProps {
//   name: string;
// }

function Greet({ name, messageCount, isLoggedIn }: GreetProps) {
  return (
    <div>
      {isLoggedIn ? (
        <h2>
          Welcome {name}! You have {messageCount} unread messages
        </h2>
      ) : (
        <h2>Welcome Guest</h2>
      )}
    </div>
  );
}

export default Greet;

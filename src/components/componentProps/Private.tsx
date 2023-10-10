import Login from './Login';
import { ProfileProps } from './Profile';
// Typing of component props

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

function Private({ isLoggedIn, component: Component }: PrivateProps) {
  if (isLoggedIn) {
    return <Component name="Jonathan" />;
  } else {
    return <Login />;
  }
}

export default Private;

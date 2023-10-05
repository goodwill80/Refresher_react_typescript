import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Box() {
  const { primary, secondary } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: primary.main, color: secondary.text }}>
      Theme Context
    </div>
  );
}

export default Box;

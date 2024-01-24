
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Toggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch
      style={{ marginBottom: '-1.4rem' , marginTop: '-1rem'}}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={25}
    />
  );
};


export default Toggle;
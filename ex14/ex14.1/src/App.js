import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Theme from './Theme';

const App = () => {
  return (
    <ThemeProvider>
      <Theme />
    </ThemeProvider>
  );
};

export default App;

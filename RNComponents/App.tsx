import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from './src/context/contextTheme/ThemeContex';
import Navigation from './src/navigation/Navigation';



const App = () => {
  return (
    <ThemeApp>
      <Navigation />
    </ThemeApp>



  );
};

export default App;

const ThemeApp = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};


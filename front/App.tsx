import React, {useState} from 'react';
import LandingPage from './src/pages/LandingPage';
import StartPage from './src/pages/StartPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return <>{isLoggedIn ? <LandingPage /> : <StartPage />}</>;
}

export default App;

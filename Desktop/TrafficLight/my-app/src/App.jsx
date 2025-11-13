import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Light } from './light';
import './App.css';

export const RED = 'red';
export const GREEN = 'green';
export const YELLOW = 'yellow';

function App() {
  const [currentLight, setCurrentLight] = useState(RED);

  const toggleCurrentLight = () => {
    if (currentLight === RED) {
      setCurrentLight(GREEN);
      return;
    }
    if (currentLight === GREEN) {
      setCurrentLight(YELLOW);
      return;
    }
    setCurrentLight(RED);
  };

  useEffect(() => {
    setTimeout(() => {
      toggleCurrentLight();
    }, 3000);
  }, [currentLight]);

  return (
    <>
      <div className="wrapper">
        <div id="container">
          <Light
            currentLight={currentLight}
            identifier="red"
            lightState={RED}
          />
          <Light
            currentLight={currentLight}
            identifier="yellow"
            lightState={YELLOW}
          />
          <Light
            currentLight={currentLight}
            identifier="green"
            lightState={GREEN}
          />
        </div>
      </div>
    </>
  );
}

export default App;

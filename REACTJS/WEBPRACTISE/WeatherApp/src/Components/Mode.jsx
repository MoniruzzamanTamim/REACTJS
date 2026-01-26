import { useState, useEffect } from 'react';
import '../assets/mode.css';

function Mode() {
  const [mode, setMode] = useState(
    localStorage.getItem('mode') || 'light'
  );

  useEffect(() => {
    document.body.className = mode;
    localStorage.setItem('mode', mode);
  }, [mode]);

  return (
    <div >
      <button onClick={() => 
        setMode(mode === 'light' ? 'dark' : 'light')
      }>
        {mode === 'light' ? '🌙 Dark' : '☀ Light'}
      </button>
    </div>
  );
}

export default Mode;

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { invoke } from '@tauri-apps/api/tauri';
import './App.css';
import TitleBar from './components/titlebar/TitleBar';
function App() {
  return (
    <div>
      <TitleBar></TitleBar>
    </div>
  );
}

export default App;

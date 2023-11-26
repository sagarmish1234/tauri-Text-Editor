import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { invoke } from '@tauri-apps/api/tauri';
import './App.css';
import TitleBar from './components/titlebar/TitleBar';
import EditSpace from "./components/editSpace/EditSpace"
function App() {
  return (
    <div>
      <TitleBar></TitleBar>
      <EditSpace></EditSpace>
    </div>
  );
}

export default App;

import { invoke } from '@tauri-apps/api/tauri';
import { open } from '@tauri-apps/api/dialog';

export const FileUtil = {
  open_file: async () => {
    const path = await open();
    console.log(path);
    window.path = path;
    const result = await invoke('open_file', { path });
    console.log(result);
    window.fileContent = result;
    document.getElementById('space').innerText = result;
  },
};

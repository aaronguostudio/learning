## Electron

### Processes

- Electoron is based on Chrome
  - Main Process
    - support system API
    - create new renderer processes
    - support node.js
    - has one main.js
  - Renderer Process
    - multi windows
    - each window is a process
    - support node.js and DOM API
    - Some electron API
- devtron plugin
  - dev tool for electron

### IPC (interprocess communication)

- processes comunicates through IPC


### main API

- BrowserWindow
- ipcMain, ipcRenderer
- remote
  - BrowserWindow
  - shortcut for using APIs in main

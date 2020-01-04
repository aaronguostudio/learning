# Part 2

## Navigation

### Browser Process has threads
  - UI thread
  - network thread
  - storage thread

### A Simple Navigation
  - Handling input
    - Is this a search query or url...
  - Start navigation
    - Network starts the process
  - Read response
    - Get response body
    - MIME type sniffing
    - If response is a html, pass to render process
    - If it is a zip file, pass to download manager
    - SafeBrowing check also happens here
    - CORB (Cross Origin Read Blocking)
  - Find a renderer process
    - Renderer process will try to start in parallel to the network request in order to make the process faster
  - Commit navigation
    - data and render process is ready, an IPC (intel process call) is sent from the browser process to the renderer process to commit the navigation
    - Update address bar, security indicator and UI
    - Update session history
  - Initial load complete
    - Renderer process details ( covered in the next part )
    - Once renderer process 'finish', it sends an IPC back to the browser process ( after all onload triggered in all frames in the page ), js may trigger async call, so its 'finish'
  - A new navigation
    - Before leave, browser will check beforeunload event and any js events

### Service Worker
  - When a navigation happens, network thread checks the domain against registered service scopes
  - UI theread find a renderer process to execute the code

### Navigation preload
  - Loading resources in parallel to service worker setup

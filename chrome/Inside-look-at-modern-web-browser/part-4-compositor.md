# Part 4

## Input events from the browser's point of view
- An event like touchstart happened
  - Browser process sents the event type and its coordinates to renderer process
  - Renderer process find the event target and run the event listeners

...
<!-- Some good points, review the renderer and compositing sessions in the future -->


## Furthure reading
- Chrome Layers Panel
  - https://blog.logrocket.com/eliminate-content-repaints-with-the-new-layers-panel-in-chrome-e2c306d4d752/?gi=cd6271834cea

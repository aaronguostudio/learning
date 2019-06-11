# Part 3

## Renderer processes handle web contents
  - The main thread handles most of the code
  - Using worker threads if using a service worker or web worker
  - Compositor and raster threads are also run inside

  ![Renderer](./renderer.png)


## Parsing

### Construction of a DOM
  - HTML to DOM
    - Subresource loading
      - Preload scanner is run concurrently. Sends requests to the network thread
    - JS can block the parsing

  ![DOM](./dom.png)

  - Style Calculation
  - Paint
    - Order to paint, e.g. z-index
    - Updating rendering pipline is costly
  - Compositing
    - rasterizing
    - Composing is a technique to separate parts of a page into layers, rasterize them separately and composite as a page in a separate thread called compositor thread
  - Raster and composite off of the main thread
    - Once layer tree is created and paint orders are determined, the main thread commits the information to the compositor thread. The compositor then rasterizes each layer
    - Compositor thread divides them into tiles and sends each tile off to raster threads. Raster threads rasterize each tile and store them in GPU memory ( Create the bitmap of tiles and sending to GPU )

  ![Raster](./raster.png)

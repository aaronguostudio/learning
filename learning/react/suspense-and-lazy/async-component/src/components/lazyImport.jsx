import { lazy } from 'react'

const lazyImport = (
  fileLocation
) => lazy(() => import(`${fileLocation}`))

export default lazyImport

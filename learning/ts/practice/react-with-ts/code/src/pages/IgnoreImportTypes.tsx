import React from "react"
// @ts-ignore
import _ from "lodash"

/*
This is a demo for the minimal usage of typescript.
Notice that @ts-ignore will ignore the types of the imported package.
If the package doesn't have @types defined, we can ignore it,
but in our res: number[], we defined the expectation, which
will add safe guards for the code
*/

const IgnoreImportTypes = (props: any): any => {
  console.log(props)
  const duplicate = (n: number): [number, number] => {
    return [n, n]
  }

  const x = "asdf2134234"
  console.log(x, 21, 2)

  const data: number[] = [1, 2]
  const res: number[] = _.flatMap(data, duplicate)

  return (
    <div>
      <div>
        Flatten array {data} to {res} with minumel typescripts
      </div>
    </div>
  )
}

export default IgnoreImportTypes

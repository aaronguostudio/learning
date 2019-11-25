import React from "react"
// @ts-ignore
import _ from "lodash"
import HelloWorld from "@components/HelloWorld"

/*
This is a demo for the minimal usage of typescript.
Notice that @ts-ignore will ignore the types of the imported package.
If the package doesn't have @types defined, we can ignore it,
but in our res: number[], we defined the expectation, which
will add safe guards for the code
*/

const IgnoreImportTypes = (props: any) => {
  console.log(props)
  const duplicate = (n: number): [number, number] => {
    return [n, n]
  }

  const data: number[] = [1, 2]
  const res: number[] = _.flatMap(data, duplicate)

  console.log(">res", res)

  return (
    <div>
      <div>
        Flatten array {data} to {res} with minumel typescripts
      </div>
      <div>
        <div>This</div>
        <HelloWorld />
      </div>
    </div>
  )
}

export default IgnoreImportTypes

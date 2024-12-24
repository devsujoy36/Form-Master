/* eslint-disable react/prop-types */

import { useContext } from "react"
import { AssetContext } from "../Grandpa/Grandpa"


const Special = ({specialName}) => {
    const gift = useContext(AssetContext)
  return (
    <div>
        <h1>{specialName}</h1>
        <h1>{gift}</h1>
    </div>
  )
}

export default Special
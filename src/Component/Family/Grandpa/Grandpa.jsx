import { createContext } from "react"
import Aunty from "../Aunty/Aunty"
import Dad from "../Dad/Dad"
import Uncle from "../Uncle/Uncle"
import './Grandpa.css'

export const AssetContext = createContext('Gold')

const Grandpa = () => {
  return (
    <div className="main">
      <h1 className="text-center font-bold text-2xl">Grandpa</h1>
      <section className="grandpa flex ">
        <AssetContext.Provider value="Gold">
          <Dad></Dad>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </AssetContext.Provider>
      </section>
    </div>
  )
}

export default Grandpa
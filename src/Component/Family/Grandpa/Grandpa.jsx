import { createContext, useState } from "react"
import Aunty from "../Aunty/Aunty"
import Dad from "../Dad/Dad"
import Uncle from "../Uncle/Uncle"
import './Grandpa.css'

export const AssetContext = createContext();
export const MoneyContext = createContext()

const Grandpa = () => {
const [money, setMoney] = useState(null)

  return (
    <div className="main">
      <div className="text-center font-bold text-2xl">
      <h1>Grandpa</h1>
      <h1>Bank Balance: {money}</h1>

      </div>
      <section className="grandpa flex ">
        <MoneyContext.Provider value={[money, setMoney]}>
          <AssetContext.Provider value="Gold">
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </AssetContext.Provider>
        </MoneyContext.Provider>
      </section>
    </div>
  )
}

export default Grandpa
import { useContext } from "react"
import Child from "../Dad/Child"
import { MoneyContext } from "../Grandpa/Grandpa"

const Aunty = () => {

  const btnStyle = "text-white font-semibold bg-emerald-600 hover:bg-emerald-500 active:scale-95 px-4 py-2 rounded-lg transition-all active:-skew-x-6"

  const [money, setMoney] = useContext(MoneyContext)

  return (
    <div className="granpa">
      <h1 className="text-center text-xl font-bold">Aunty</h1>
      <p className="main font-bold text-center">Money: {money}</p>
      <section className="flex">
        <Child name={"Anay"} />
        <Child name={"Mistu"} />
      </section>
      <div className="flex justify-center items-center">
        <button onClick={() => setMoney(money+1000)} className={btnStyle}>Add 1000Tk</button>
      </div>
    </div>
  )
}

export default Aunty
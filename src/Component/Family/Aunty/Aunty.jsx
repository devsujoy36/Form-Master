import Child from "../Dad/Child"

const Aunty = () => {
  return (
    <div className="granpa">
      <h1 className="text-center text-xl font-bold">Aunty</h1>
      <section className="flex">
        <Child name={"Anay"} />
        <Child name={"Mistu"} />
      </section>
    </div>
  )
}

export default Aunty
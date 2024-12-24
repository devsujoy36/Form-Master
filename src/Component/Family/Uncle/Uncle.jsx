import Child from "../Dad/Child"

const Uncle = () => {
  return (
    <div className="granpa">
      <h1 className="text-center text-xl font-bold">Uncle</h1>
      <section className="flex">
        <Child name={"Bivor"} />
        <Child name={"Mughdho"} />
        <Child name={"Puchu"} />
      </section>
    </div>
  )
}

export default Uncle
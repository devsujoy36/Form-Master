import Child from "./Child"

const Dad = () => {
  return (
    <div className="granpa">
      <h1 className="text-center text-xl font-bold">Dad</h1>
      <section className="flex">
        <Child name={"MySelf"} special={true}/>
        <Child name={"Brother"}/>
        <Child name={"Sister"}/>
      </section>
    </div>
  )
}

export default Dad
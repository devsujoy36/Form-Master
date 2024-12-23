import useInputState from "../../hooks/useInputState";


const HookForm = () => {

  const btnStyle = 'bg-emerald-500 py-2 rounded-xl hover:bg-emerald-400 active:scale-95 transition-all'

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name);
  }

  const [name, handleChange] = useInputState('rojoni')

  return (
    <div className="flex justify-center bg-black text-white items-center h-[100vh]">
      <form action="" onSubmit={handleSubmit} className="border-2 flex flex-col gap-2 border-white p-10 rounded-xl">

        <input type="text" value={name} onChange={handleChange} name="name" placeholder="Name" className="border-white text-black border p-2 rounded-md" />
        <input type="email" name="email" placeholder="Email" className="border-white border p-2 rounded-md" />
        <input type="text" name="phone" placeholder="phone" className="border-white border p-2 rounded-md" />

        <input type="submit" className={btnStyle} />
      </form>
    </div>
  )
}

export default HookForm
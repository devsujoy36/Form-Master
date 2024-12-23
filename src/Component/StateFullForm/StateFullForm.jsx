import { useState } from "react";


const StateFullForm = () => {
    const formStyle = 'border-2 flex flex-col gap-2 border-black p-10 rounded-xl'
    const inputStyles = 'border-black border p-2 rounded-md'
    const btnStyle = 'bg-emerald-500 py-2 rounded-xl hover:bg-emerald-400 active:scale-95 transition-all'

    const [name, setName] = useState('Rojoni Klanto')
    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const [error, setError] = useState("")

    const handleSubmit = e => {
        e.preventDefault(); //stop reloading
        if (pass.length < 6) {
            setError('Password must be 6 character or longer')
        }
        else{
            setError('')
            console.log(name, email, pass);
        }
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPass(e.target.value)
    }



    console.log(name, email, pass);
    return (
        <div className="flex justify-center flex-col gap-10 items-center h-[100vh]">
                <h1 className="text-2xl font-bold">State FUll Form</h1>
            <div className="border-black rounded-xl border shadow-lg p-10 active:scale-95 transition-all">
                <h1>Name: {name}</h1>
                <h1>Email: {email}</h1>
                <h1>Pass: {pass}</h1>
            </div>

            <form action="" onSubmit={handleSubmit} className={formStyle}>
                <input type="text" value={name} onChange={handleNameChange} name="name" placeholder="Name" className={inputStyles} />
                <input type="email" onChange={handleEmailChange} name="email" placeholder="Email" className={inputStyles} required />
                <input type="password" onChange={handlePassChange} name="pass" placeholder="Password" className={inputStyles} required/>

                <input type="submit" className={btnStyle} />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    )
}

export default StateFullForm
/**
 * uncontroled element: useRef to create a reference to the element and access value by using like: nameRef.current.value 
 */

import { useEffect, useRef } from "react"
const RefFrom = () => {
    const formStyle = 'border-2 flex flex-col gap-2 border-black p-10 rounded-xl'
    const inputStyles = 'border-black border p-2 rounded-md'
    const btnStyle = 'bg-emerald-500 py-2 rounded-xl hover:bg-emerald-400 active:scale-95 transition-all'

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)

    useEffect(() => {
      nameRef.current.focus();
    }, [])
    


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passRef.current.value);
    }


    return (
        <div className="flex justify-center flex-col gap-10 items-center h-[100vh]">
            <h1 className="font-bold text-4xl">Use Ref Form</h1>
            <form action="" onSubmit={handleSubmit} className={formStyle}>
                <input type="text" ref={nameRef} name="name" placeholder="Name" className={inputStyles} />
                <input type="email" ref={emailRef} name="email" placeholder="Email" className={inputStyles} />
                <input type="password" ref={passRef} name="pass" placeholder="Password" className={inputStyles} />
                <input type="submit" className={btnStyle} />
            </form>
        </div>
    )
}

export default RefFrom
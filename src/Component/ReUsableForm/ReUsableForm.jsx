/* eslint-disable react/prop-types */

const ReUsableForm = ({formTitle, handleSubmit, submitBtnText, children}) => {
    const btnStyle = 'bg-emerald-500 py-2 rounded-xl hover:bg-emerald-400 active:scale-95 transition-all'

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data)
    }


    return (
        <div className="flex justify-center flex-col gap-5 items-center h-[50vh]">
            <h1 className="text-4xl font-bold">{formTitle}</h1>
            {children}
            <form action="" onSubmit={handleLocalSubmit} className="border-2 flex flex-col gap-2 border-black p-10 rounded-xl">
                <input type="text" name="name" placeholder="Name" className="border-black border p-2 rounded-md" />
                <input type="email" name="email" placeholder="Email" className="border-black border p-2 rounded-md" />
                <input type="password" name="password" placeholder="password" className="border-black border p-2 rounded-md" />

                <input type="submit" value={submitBtnText}  className={btnStyle} />
            </form>
        </div>
    )
}

export default ReUsableForm;
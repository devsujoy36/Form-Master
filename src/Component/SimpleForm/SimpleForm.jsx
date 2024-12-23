
const SimpleForm = () => {

    const btnStyle = 'bg-emerald-500 py-2 rounded-xl hover:bg-emerald-400 active:scale-95 transition-all'

    const handleSubmit = e =>{
        e.preventDefault();
        console.log("form Submitted");
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }


    return (
        <div className="flex justify-center items-center h-[100vh]">
            <form action="" onSubmit={handleSubmit} className="border-2 flex flex-col gap-2 border-black p-10 rounded-xl">
                <input type="text" name="name" placeholder="Name" className="border-black border p-2 rounded-md" />
                <input type="email" name="email" placeholder="Email" className="border-black border p-2 rounded-md" />
                <input type="text" name="phone" placeholder="phone" className="border-black border p-2 rounded-md" />

                <input type="submit" className={btnStyle} />
            </form>
        </div>
    )
}

export default SimpleForm
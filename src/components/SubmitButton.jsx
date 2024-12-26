const SubmitButton = ({onclick})=>{
    return <div className="mx-4 my-2">
        <button 
            onClick={onclick} 
            className="border w-full px-6 py-2 text-xl font-semibold text-white bg-black hover:bg-zinc-800 rounded-md "
        >
            Submit
        </button>
    </div>
}

export default SubmitButton;
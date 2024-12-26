const InputBox = ({label,type,placeholder,onInput,defaultValue})=>{
    return <div className="mx-4 my-2">
        <div className="text-xl font-semibold my-1 w-full">
            {label}
        </div>
        <input type={type} placeholder={placeholder} onInput={onInput} defaultValue={defaultValue} className="my-1 border border-slate-300 px-3 py-2 text-lg rounded-md w-full" />
    </div>
}

export default InputBox;
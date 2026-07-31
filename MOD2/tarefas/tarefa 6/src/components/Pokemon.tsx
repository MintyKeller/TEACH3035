interface Props {
    name: string
}


export function Pokemon ({name}:Props) {
    return (
        <div className=" border border-gray-300 rounded-md p-4 cursor-pointer hover:shadow-md"  >
            <h1 className="font-bold text-xl">{name}</h1>
         
        </div>
    )
}
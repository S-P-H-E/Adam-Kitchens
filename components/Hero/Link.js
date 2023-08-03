import { BsLink45Deg } from 'react-icons/bs'

export default function Link({name, link}){
    return(
        <div className="bg-[var(--text)] text-[var(--bg)] p-4 w-[400px] rounded-xl flex justify-between items-center cursor-pointer transition-all md:hover:scale-105" onClick={() => {event.preventDefault();window.open(`${link}`, "_blank");}}>
            <h1>{name}</h1>
            <BsLink45Deg size={20}/>
        </div>
    )
}
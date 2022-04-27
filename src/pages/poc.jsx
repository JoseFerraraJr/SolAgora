import { useState } from "react"
import DadosBasicos from "../components/PocDadosBasicos"
import Endereco from "../components/PocEndereco"

export default function PoC() {
    
    const [passo, setPasso] = useState(1)
    
    return (
        <div className="h-screen bg-slate-700 text-white flex flex-col justify-center items-center">
            <div>
                <ul className="flex flex-row mb-10">
                    <li className={passo === 1 ? 'mx-5 border-b-2' : 'mx-5'}>PASSO 1</li>
                    <li className={passo === 2 ? 'mx-5 border-b-2' : 'mx-5'}>PASSO 2</li>
                </ul>
            </div>

            <div className="w-4/12">
                {passo === 1 ? 
                    <DadosBasicos passo={setPasso} />
                :
                    <Endereco passo={setPasso} />
                }
            </div>
        </div>
    )
}
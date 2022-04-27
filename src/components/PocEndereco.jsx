import { useState } from 'react'

import Button from "./PocButton"
import Title from "./PocTitle"

export default function Endereco(props) {

    const formText = 'mt-1 block w-full rounded-md border-transparent text-gray-700 bg-gray-100 focus:border-yellow-400 focus:bg-white focus:ring-0'
    const formButton = 'mt-8 py-3 block w-1/2 rounded-md text-stone-800 bg-yellow-700 border-white focus:border-slate-700 focus:bg-slate-300 focus:ring-0'

    const [cep, setCep] = useState('')
    const [rua, setRua] = useState(0)
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [consulta, setConsulta] = useState('')

    async function salvarUsuario() {
        await fetch('/api/poc', {
            method: 'POST',
            body: JSON.stringify({ cep, rua, numero, complemento })
        })

        const resp = await fetch('/api/poc')
        const data = await resp.json()
        setConsulta(data)
    }
    return (
        <>
            <Title>ENDEREÇO</Title>

            <div className="grid grid-cols-1 gap-6">
                <label className="block">
                    <span className="text-gray-50">CEP</span>
                    <input type="text" value={cep} onChange={e => setCep(e.target.value)} className={formText} placeholder="" />
                </label>
                <label className="block">
                    <span className="text-gray-50">Rua</span>
                    <input type="text" value={rua} onChange={e => setRua(e.target.value)} className={formText} placeholder="" />
                </label>
                <label className="block">
                    <span className="text-gray-50">Número</span>
                    <input type="text" value={numero} onChange={e => setNumero(e.target.value)} className={formText} placeholder="" />
                </label>
                <label className="block">
                    <span className="text-gray-50">Complemento</span>
                    <input type="text" value={complemento} onChange={e => setComplemento(e.target.value)} className={formText} placeholder="" />
                </label>
            </div>


            <div className="flex justify-center">
                <button onClick={salvarUsuario} className={formButton}>Salvar</button>
            </div>
            {/* <Button title='Salvar' passo={retornaPassoAtual} /> */}
        </>
    )
}
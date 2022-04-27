import { useState } from "react"

import Button from "./PocButton"
import Title from "./PocTitle"

export default function DadosBasicos(props) {

    const [cnpj, setCnpj] = useState(0)
    const [razao, setRazao] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const formText = 'mt-1 block w-full rounded-md border-transparent text-gray-700 bg-gray-100 focus:border-yellow-400 focus:bg-white focus:ring-0'

    function retornaPassoAtual(passoAtual) {
        return props.passo(passoAtual)
    }

    return (
        <>
            <Title>DADOS BÁSICOS</Title>

            <div className="grid grid-cols-1 gap-6">
                <label className="block">
                    <span className="text-gray-50">CNPJ</span>
                    <input type="text" value={cnpj} onChange={e => setCnpj(e.target.value)} className={formText} placeholder="" />
                </label>
                <label className="block">
                    <span className="text-gray-50">Razão Social</span>
                    <input type="email" value={razao} onChange={e => setRazao(e.target.value)} className={formText} placeholder="" />
                </label>
                <label className="block">
                    <span className="text-gray-50">Email</span>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className={formText} placeholder="john@example.com" />
                </label>
                <label className="block">
                    <span className="text-gray-50">Senha</span>
                    <input type="password" value={senha} onChange={e => setSenha(e.target.value)} className={formText} placeholder="" />
                </label>
            </div>

            <Button title='Próximo' cnpj={cnpj} razao={razao} email={email} senha={senha} passo={retornaPassoAtual} />
        </>
    )
}
import { useState } from "react"

export default function Button(props) {

    const [dados, setDados] = useState([])

    const formButton = 'mt-8 py-3 block w-1/2 rounded-md text-stone-800 bg-yellow-700 border-white focus:border-slate-700 focus:bg-slate-300 focus:ring-0'
    let passoAtual = 1
    
    props.title === 'Próximo' ? 
        passoAtual = 2
    :
        passoAtual = 3

    const retornaDados = props.salvar ?
        async function () {
            await fetch('/api/poc', {
                method: 'POST',
                body: JSON.stringify({...props.salvar})
            })

            const resp = await fetch('/api/poc')
            const retorno = await resp.json()
            setDados(retorno)
            console.log(retorno)
        }
    :
        () => props.passo(passoAtual)

    return (
        <div className="flex justify-center">
            <button onClick={() => props.passo(passoAtual)} className={formButton}>{props.title}</button>
        </div>
    )
}
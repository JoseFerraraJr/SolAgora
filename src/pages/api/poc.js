const dadosUsuario = []

export default function form(req, res) {
    if(req.method === 'POST') {
        post(req, res)
    } else if(req.method === 'GET'){
        get(req, res)
    } else {
        res.status(405).send()
    }

    res.status(200).json({
        dados: req.body
    })
}

function post(req, res) {
    const usuario = JSON.parse(req.body)
    dadosUsuario.push(usuario)
    res.status(200).send()
}

function get(req, res) {
    res.status(200).json(dadosUsuario)
}
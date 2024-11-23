const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `
        Aproximadamente <span>${pessoasConectadas}</span> bilhões de pessoas estão conectadas à internet em todo o mundo. 
        Representando <span>${porcentagemConectada}</span>% da população mundial de cerca de <span>${pessoasNoMundo}</span> bilhões. 
        Além disso, as pessoas gastam em média <span>${horas}</span> horas e <span>${minutos}</span> minutos por dia online.
    `
    document.getElementById('graficos-container').appendChild(paragrafo)
}

vizualizarInformacoesGlobais()

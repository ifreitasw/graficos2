import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/quantidade-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            x: redes,
            y: valores,
            type: 'bar',
            marker: {
                color: getCSS('--secondary-color')
            },
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Quantidade de Usuários nas Redes Sociais',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis: {
            title: {
                text: 'Redes Sociais',
                font: tickConfig
            },
            tickangle: -45
        },
        yaxis: {
            title: {
                text: 'Usuários (em bilhões)',
                font: tickConfig
            }
        }
    }

    criarGrafico(data, layout)

    incluirTexto(`
        O gráfico mostra a quantidade de usuários nas principais redes sociais do mundo. 
        O <span>Facebook</span> continua sendo a plataforma líder com o maior número de usuários, 
        enquanto o <span>Instagram</span> destaca-se como a segunda rede social mais popular.
    `);
}

quantidadeUsuarios()

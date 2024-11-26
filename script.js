const story = {
    start: {
        text: "Você está na entrada da floresta. Há dois caminhos à sua frente:",
        choices: {
            path_light: "Um caminho bem iluminado, com pássaros cantando.",
            path_dark: "Um caminho escuro e silencioso, cheio de árvores retorcidas."
        }
    },
    path_light: {
        text: "Você segue pelo caminho iluminado e encontra uma cabana. Lá dentro, um velho eremita oferece duas opções:",
        choices: {
            potion: "Aceitar sua ajuda e pegar uma poção mágica.",
            alone: "Agradecer, mas seguir viagem sozinho(a)."
        }
    },
    path_dark: {
        text: "O caminho escuro leva a um rio perigoso. Há duas formas de atravessá-lo:",
        choices: {
            raft: "Construir uma jangada com os recursos disponíveis.",
            swim: "Tentar atravessar a nado."
        }
    },
    potion: {
        text: "Com a poção mágica, você sente que terá mais chances de sobreviver. Você segue em frente até encontrar o artefato.",
        choices: {
            good: "Usar o artefato para o bem.",
            selfish: "Usar o artefato para desejos pessoais."
        }
    },
    alone: {
        text: "Você segue sozinho e enfrenta dificuldades, mas consegue chegar ao artefato.",
        choices: {
            good: "Usar o artefato para o bem.",
            selfish: "Usar o artefato para desejos pessoais."
        }
    },
    raft: {
        text: "A jangada o leva com segurança ao outro lado. Você encontra o artefato.",
        choices: {
            good: "Usar o artefato para o bem.",
            selfish: "Usar o artefato para desejos pessoais."
        }
    },
    swim: {
        text: "Você tenta nadar, mas é atacado por criaturas aquáticas. Fim de jogo.",
        choices: {}
    },
    good: {
        text: "Você usa o artefato para o bem e é reconhecido como um herói. Fim de jogo.",
        choices: {}
    },
    selfish: {
        text: "Você usa o artefato para desejos pessoais e se torna seu guardião, preso na floresta para sempre. Fim de jogo.",
        choices: {}
    }
};

function choose(option) {
    const storyText = document.getElementById('story-text');
    const choicesDiv = document.getElementById('choices');

    const current = story[option];
    storyText.textContent = current.text;

    choicesDiv.innerHTML = ''; // Limpa as escolhas anteriores
    for (let choice in current.choices) {
        const button = document.createElement('button');
        button.textContent = current.choices[choice];
        button.onclick = () => choose(choice);
        choicesDiv.appendChild(button);
    }

    if (Object.keys(current.choices).length === 0) {
        const restartButton = document.createElement('button');
        restartButton.textContent = "Reiniciar";
        restartButton.onclick = () => choose('start');
        choicesDiv.appendChild(restartButton);
    }
}

// Inicializa a história
choose('start');

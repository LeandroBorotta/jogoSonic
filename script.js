// Dados iniciais
const sonic = document.querySelector('.sonic')
const eggMan = document.querySelector('.eggman')
const fundo = document.querySelector('.fundo')
const botao = document.querySelector('.start button')
const inicio = document.querySelector('.start')
const jogo = document.querySelector('.gameplay')
const reset = document.querySelector('.gameplay button')
const score = document.querySelector('.score span')
let pontos = 0;
let pontuacao = 0;
const scoreAtual = document.querySelector('.start span')
const loop = setInterval(eggman, 10)
let recordeAtual = localStorage.getItem('recorde')



//eventos
document.addEventListener('keyup', pulo)

botao.addEventListener('click', iniciar)
reset.addEventListener('click', reiniciar)

// Funções


function pulo(e){
    if(e.keyCode === 32){
    sonic.classList.add('pulo')
    sonic.src = './imagens/pulo.gif'
    
    setTimeout(()=>{
        sonic.classList.remove('pulo')
        sonic.src = './imagens/sonic.gif'
        pontos++
        score.innerHTML = `${pontos} Pontos`
    }, 1000)
    

    }
}

function eggman(){
    const eggmanPosition = eggMan.offsetLeft
    const sonicPosition = parseFloat (window.getComputedStyle(sonic).bottom.replace('px', ''))
    
    if(eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 220){
        eggMan.style.animation = 'none'
        eggMan.style.left = `${eggmanPosition}px`


        
        sonic.style.animation = 'none'
        sonic.src = './imagens/perdeu.gif'
        sonic.style.width = '240px'
        
        reset.style.display = 'block'
        fundo.src = './imagens/gameOver.png'
       pontuacao = pontos
       
       
       if(pontuacao > recordeAtual ){
        localStorage.setItem('recorde', pontuacao)
        
       }
       
    }
    scoreAtual.innerHTML = `O seu recorde Atual é ${localStorage.getItem('recorde')} pontos`
}


function iniciar(){
    inicio.style.display = 'none'
    jogo.style.display = 'block'
}

function reiniciar(){
    window.location.reload(true)
    
}

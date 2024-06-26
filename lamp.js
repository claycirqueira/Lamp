//variáveis de acesso id
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const turnBroken = document.getElementById('turnBroken');
const turnUpdating = document.getElementById('turnUpdating');

//procura pela string 'quebrada no atributo src'
function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

//se não estiver quebrada poderá ligar
function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
}

//vou desligar apenas lâmpadas que não estiverem quebradas
function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }
}

//função que troca imagem por lâmpada quebrada
function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}

function reload() {
    window.location.reload();
}

//eventos de clique e mouseover
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
turnBroken.addEventListener('click', lampBroken);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
turnUpdating.addEventListener('click',reload);
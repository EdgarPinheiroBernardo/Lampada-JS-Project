const turnOn = document.getElementById ('turnOn')
const turnOff = document.getElementById ('turnOff')
const lamp = document.getElementById ('lamp')

isLampCrashed = () => lamp.src.indexOf ('quebrada') > -1

lampOn = ()=>{
    if(!isLampCrashed () ) {
        lamp.src = './img/ligada.jpg'
    }  
}

lampOff = ()=>{
    if(!isLampCrashed () ) {
    lamp.src = './img/desligada.jpg'
    }
}

lampCrashed = () =>  lamp.src = './img/quebrada.jpg'

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick',lampCrashed)
const form = document.getElementById("form")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let data = {
        nome,
        email
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let enviado = `<p style=" color: #9F09F0;">${nome} seu e-mail foi cadastrado!!</p>`;
    let campoFormulario = document.getElementById("div-input-button")

    campoFormulario.innerHTML = enviado;
})

const updateContdown = () => {

    const currentTime = new Date()
    const nextDay = currentTime.getDate() + 1 
    const newDay = new Date(`${currentTime.getMonth()+1} ${nextDay} ${currentTime.getFullYear()} 00:00:00`)
    const difference = newDay - currentTime
    const days = Math.floor(difference / 1000 / 60 /60 / 24) 
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24 
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    const tempoHora = document.getElementById("hour");
    tempoHora.innerHTML = hours;

    const tempoMinutos = document.getElementById("minutes");
    tempoMinutos.innerHTML = minutes;

    const tempoSegundos = document.getElementById("seconds");
    tempoSegundos.innerHTML = seconds;

}

setInterval(updateContdown, 1000)
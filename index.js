const toggle = document.getElementById('toggle');
toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    /* Não entendi porra nenhuma, vou estudar
    esse "classlist" (toggle tbm)depois*/
}
const body = document.querySelector('body');
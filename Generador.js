window.onload = function() {


    let quien = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let accion = ['ate', 'peed', 'crushed', 'broke'];
    let que = ['my homework', 'my phone', 'the car'];
    let cuando = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


    function generarExcusa() {
        const indiceQuien = Math.floor(Math.random() * quien.length);
        const indiceAccion = Math.floor(Math.random() * accion.length);
        const indiceQue = Math.floor(Math.random() * que.length);
        const indiceCuando = Math.floor(Math.random() * cuando.length);

        return `${quien[indiceQuien]} ${accion[indiceAccion]} ${que[indiceQue]} ${cuando[indiceCuando]}.`;
    }

    const elementoExcusa = document.getElementById('excusa');
    elementoExcusa.innerHTML = generarExcusa();
};

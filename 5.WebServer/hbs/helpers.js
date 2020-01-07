var hbs = require('hbs');

//helpers. Funcion que se dispara cuando el template lo requiere
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('UCaseText', (text) => {
    // Actualiza la primera letra de cada palabra a Mayúsculas
    let words = text.split(' '); // Divide el texto en un array
    words.forEach((word, i) => {
        // Recorre el array y ..
        //  El primer caracter a Mayúscula. lo que sigue en minúscula.
        words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    // Une de nuevo todo el array en uno solo separado por espacios
    return words.join(' ');
})

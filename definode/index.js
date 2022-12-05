let toto = require(`./information`);
console.log(`Je m'appelle ${toto.myName} et j'étudie à ${toto.myCampus} de Lyon`);

let cowsay = require("cowsay");
console.log(cowsay.say({
    text : `Je m'appelle ${toto.myName} de la ${toto.myCampus}`,
}));


export const vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'u', 'ú', 'y'];

export const convertToP = (phrase) => {
    let codedPhrase = '';
    let capitalizedPhrase = phrase.charAt(0).toUpperCase() + phrase.slice(1).toLowerCase();

    capitalizedPhrase.split('')
        .forEach((char) => {
            if(vowels.includes(char.toLowerCase())) {
                if(vowels.indexOf(char.toLowerCase()) % 2 != 0) codedPhrase += vowels[vowels.indexOf(char.toLowerCase()) - 1] + "p" + char;
                else codedPhrase += char.toLowerCase() + "p" + char.toLowerCase();
            }
            else codedPhrase += char;
        });
    return codedPhrase;
}


export const convertFromP = (codedPhrase) => {
    let phrase = codedPhrase.split("");
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i - 1] === "p" && vowels.includes(phrase[i])) {
            phrase.splice(i - 1, 2);
        }
    }
    return phrase.join("");
};


console.log('En lengua P:', convertToP("Oo"));
//console.log('En lengua normal:', convertFromP("Opoopo"));


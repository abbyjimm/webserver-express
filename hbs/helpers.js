const hbs = require('hbs');
//Helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('capitalized', (text) => {
    let words = text.split(' ');
    words.forEach((word, idx) => {
        words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return words.join(' ');
});
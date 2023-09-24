function wordsUpper(str) {

    let result = str.toUpperCase()
        .match(/\w+/g)
        .join(', ');

    console.log(result);
}
wordsUpper("Hi, how are you?");
//solution
function greet(language) {
  let languages = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  /* if(languages.hasOwnProperty(language)) {
        return languages[language]
    }else{
        languages["english"]
    } */
  return languages[language] || languages.english;
}

console.log(greet("english")); // 'Welcome';



let url = "employeeDetails?name=john&occupation=manager"
let encoded_url = encodeURI(url);
let decoded_uri = decodeURI(url);
console.log(encoded_url);
console.log(decoded_uri);
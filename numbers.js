const mathTrivia = async () =>{
    const response = await fetch("http://numbersapi.com/random?json");
    const data = await response.json();
    console.log(data.text)
    return data.text
}

document.querySelector('.displayFacts').innerText = mathTrivia();
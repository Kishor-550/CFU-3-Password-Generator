
/*get the number of characters*/
function charLength() {
    let upperCase = document.getElementById("uppercase").checked;
    let lowerCase = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;

    const upper_case = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    const lower_case = ["abcdefghijklmnopqrstuvwxyz"]
    const number = ["0123456789"]
    const symbol = ["!@#$%^&*()_+{}|:>?<~[];'./"]
    
    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;


    let str = ""
    for (let i = 0; i < charLength; i++) {
        if (upperCase) {
            str += upper_case[0].charAt(Math.floor(Math.random() * 10));
        }
        if (lowerCase) {
            str += lower_case[0].charAt(Math.floor(Math.random() * 10));
        }
        if (numbers) {
            str += number[0].charAt(Math.floor(Math.random() * 10));
        }
        if (symbols) {
            str += symbol[0].charAt(Math.floor(Math.random() * 10));
        }        
    }
    const finalOutput = str.slice(0, charLength)
    document.getElementById("password__result").value = finalOutput
    return charLength;
}
charLength()
document.getElementById('length').addEventListener('input', charLength)
document.getElementById('btn').addEventListener('click', charLength)



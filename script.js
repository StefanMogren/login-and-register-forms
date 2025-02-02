
function validateRegistration() {
    const registerUserInput = document.getElementById("registerUserInput");
    const registerPassInput = document.getElementById("registerPassInput");
    const registerPassAgainInput = document.getElementById("registerPassAgainInput");
    const newUser = {
        username: registerUserInput.value,
        password: registerPassInput.value
    };
    const usersFromLocalStorage = JSON.parse(localStorage.getItem("users"));


    try {
        if(registerUserInput.value < 6) {
            registerUserInput.focus();
            console.log("Username is too short");
            throw new Error("Your username must be at least 6 characters long.");
        } else if(registerPassInput !== registerPassAgainInput) {
            registerPassInput.focus();
            console.log("Your passwords doesn't match.")
            throw new Error("Your passwords doesn't match.")
        } else if(usersFromLocalStorage.includes(newUser.username)) {
            console.log("User already exist. Pick a different name.")
            throw new Error("User already exist. Pick a different name.")
        }

        if(!usersFromLocalStorage) {
            usersFromLocalStorage = [];
        } 
        
        usersFromLocalStorage.push(newUser);
        localStorage.setItem("users", JSON.stringify(usersFromLocalStorage))
        console.log("Your registration is successful!")
        return true;
    } catch (error) {
        return false;
    }
    
}

/* 
Skapa funktionerna
* validateRegistration()
* validateLogin()

validateRegistration() ska kontrollera att
* username minst 6 tecken
* username får inte redan existera
* password minst 8 tecken
* password again samma som password
* checkboxen är checkad

Om validateRegistration() går igenom;
* Skicka upp användaren till arrayen "users" 
* Lagra arrayen "users" i localStorage


validateLogin() ska
* Hämta arrayen "users" från localStorage
* Kolla ifall inloggningsnamn finns i "users"
* Kolla ifall lösenordet matchar inloggningsnamnet i "users"

Om validateLogin() går igenom;
* Dölj inloggningsformuläret
* Visa ett välkomstmeddelande på skärmen med namnet på användaren
*/
class Auth{
    constructor(){
        document.querySelector("body").style.disply = "none"
        const auth = localStorage.getItem("auth")
        this.validateAuth(auth)
    }

    validateAuth(auth){
        if (auth != 1){
            window.location.replace("/login.html")
        }
        else{
            document.querySelector("body").style.display = "block"

        }
    }

    logOut(){
        localStorage.removeItem("auth")
        localStorage.replace("token")
        localStorage.replace("user")

        window.location.replace("/login.html")

    }
}
let eyeicon = document.getElementById('eyeicon')
let password = document.getElementById('password')

eyeicon.onclick = function(){
    if(password.type == 'password'){
        password.type = 'text'
        eyeicon.src='eye open.jpeg'
    }else{
        password.type = 'password'
        eyeicon.src='eye close.jpeg'
        
    }
}


// let Y = document.getElementById("eyeicon")
// let X = document.getElementById("password")

// Y.onclick = function click(){
//     if(password.type == "password"){
//         password.type = "text"
//     }else{
//         password.type =
//     }

// }
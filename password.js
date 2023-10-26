let login = function(password){
    if(password === "test123"){
        return "You logged in successfully"
    }else{
        return "Wrong password, please try again"
    }
}
let result = login("74yrhfus")
console.log(result);
function ValidateNumber(){
    const number = document.getElementById("number").value;
    const numberError = document.getElementById("numberError");
    const numberExp =/^[6-9]\d{9}$/;
    let numberStatus = false;

    if(number === ""){
        numberError.textContent = "Number is Mandatory";
    }
    else{
        if(number.match(numberExp)){
            numberStatus = true;
            numberError.textContent ="";
        }
        else{
            numberError.textContent = "Invalid Number";
        }
    }
    if(numberStatus){
        return true;
    }
    else{
        return false;
    }
}
function ModalValidateNumber(){
    const mobile = document.getElementById("mobile").value;
    const mobileError = document.getElementById("mobileError");
    const mobileExp =/^[6-9]\d{9}$/;
    let mobileStatus = false;

    if(mobile === ""){
        mobileError.textContent = "Number is Mandatory";
    }
    else{
        if(mobile.match(mobileExp)){
            mobileStatus = true;
            mobileError.textContent ="";
        }
        else{
            mobileError.textContent = "Invalid Number";
        }
    }
    if(mobileStatus){
        return true;
    }
    else{
        return false;
    }
}
function Modal2ValidateNumber(){
    const mobile2 = document.getElementById("mobile2").value;
    const mobileError2 = document.getElementById("mobileError2");
    const mobileExp =/^[6-9]\d{9}$/;
    let mobileStatus = false;

    if(mobile2 === ""){
        mobileError2.textContent = "Number is Mandatory";
    }
    else{
        if(mobile2.match(mobileExp)){
            mobileStatus = true;
            mobileError2.textContent ="";
        }
        else{
            mobileError2.textContent = "Invalid Number";
        }
    }
    if(mobileStatus){
        return true;
    }
    else{
        return false;
    }
}
function Modal3ValidateNumber(){
    const mobile3 = document.getElementById("mobile3").value;
    const mobileError3 = document.getElementById("mobileError3");
    const mobileExp =/^[6-9]\d{9}$/;
    let mobileStatus = false;

    if(mobile3 === ""){
        mobileError3.textContent = "Number is Mandatory";
    }
    else{
        if(mobile3.match(mobileExp)){
            mobileStatus = true;
            mobileError3.textContent ="";
        }
        else{
            mobileError3.textContent = "Invalid Number";
        }
    }
    if(mobileStatus){
        return true;
    }
    else{
        return false;
    }
}
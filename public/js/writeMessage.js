const submitMessage = () => {
    const passcode = document.querySelector("#passcode").value;
    const message = document.querySelector("#message").value;
    // limitText(message)


    firebase.database().ref("/messages").push({
        password: passcode,
        message: message
    });
    console.log("Pushed!")
}



const limitText = (limitField, limitCount, limitNum, ) => {
	if (limitField.value.length > limitNum) {
		limitField.value = limitField.value.substring(0, limitNum);
	} else {
		limitCount.value = limitNum - limitField.value.length;
	}
}


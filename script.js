const storedUserInfo = localStorage.getItem("userInformation");

if (storedUserInfo) {
    const userInfo = JSON.parse(storedUserInfo);
    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
    document.getElementById("village").textContent = userInfo.village;
}else{
    storeUserInfo();
}

function storeUserInfo() {
    const firstName = prompt("Please enter your first name:");
    const lastName = prompt("Please enter your last name:");
    const country = prompt("Please enter your country:");
    const phoneNumber = prompt("Please enter your phone number:");
    const state = prompt("Please enter your state:");
    const city = prompt("Please enter your city:");
    const village = prompt("Please enter your village:");

    const userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
    };

    localStorage.setItem("userInformation", JSON.stringify(userInfo));
    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
    document.getElementById("village").textContent = userInfo.village;
}


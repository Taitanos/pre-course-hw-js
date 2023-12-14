let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

const passportWithAddress1 = JSON.parse(JSON.stringify(passportWithAddress));
passportWithAddress1.address.city = "Bobryisk";

console.log(passportWithAddress.address.city)
console.log(passportWithAddress1.address.city)
const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

// middleware
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
    const user = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: faker.database.mongodbObjectId()
    }
    return user
}

const createCompany = () => {
    const company = {
        id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street:faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode:faker.address.zipCode(),
            county: faker.address.country()
        }
    }
    return company
}

// creates new user
app.get("/api/users/new", (req,res) => {
    const newUser = createUser()
    res.json({newUser})
})

// creates new company
app.get("/api/companies/new", (req,res) => {
    const newCompany = createCompany()
    res.json({newCompany})
})

// creates new company and user
app.get("/api/users/company", (req,res) => {
    const newUser = createUser()
    const newCompany = createCompany()
    res.json({newUser, newCompany})
})



app.listen( port, () => console.log(`Listening on port: ${port}`) );
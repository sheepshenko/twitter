const User = require('./../../app/models/User')

describe("Prueba de jest ", () => {
    test("Requerimiento 1: Creación de User", () => {
        const user = new User(1, "sheepshenko", "Fernando", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("sheepshenko")
    })


})
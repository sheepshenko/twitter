const User = require('./../../app/models/User')

describe("Prueba de jest ", () => {
    test("Requerimiento 1: Creación de User", () => {
        const user = new User(1, "sheepshenko", "Fernando", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("sheepshenko")
    })

    test("Requerimiento 2: Fecha en atributos de User", () => {
        const user = new User(1, "sheepshenko", "Fernando", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })


})
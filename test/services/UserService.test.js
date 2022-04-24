const UserService = require("./../../app/services/UserService")

describe("Test for UserService", () => {
    test("1- Crear un nuevo usuario usando UserService", () => {
        const user = UserService.create(1, "sheepshenko", "Fernando")
        expect(user.username).toBe("sheepshenko")
        expect(user.name).toBe("Fernando")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})
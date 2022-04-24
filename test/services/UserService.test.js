const UserService = require("./../../app/services/UserService")

describe("Test for UserService", () => {
    test("1- Crear un nuevo usuario usando UserService", () => {
        const user = UserService.create(1, "sheepshenko", "Fernando")
        expect(user.username).toBe("sheepshenko")
        expect(user.name).toBe("Fernando")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2- Get all user data in a list", () => {
        const user = UserService.create(1, "sheepshenko", "FernandoM")
        const userInfoInList = UserService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("sheepshenko")
        expect(userInfoInList[2]).toBe("FernandoM")
        expect(userInfoInList[3]).toBe("Sin bio")
    })
})
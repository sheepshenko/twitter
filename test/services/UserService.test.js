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

    test("3- Update username", () => {
        const user = UserService.create(1, "sheepo", "Fernando")
        UserService.updateUsername(user, "sheepshenko")
        expect(user.username).toBe("sheepshenko")
    })

    test("4- Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "sheephory", "Fer")
        const user2 = UserService.create(2, "sheepo", "Fer2")
        const user3 = UserService.create(3, "sheepshenko", "Fernando")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("sheephory")
        expect(usernames).toContain("sheepo")
        expect(usernames).toContain("sheepshenko")
    })
})
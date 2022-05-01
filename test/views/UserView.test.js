const UserView = require('./../../app/views/UserView');

describe("Test for UserVies", () => {
    test ("Return an error object whe try to create a new user with an null payload", () => {
        const payload = null;
        const resutl = UserView.createUser(payload)
        //https://jestjs.io/docs/using-matches#strings
        expect(resutl.error).toMatch(/payload no exist/)
    })

    test("Return an eeror object when try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        //const payload = {username: "null", name: "fer", id: 12}  //con valores que si pasan.
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })
})
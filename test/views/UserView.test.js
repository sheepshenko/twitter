const UserView = require('./../../app/views/UserView');

describe("Test for UserVies", () => {
    test ("Return an error object whe try to create a new user with an null payload", () => {
        const payload = null;
        const resutl = UserView.createUser(payload)
        //https://jestjs.io/docs/using-matches#strings
        expect(resutl.error).toMatch(/payload no exist/)
    })
})
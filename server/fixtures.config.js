const fixtures = [
    {
        useMock: true,
        method: 'get',
        url: '/test',

        response: function (request) {
            return {
                data: {foo: 'bar'},
            };
        },
    },

    {
        useMock: true,
        method: 'get',
        url: '/test-with-delay',

        response: function (request) {
            return {
                delay: 1000,
                data: {foo: 'bar'},
            };
        },
    },

    {
        useMock: true,
        method: 'get',
        url: '/test-with-error',

        response: function (request) {
            return {
                statusCode: 500,
                data: {foo: 'bar'},
            };
        }
    },

    {
        useMock: true,
        method: 'post',
        url: '/authenticate',

        response: function (request) {
            let response;
            if (!request.body) {
                response = {
                    statusCode: 422,
                    data: {
                        reason: 'Credentials missing',
                    },
                };
            }

            if (request.body.username === 'admin' && request.body.password === 'admin') {
                response = {
                    delay: 1000,
                    data: {
                        username: 'Batman',
                        authtoken: '' + Math.floor(Math.random() * 10000) + `${(new Date()).getTime()}`.substr(-6),
                    },
                };
            } else {
                response = {
                    delay: 1000,
                    statusCode: 400,
                    data: {
                        reason: 'Invalid credentials',
                    },
                };
            }

            return response;
        },
    },
];

module.exports = fixtures;

const fixtures = [
    {
        method: 'get',
        url: '/test',
        data: function () {
            return {
                result: 'OK',
            };
        },
        useMock: true,
        useError: false,
        errorData: {},
    },

    {
        method: 'get',
        url: '/error',
        data: {},
        useMock: true,
        useError: true,
        errorCode: 500,
        errorData: {
            reason: 'unknown reason',
        },
    },

    {
        method: 'post',
        url: '/authenticate',
        data: function () {
            return {
                username: 'Batman',
                authtoken: '' + Math.floor(Math.random() * 10000) + `${(new Date()).getTime()}`.substr(-6),
            };
        },
        useMock: true,
        useError: false,
        errorData: {},
        timeout: 1000,
    },
];

module.exports = fixtures;

const fixtures = [
    {
        method: 'post',
        url: '/signin',
        data: function () {
            return {
                username: 'Batman',
                authtoken: '' + Math.floor(Math.random() * 10000) + `${(new Date()).getTime()}`.substr(-6),
            };
        },
        useMock: true,
        useError: false,
        errorData: {},
    },
];

module.exports = fixtures;

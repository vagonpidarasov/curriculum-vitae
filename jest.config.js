module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.json',
            stringifyContentPathRegex: '\\.html$',
            astTransformers: ['jest-preset-angular/InlineHtmlStripStylesTransformer'],
        },
    },
    preset: 'jest-preset-angular',
    roots: [
        '<rootDir>/src',
    ],
    setupFilesAfterEnv: [
        '<rootDir>/.jest/setup.ts',
    ],
    testMatch: [
        '<rootDir>/src/**/*.spec.ts',
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
    ],
    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>/.jest/style-mock.js',
        'src/(.*)$': '<rootDir>/src/$1',
    }
};

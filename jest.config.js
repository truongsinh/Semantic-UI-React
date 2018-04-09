module.exports = {
    moduleNameMapper: {
        'semantic-ui-react': 'src/index.js',
    },
    setupFiles: ["./test/setup"],
    moduleDirectories: ["node_modules", "./"],
    testMatch: [
        '**/test/**/*',
        '**/?(*.)(spec|test).js?(x)',
    ],
};

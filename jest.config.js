module.exports = {
    moduleNameMapper: {
        'semantic-ui-react': 'src/index.js',
    },
    setupFiles: ["./test/setup"],
    moduleDirectories: ["node_modules", "<rootDir>", ],
    testMatch: [
        '**/test/**/*',
        '**/?(*.)(spec|test).js?(x)',
    ],
};

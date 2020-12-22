module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages",
    "^@styles(.*)$": "<rootDir>/styles",
    "^@constants(.*)$": "<rootDir>/constants",
  },
};

module.exports = {
    moduleDirectories: ["node_modules", "src"],
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testEnvironment: "jsdom",
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    globals: {
        "ts-jest": {
            isolatedModules: true,
        },
    },
    testURL: "http://localhost:3000",
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{ts,tsx}"],
    coveragePathIgnorePatterns: ["/node_modules/", "/build/"],
    prettierPath: "node_modules/prettier",
};

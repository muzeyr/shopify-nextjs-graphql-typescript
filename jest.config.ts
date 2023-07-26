import nextJest from "next/jest";
// Sync object
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testEnvironment: "jest-environment-jsdom",
  modulePathIgnorePatterns: ["cypress", "<rootDir>/dist/"],
  moduleNameMapper: {
    "^@common/(.*)$": "<rootDir>/lib/common/$1",
    "^@lib/(.*)$": "<rootDir>/lib/shopify/$1",
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@assets/(.*)$": "<rootDir>/assets/$1",
    "^@shared/(.*)$": "<rootDir>/shared/$1"
  }
};

export default customJestConfig;

# String Calculator - TDD Kata

## 🚀 Overview
This project is an implementation of the **String Calculator TDD Kata** using **Node.js & TypeScript**, following **Test-Driven Development (TDD) best practices**.

## Kata Requirements
The `add` function:
- Supports an empty string, returning `0`.
- Handles a single number input.
- Supports two numbers separated by a comma (`,`) or a newline (`\n`).
- Allows an unknown amount of numbers.
- Supports custom single-character delimiters specified in the format: `//[delimiter]\n[numbers]`.
- Handles negative numbers by throwing an exception listing all negatives found.
- Ignores numbers greater than 1000.
- Supports delimiters of any length using the format: `//[***]\n1***2***3`.
- Supports multiple custom delimiters: `//[*][%]\n1*2%3`.
- Allows multiple delimiters with varying lengths: `//[***][%%%]\n1***2%%%3`.

## Tech Stack
- **Node.js**
- **TypeScript**
- **Jest** (for testing)

## Installation & Setup
Ensure you have [Node.js](https://nodejs.org/) installed.

1. Clone the repository:
   ```sh
   git clone https://github.com/AjmalAsharaf/string-calculator-tdd
   cd string-calculator-tdd
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run tests:
   ```sh
   npm test
   ```

## Usage
You can test the function manually in a script:

```ts
import { add } from "./src/stringCalculator";

test("Support multiple delimiters of any length", () => {
  expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
});
```

## Project Structure
```
/string-calculator-tdd
│── src/
│   ├── stringCalculator.ts   # Implementation of the String Calculator
│── tests/
│   ├── stringCalculator.test.ts   # Unit tests using Jest
│── package.json
│── tsconfig.json
│── README.md
```

## Running Tests
To run all test cases:
```sh
npm test
```

If all tests pass, you should see:
```
PASS  tests/stringCalculator.test.ts
Tests:       11 passed, 11 total
```

## GitHub Repository
[https://github.com/AjmalAsharaf/string-calculator-tdd](https://github.com/AjmalAsharaf/string-calculator-tdd)

---

## Additional Notes
- The project follows **TDD principles** with **incremental development**.
- Code is written in **TypeScript** for type safety and maintainability.
- **Jest** is used as the test runner to ensure correctness.
- **Custom delimiters and error handling** are fully supported.

---


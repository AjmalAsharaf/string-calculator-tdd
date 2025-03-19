import { add } from "../src/stringCalculator";

test("Empty string should return 0", () => {
  expect(add("")).toBe(0);
});

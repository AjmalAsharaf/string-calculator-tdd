import { add } from "../src/stringCalculator";

test("Empty string should return 0", () => {
  expect(add("")).toBe(0);
});

test("Single number returns itself", () => {
  expect(add("1")).toBe(1);
});

test("Two numbers should return their sum", () => {
  expect(add("1,2")).toBe(3);
});

test("Multiple numbers should return their sum", () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("Handle new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("Support custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("Throw error for negative numbers", () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2, -4");
});

test("Ignore numbers greater than 1000", () => {
  expect(add("2,1001")).toBe(2);
});

test("Support delimiters of any length", () => {
  expect(add("//[***%]\n1***%2***%3")).toBe(6);
});

test("Support multiple delimiters", () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
});

test("Support multiple delimiters of any length", () => {
  expect(add("//[***][%%%][##]\n1***2%%%3##4")).toBe(10);
});

test("Multiply the number on asteric", () => {
  expect(add("//*\n1*2")).toBe(2);
});

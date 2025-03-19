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

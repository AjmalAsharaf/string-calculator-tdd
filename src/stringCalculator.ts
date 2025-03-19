export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2)); // Extract custom delimiter
    numbers = parts[1];
  }

  const numList = numbers.split(delimiter).map(Number);
  const negatives = numList.filter((num) => num < 0);

  if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }

  return numList.reduce((sum, num) => sum + num, 0);
}

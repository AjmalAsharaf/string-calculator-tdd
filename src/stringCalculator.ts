export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2)); // Extract custom delimiter
    numbers = parts[1];
  }

  return numbers
    .split(delimiter)
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
}

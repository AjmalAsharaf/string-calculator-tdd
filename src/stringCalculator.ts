export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n"); // Separate delimiter from numbers
    const delimiterMatch = parts[0].match(/\[(.*?)\]/);

    if (delimiterMatch) {
      // Extract the delimiter inside brackets
      delimiter = new RegExp(
        delimiterMatch[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
    } else {
      delimiter = new RegExp(parts[0].slice(2)); // Single-character custom delimiter
    }

    numbers = parts[1]; // Update numbers to exclude delimiter definition
  }

  const numList = numbers.split(delimiter).map(Number);
  const negatives = numList.filter((num) => num < 0);

  if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }

  return numList
    .filter((num) => num <= 1000)
    .reduce((sum, num) => sum + num, 0);
}

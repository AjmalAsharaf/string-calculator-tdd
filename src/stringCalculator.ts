export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiterRegex = /,|\n/; // Default delimiters: comma & newline

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n"); // Split custom delimiter and numbers
    const delimiterSection = parts[0].slice(2); // Remove "//" prefix

    // Handle multiple delimiters of any length
    const delimiters = [...delimiterSection.matchAll(/\[(.*?)\]/g)].map(
      (m) => m[1]
    );

    if (delimiters.length > 0) {
      const escapedDelimiters = delimiters.map((d) =>
        d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      delimiterRegex = new RegExp(escapedDelimiters.join("|")); // Create regex for multiple delimiters
    } else {
      delimiterRegex = new RegExp(
        delimiterSection.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
    }

    numbers = parts[1]; // Update numbers string
  }

  const numList = numbers.split(delimiterRegex).map(Number);
  const negatives = numList.filter((num) => num < 0);

  if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }

  return numList
    .filter((num) => num <= 1000)
    .reduce((sum, num) => sum + num, 0);
}

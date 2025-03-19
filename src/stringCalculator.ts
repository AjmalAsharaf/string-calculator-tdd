export function add(numbers: string): number {
  if (!numbers) return 0;
  return numbers
    .split(",")
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
}

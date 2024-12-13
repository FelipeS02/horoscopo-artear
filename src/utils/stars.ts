export function generateStars(
  numberOfStars: number,
  containerWidth: number,
  containerHeight: number
): string {
  if (!numberOfStars || !containerWidth || !containerHeight)
    throw TypeError('Container and stars count values must be defined');

  const starPositions = [];

  for (let i = 0; i < numberOfStars; i++) {
    const x = Math.floor(Math.random() * containerWidth) + 1; // Random x position within width
    const y = Math.floor(Math.random() * containerHeight) + 1; // Random y position within height
    starPositions.push(`${x}px ${y}px hsl(var(--brand-500))`);
  }

  return starPositions.join(', ');
}

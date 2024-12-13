export function addVariableToElement(
  element: HTMLElement | null,
  name: string,
  value: string
): void {
  if (!element) throw new Error('Element is not defined');

  element.style.setProperty(name, value);
}

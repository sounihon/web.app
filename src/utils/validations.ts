export function validateNotEmptyString(value: string): boolean {
  return !!value && value.length > 0;
}

type ClassValue = string | number | boolean | undefined | null | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const flat: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (Array.isArray(input)) {
      flat.push(cn(...input));
    } else if (typeof input === "string") {
      flat.push(input);
    }
  }
  return flat.filter(Boolean).join(" ");
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(value);
}

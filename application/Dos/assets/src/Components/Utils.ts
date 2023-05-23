export function sleep(milliseconds: number): Promise<void> {
  return new Promise(
    resolve => setTimeout(resolve, milliseconds)
  );
}

export function formatDate(date: Date, locale = 'en-us'): string {
  return date.toLocaleDateString(locale);
}

export function formatTime(date: Date, locale = 'en-us'): string {
  return date.toLocaleTimeString(locale);
}

export function getDayName(date: Date, locale = 'en-us', type: 'short' | 'long' = 'short'): string {
  return date.toLocaleString(locale, {weekday: type});
}

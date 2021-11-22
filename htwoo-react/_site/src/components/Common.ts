export function getRandomString(chars: number): string {
  const text = new Array(chars);
  for (let i = 0; i < chars; i++) {
    text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
  }
  return text.join("");
}
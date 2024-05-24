/**
 * Generates a random string of the specified length
*/
export function getRandomString(chars: number): string {
  const LOG_SOURCE: string = "💦Common";
  try {
    const text = new Array(chars);
    for (let i = 0; i < chars; i++) {
      text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
    }
    return text.join("");
  } catch (err) {
    console.error(`${LOG_SOURCE} (getRandomString) - ${err}`);
  }
}

/**
 * A function that tests javascript object for equality doing a deep comparison
*/
export function isEqual(a: any, b: any, c: number = 0): boolean {
  const LOG_SOURCE: string = "💦Common";
  try {
    if (typeof a == "function" || typeof b == "function" || c > 3) {
      return true;
    }

    if (a === b) {
      return true;
    }

    if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) {
      return false;
    }

    let keys1 = Object.keys(a);
    let keys2 = Object.keys(b);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (!keys2.includes(key) || !isEqual(a[key], b[key], c++)) {
        return false;
      }
    }
    return true;
  } catch (err) {
    console.error(`${LOG_SOURCE} (isEqual) - ${err}`);
  }
}

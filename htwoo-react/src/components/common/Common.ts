export function getRandomString(chars: number): string {
  const text = new Array(chars);
  for (let i = 0; i < chars; i++) {
    text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
  }
  return text.join("");
}

// function isObjectEqual(a: Object, b: Object): boolean {
//   let retVal: boolean = true;
//   const properties = Object.getOwnPropertyNames(a);
//   for (let i = 0; i < properties.length; i++) {
//     //going to assume simple equality check, possibly will need to expand later
//     if (a[properties[i]] !== b[properties[i]]) {
//       retVal = false;
//       break;
//     }
//   }
//   return retVal;
// }

// export function isEqual(a: any, b: any): boolean {
//   let retVal = false;
//   if (typeof a === typeof b && typeof a !== "function" && typeof a !== "undefined") {
//     if (Array.isArray(a)) {
//       if ((a.length === b.length) && a.length == 0) {
//         retVal = true;
//       } else if (a.length === b.length) {
//         if (typeof a[0] === "object") {
//           //Same properties, continue to check
//           if (Object.getOwnPropertyNames(a) === Object.getOwnPropertyNames(b)) {
//             // Check each object in the array for equality
//             let match = true;
//             for (let i = 0; i < a.length; i++) {
//               if (!isObjectEqual(a[i], b[i])) {
//                 match = false;
//                 break;
//               }
//             }
//             retVal = match;
//           }
//         } else {
//           let match = true;
//           for (let i = 0; i < a.length; i++) {
//             if (a[i] !== b[i]) {
//               match = false;
//               break;
//             }
//           }
//           retVal = match;
//         }
//       }
//     } else if (typeof a === "object") {

//     } else {
//       retVal = (a == b);
//     }
//   }
//   return retVal;
// }
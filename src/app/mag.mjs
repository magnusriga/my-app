import path from "path";
import { fileURLToPath } from "url";
import { resolve as tsResolve } from 'eslint-import-resolver-typescript';
// import resolve from "enhanced-resolve";

const __filename = fileURLToPath(import.meta.url);
console.log('__filename :>> ', __filename);

const dir = path.dirname(`${__filename}`);
console.log('dir :>> ', dir);

const __dirname = path.dirname(__filename);
console.log('__dirname :>> ', __dirname);

// console.log('hello :>> ', resolve);
// console.log('__filename :>> ', __filename);
// console.log('path.dirname(path.resolve(__dirname)) :>> ', path.dirname(path.resolve(__filename)));

const obj = tsResolve('my-app/baz', __filename, {});
// const obj = tsResolve('eslint-import-resolver-typescript', __filename, {});
console.log('obj :>> ', obj);

// const foundPath = myResolver.resolveSync({}, path.dirname(path.resolve(file)), mappedPath ?? source) || null;
//         console.log('foundPath :>> ', foundPath);

// resolve(__dirname, "eslint-import-resolver-typescript", (err, result) => {
//   const res = result; // === "/some/path/node_modules/module/dir/index.js"
//   console.log('res :>> ', res);
// });

// const enhancedResolveSync = resolve.sync(__dirname, "eslint-import-resolver-typescript");

// console.log('enhancedResolveSync :>> ', enhancedResolveSync);

/* eslint-disable */
const resolve = require("enhanced-resolve");

const myResolve = resolve.create({
	// or resolve.create.sync
  conditionNames: [
    'types',   'import',
    'esm2020', 'es2020',
    'es2015',  'require',
    'node',    'node-addons',
    'browser', 'default'
  ],
  extensions: [
    '.ts',   '.tsx',
    '.d.ts', '.js',
    '.jsx',  '.json',
    '.node'
  ],
  extensionAlias: {
    '.js': [ '.ts', '.tsx', '.d.ts', '.js' ],
    '.jsx': [ '.tsx', '.d.ts', '.jsx' ],
    '.cjs': [ '.cts', '.d.cts', '.cjs' ],
    '.mjs': [ '.mts', '.d.mts', '.mjs' ]
  },
	// see more options below
});

myResolve(__dirname, "my-app/baz", (err, result) => {
	const res = result;
  console.log('res :>> ', res);
});

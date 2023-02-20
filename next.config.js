/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig

// import { readFileSync } from 'fs';
// import module from 'module';
//
// module.Module._extensions['.js'] = function (module, filename) {
//     module._compile(readFileSync(filename, 'utf8'), filename);
// };
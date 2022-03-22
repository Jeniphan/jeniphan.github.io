/** @type {import('next').NextConfig} */
// const nextConfig = {
//     compiler: {
//         // ssr and displayName are configured by default
//         styledComponents: true,
//     },
//     reactStrictMode: true,
// }

// module.exports = nextConfig

const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
    // Or better still you can specify a path to a file 
    lessVarsFilePath: './styles/variables.less',
    // optional
    lessVarsFilePathAppendToEndOfContent: false,
    // optional https://github.com/webpack-contrib/css-loader#object
    cssLoaderOptions: {},

    // Other Config Here...

    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
    reactStrictMode: true,

    webpack(config) {
        return config;
    }
});
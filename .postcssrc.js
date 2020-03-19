// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    plugins: [
        require('autoprefixer'),                // 自动添加前缀
        require('postcss-opacity'),             // 透明度兼容
        require('postcss-px-to-viewport')({
            viewportWidth: 750,                 // 视窗的宽度，对应的设计稿的宽度，移动端一般是750，如果是pc端那就是类似1920这样的尺寸
            viewportHeight: 1334,               // 视窗的高度，移动端一般指定1334，也可以不配置
            unitPrecision: 3,                   // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            viewportUnit: 'vw',                 // 指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: ['.ignore', '.hairlines'],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
            minPixelValue: 1,                   // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            mediaQuery: false                   // 允许在媒体查询中转换`px`
        }),
        require('cssnano')({
            reduceIdents: false,                  // 防止keyframes被压缩 https://github.com/ben-eb/cssnano/issues/247
            autoprefixer: false,                  // 防止与上面autoprefixer冲突
            zindex: false,                        // 取消重置zindex
            discardUnused: false,
            mergeIdents: false
        })
    ]
};

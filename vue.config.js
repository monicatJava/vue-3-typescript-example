module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/proxy': { // '/proxy' url前面是/proxy的就是使用代理
                target: "http://localhost:8081", //後端目標Host
                changeOrigin: true, //是否跨域
                pathRewrite: { // pathRewrite 的作用是把連線至代理的url轉回原本的target-host/uri
                    '^/proxy': ""//將/proxy取代為""
                }
            }
        }
    }
}

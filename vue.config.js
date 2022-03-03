module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/proxy': { // '/proxy' url�e���O/proxy���N�O�ϥΥN�z
                target: "http://localhost:8081", //��ݥؼ�Host
                changeOrigin: true, //�O�_���
                pathRewrite: { // pathRewrite ���@�άO��s�u�ܥN�z��url��^�쥻��target-host/uri
                    '^/proxy': ""//�N/proxy���N��""
                }
            }
        }
    }
}

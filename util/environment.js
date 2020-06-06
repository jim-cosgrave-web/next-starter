const env = {
    siteUrl: process.env.NODE_ENV !== 'development' ? 'https://next-starter-one.now.sh/' : 'http://localhost:8083/',
    apiUrl: process.env.NODE_ENV !== 'development' ? 'https://next-starter-one.now.sh/api/' : 'http://localhost:8083/api/'
};


export { env };
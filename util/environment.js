const env = {
    siteUrl: process.env.NODE_ENV !== 'development' ? 'https://grocery-api.now.sh/' : 'http://localhost:3000/',
    apiUrl: process.env.NODE_ENV !== 'development' ? 'https://grocery-api.now.sh/api/' : 'http://localhost:3000/api/'
};


export { env };
require('dotenv/config')
export = {
    port : process.env.PORT || 5000,
    PIXABAY_API_KEY: process.env.PIXABAY_API_KEY,
    GIPHY_API_KEY : process.env.GIPHY_API_KEY
}
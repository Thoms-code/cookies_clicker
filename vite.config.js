const path = require('path')
@vite(['resources/css/app.css', 'resources/js/app.js'])

export default {
    root: path.resolve(__dirname, 'src'),
    server: {
        port: 8080,
        hot: true
    }
}
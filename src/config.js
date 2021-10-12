require('dotenv').config()

console.log("process.env", process.env)

const API_HOST = process.env.REACT_APP_API_HOST

export {
    API_HOST
}
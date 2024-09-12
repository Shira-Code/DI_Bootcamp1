const axios = require('axios')

const getInfo = async () => {
    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(data.data)
    } catch (error) {
        console.error(error)
    }
}
getInfo()
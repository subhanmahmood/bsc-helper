const { default: axios } = require("axios")

module.exports = {
    name: 'bnb',
    description: 'get bnb latest price',
    async execute(message, args) {
        const API_KEY = 'FG3BXXCRQ21UFG7ZMC58APSEAPRVBCV4SZ'

        const url = `https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=${API_KEY}`

        const response = await axios(url)
        const data = response.data
        if(data.status === '1') {
            message.channel.send(`Current BNB price = $${data.result.ethusd}`)
        } else {
            message.channel.send("❌ API Error")
        }
    }
}
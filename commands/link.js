module.exports = {
    name: 'link',
    description: 'get address information (!link <address> <token-name>)',
    execute(message, args) {
        const address = args[0]
        const regex = new RegExp(/^0x[a-fA-F0-9]{40}$/)
        if (address.search(/^0x[a-fA-F0-9]{40}$/) !== -1) {
            message.channel.send('✅ **valid address**')
            const API_KEY = 'FG3BXXCRQ21UFG7ZMC58APSEAPRVBCV4SZ'

            const psV1URL = `https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=${address}`
            const psV2URL = `https://exchange.pancakeswap.finance/#/swap?outputCurrency=${address}`
            const bscScanURL = `https://bscscan.com/token/${address}`
            const poocoinURL = `https://poocoin.app/tokens/${address}`
            message.channel.send({
                embed: {
                    "title": `**${args[1]}**`,
                    "description": "Useful links for BSC addresses",
                    "url": poocoinURL,
                    "footer": {
                        "text": "BSCHelper"
                    },
                    "fields": [
                        {
                            "name": "Poocoin URL",
                            "value": `[Link](${poocoinURL})`,
                            "inline": true
                        },
                        {
                            "name": "PS v1 URL",
                            "value": `[Link](${psV1URL})`,
                            "inline": true
                        },
                        {
                            "name": "PS v2 URL",
                            "value": `[Link](${psV2URL})`,
                            "inline": true
                        },
                        {
                            "name": "bscscan URL",
                            "value": `[Link](${bscScanURL})`,
                            "inline": true
                        }
                    ]
                }
            })
        } else {
            message.channel.send('❌ **invalid address**')
        }
    }
}
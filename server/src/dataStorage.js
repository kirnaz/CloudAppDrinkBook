const fs = require("fs/promises")
module.exports = {
    load : async () => {
        const data = await fs.readFile(`${__dirname}/../data/data_storage.json`)
        const json = JSON.parse(data)
        return json
    },
    save: async (data) => {
        const json = JSON.stringify(data,null, 2)
        await fs.writeFile(`${__dirname}/../data/data_storage.json`, json)
    }


}
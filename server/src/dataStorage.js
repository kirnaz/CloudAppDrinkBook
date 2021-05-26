const fs = require("fs/promises")
module.exports = {
    load : async () => {
        const data = await fs.readFile(`${__dirname}/../data/data_storage.json`)
        const json = JSON.parse(data)
        return json

    }


}
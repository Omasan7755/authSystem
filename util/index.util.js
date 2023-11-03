const bcrypt = require("bcrypt")
const functionDispatcher = {
    passwordEncryption: async(pwd)=>{
        return await bcrypt.hashSync(pwd,10)
    },
    passwordComparism: async(a,b)=> {
        return await bcrypt.compare(a,b)
    }
}
module.exports = functionDispatcher
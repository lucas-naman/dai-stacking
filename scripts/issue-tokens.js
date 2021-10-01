const TokenFarm = artifacts.require('TokenFarm')
const DaiToken = artifacts.require('DaiToken')
const DappToken = artifacts.require('DappToken')

module.exports = async function(callback) {

    console.log("Token issuing")

    let tokenFarm = await TokenFarm.deployed()

    await tokenFarm.issueTokens()

    console.log("Token issued !")
    callback()
};
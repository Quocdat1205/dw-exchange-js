const { Web3 } = require("web3");

exports.getBalance = async (req, res) => {
  console.log(req.query?.publicAddress);
  try {
    const web3provider = new Web3(
      new Web3.providers.HttpProvider(
        "https://mainnet.infura.io/v3/a1361e1c0fda468bab200985724259bd"
      )
    );

    var ETHBalace = await web3provider.eth.getBalance(req.query?.publicAddress);
    console.log(parseFloat(ETHBalace));
    return res.send(`${parseFloat(ETHBalace)}`);
  } catch (error) {
    console.log(error);
  }

  res.send("success");
};

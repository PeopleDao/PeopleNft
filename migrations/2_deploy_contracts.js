const PeopleNft = artifacts.require("PeopleNft");

module.exports = function(deployer) {
  deployer.deploy(PeopleNft,"PeopleNft", "PeopleNft");
};

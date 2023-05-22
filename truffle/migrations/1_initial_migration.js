const TaskCountract = artifacts.require("TaskCountract");

module.exports = function (deployer) {
  deployer.deploy(TaskCountract);
};

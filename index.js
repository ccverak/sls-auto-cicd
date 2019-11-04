const DeployCFStack = require('./lib/DeployCFStack')
const Cli = require('./lib/Cli')

function setup () {
  const executeCli = function () {
    return Cli.execute()
  }

  const executeCFDeploy = function (params) {
    return DeployCFStack.execute(params)
  }

  return executeCli().then(executeCFDeploy)
}

const AWSCodePipelineGithub = {
  createOrUpdateCFStack: DeployCFStack.execute,
  setup
}

module.exports = AWSCodePipelineGithub

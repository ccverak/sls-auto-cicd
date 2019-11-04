const prompts = require('prompts')
const Promise = require('bluebird')

const CLI_WORKFLOW_STEPS = [
  {
    type: 'text',
    name: 'githubOwner',
    message: 'Enter your username'
  },
  {
    type: 'password',
    name: 'githubOAuthToken',
    message: 'Enter your user OAuth token'
  },
  {
    type: 'text',
    name: 'repositoryName',
    message: 'Enter your github repository name'
  },
  {
    type: 'text',
    name: 'branchName',
    initial: 'master',
    message: 'Enter the branch [master]'
  },
  {
    type: 'text',
    name: 'applicationStackName',
    message:
      'Enter the deployment pipeline name (Leave empty to use the repository name with -Stack at the end)'
  },
  {
    type: 'text',
    name: 'applicationStackDeploymentGroupName',
    message:
      'Enter the deployment pipeline deployment group name (Leave empty to use the repository name with -Group at the end)'
  }
]
function execute () {
  return Promise.mapSeries(CLI_WORKFLOW_STEPS, prompts).then(function (
    responses
  ) {
    return {
      githubOwner: responses[0].githubOwner,
      githubOAuthToken: responses[1].githubOAuthToken,
      repositoryName: responses[2].repositoryName,
      branchName: responses[3].branchName,
      applicationStackName: responses[4].applicationStackName,
      applicationStackDeploymentGroupName: responses[5].applicationStackDeploymentGroupName
    }
  })
}

const Cli = {
  execute
}

module.exports = Cli

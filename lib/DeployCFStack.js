const cfn = require('cfn')
const AWS = require('aws-sdk')

function createOrUpdateCFStack ({
  branchName,
  repositoryName,
  githubOwner,
  githubOAuthToken,
  applicationStackName,
  applicationStackDeploymentGroupName
}) {
  const params = {
    name: applicationStackName || repositoryName,
    template: './lib/codepipeline-github-events-yaml.yaml',
    cfParams: {
      GitHubBranch: branchName,
      GitHubRepository: repositoryName,
      GithubOwner: githubOwner,
      GitHubOAuthToken: githubOAuthToken,
      ApplicationStackName: applicationStackName || `${repositoryName}-Stack`,
      ApplicationStackDeploymentGroupName:
        applicationStackDeploymentGroupName || `${repositoryName}-Group`
    },
    awsConfig: new AWS.Config({
      credentials: new AWS.EnvironmentCredentials('AWS'),
      region: process.env.ES_REGION || process.env.AWS_REGION
    })
  }

  return cfn(params)
}

const DeployCFStack = {
  execute: createOrUpdateCFStack
}

module.exports = DeployCFStack

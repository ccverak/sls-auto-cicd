const cfn = require('cfn')

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
    awsConfig: {
      region: 'us-east-1',
      accessKeyId: '123',
      secretAccessKey: '1234'
    }
  }

  return cfn(params)
}

const DeployCFStack = {
  execute: createOrUpdateCFStack
}

module.exports = DeployCFStack

const AWSCodePipelineGithub = require('../index')

const ERROR_MESSAGE = 'Something went wrong. Have the latest version?'
const SUCCESS_MESSAGE = 'Done.'

AWSCodePipelineGithub.setup()
  .then(function (result) {
    console.log(SUCCESS_MESSAGE)
  })
  .catch(function (_error) {
    console.error(_error)
    console.error(ERROR_MESSAGE)
  })

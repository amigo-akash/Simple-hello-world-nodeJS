pipeline {
    agent any
  environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    }
    stages {
    stage ('Publish to ECR') {
      steps {
           sh 'docker build -t test-nodejs-image .'
          sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
          sh 'docker tag test-nodejs-image akashacharya/test-nodejs-image' 
          sh 'docker push akashacharya/test-nodejs-image'
         }
       }
    }
  }


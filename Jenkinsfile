pipeline {
    agent any
  environment {
      // SEMGREP_BASELINE_REF = ""

        SEMGREP_APP_TOKEN = credentials('SEMGREP_APP_TOKEN')
        SEMGREP_PR_ID = "${env.CHANGE_ID}"
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')

      //  SEMGREP_TIMEOUT = "300"
    }
    stages {
      stage('Semgrep-Scan') {
          steps {
            sh 'python3 --version'
            sh 'pip3 install semgrep'
              sh '/var/lib/jenkins/.local/bin/semgrep --version'
            sh '/var/lib/jenkins/.local/bin/semgrep ci'
          }
      }

    stage ('Publish to ECR') {
      steps {
          sh 'sudo docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
          sh 'sudo docker build -t test-nodejs-image .'
          sh 'sudo docker tag test-nodejs-image akashacharya/test-nodejs-image' 
          sh 'sudo docker push akashacharya/test-nodejs-image'
         }
       }
    }
  }


pipeline {
    agent any
  environment {
      // SEMGREP_BASELINE_REF = ""

        SEMGREP_APP_TOKEN = credentials('SEMGREP_APP_TOKEN')
        SEMGREP_PR_ID = "${env.CHANGE_ID}"

      //  SEMGREP_TIMEOUT = "300"
    }
    stages {
      stage('Semgrep-Scan') {
          steps {
            sh 'sudo apt install python3.8'
            sh 'python --version'
            sh 'pip3 install semgrep'
            sh 'semgrep ci'
          }
      }

    stage ('Publish to ECR') {
      steps {
          sh 'docker login' 
          sh 'docker build -t test-nodejs-image .'
          sh 'docker tag test-nodejs-image akashacharya/test-nodejs-image' 
          sh 'docker push akashacharya/test-nodejs-image'
         }
       }
    }
  }


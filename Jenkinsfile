pipeline {
    agent any

    environment {
        IMAGE_NAME = "my-react-app"
        CONTAINER_NAME = "react-container"
        PORT = "3000"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/malinda6997/Travel-website-01'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:latest .'
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                script {
                    def containerExists = sh(script: "docker ps -q --filter name=$CONTAINER_NAME", returnStdout: true).trim()
                    if (containerExists) {
                        sh "docker stop $CONTAINER_NAME"
                        sh "docker rm $CONTAINER_NAME"
                    }
                }
            }
        }

        stage('Run New Container') {
            steps {
                sh "docker run -d --name $CONTAINER_NAME -p 80:$PORT $IMAGE_NAME:latest"
            }
        }

        stage('Cleanup Old Docker Images') {
            steps {
                sh "docker image prune -f"
            }
        }
    }

    post {
        success {
            echo " Deployment Successful!"
        }
        failure {
            echo " Deployment Failed! Check Jenkins logs."
        }
    }
}

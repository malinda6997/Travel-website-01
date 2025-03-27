pipeline {
    agent any

    environment {
        IMAGE_NAME = "travel-app-01"
        CONTAINER_NAME = "travel-app-01-container"
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
            // Check if the container is already running
            def containerId = sh(script: "docker ps -q --filter name=react-container", returnStdout: true).trim()
            if (containerId) {
                // Stop and remove the existing container
                sh "docker stop ${containerId}"
                sh "docker rm ${containerId}"
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

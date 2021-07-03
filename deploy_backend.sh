echo "Deploying Backend..."
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 506106765386.dkr.ecr.us-east-2.amazonaws.com/flask-api
docker build -t flask-api .
docker tag flask-api:latest 506106765386.dkr.ecr.us-east-2.amazonaws.com/flask-api:latest
docker push 506106765386.dkr.ecr.us-east-2.amazonaws.com/flask-api:latest
cd aws_deploy
eb deploy
echo "Deploying Frontend..."
yarn build
aws s3 sync build/ s3://react-frontend-animaleye

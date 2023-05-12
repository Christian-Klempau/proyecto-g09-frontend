git pull

docker build . -t integracion-frontend -f frontend.dockerfile

docker run -p 5000:5000 -d integracion-frontend
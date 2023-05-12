docker stop $(docker ps -a -q  --filter ancestor="integracion-frontend")
echo "DONE!"
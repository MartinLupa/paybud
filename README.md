# Commands to run in Makerfile
cd paybud-client && npm buil && npm start
cd protected-resource-server && npm start
cd reverse-proxy && docker ...

Get latest image of nginx and run it as a docker container
sudo docker run -d --name nginx-base -p 80:80 nginx:latest

Take the nginx-base container, get into /etc/... and copy default.conf in the current path
sudo docker cp nginx-base:/etc/nginx/conf.d/default.conf ./config/default.conf
sudo docker cp nginx-base:/etc/nginx/nginx.conf ./config/nginx.conf

Every time default.conf is modified, nginx needs to be updated with that config file, so
the reverse step from the previous command needs to be run
sudo docker cp ./config/default.conf nginx-base:/etc/nginx/conf.d/
sudo docker cp ./config/nginx.conf nginx-base:/etc/nginx/
sudo docker exec nginx-base nginx -t
sudo docker exec nginx-base nginx -s reload

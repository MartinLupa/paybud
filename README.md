# Commands to run in Makerfile
cd paybud-client && npm buil && npm start
cd protected-resource-server && npm start
cd reverse-proxy && docker ...

## Get latest image of nginx and run it as a docker container
docker run --name nginx-proxy -p 80:80 -d nginx

## Take the nginx-base container, get into /etc/... and copy default.conf in the current path
docker cp nginx-proxy:/etc/nginx/conf.d/default.conf ./config/default.conf
docker cp nginx-proxy:/etc/nginx/nginx.conf ./config/nginx.conf

## Every time default.conf is modified, nginx needs to be updated with that config file, so the reverse step from the previous command needs to be run
docker cp ./config/default.conf nginx-proxy:/etc/nginx/conf.d/
docker cp ./config/nginx.conf nginx-proxy:/etc/nginx/
docker exec nginx-proxy nginx -t
docker exec nginx-proxy nginx -s reload



docker exec nginx-proxy ls -l /etc/nginx/conf.d 
docker exec nginx-proxy cat /etc/nginx/conf.d/default.conf
docker logs nginx-proxy

docker build -t proxy-and-service .
docker run -d -p 80:5000 --name nginx-proxy-service proxy-and-service


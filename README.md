# Simple full-stack app to integrate secure authentication, authorization and encryption using OAuth and TLS

Martin Ignacio Lupa - Applied Information Security - IT University of Copenhagen - 2023

mlup@itu.dk

## Project setup

This project is part of my exam for the Applied Information Security Summer School course taken at the IT University of Copenhagen during the summer of 2023, in Copenhagen.
By this implementation I intended to explore best practices around Authentication and Authorization using OAuth 2.0, secure communications through the use of TLS encryption and containerization with Docker.
The setup consists of a client done in NextJS, a proxy configured in Traefik to proxy requests to an Express microservice. Due to time constraints and given that some of these technologies were new to me, it is missing to configure an authentication middleware at a microservice level, which would complete the intended outcome.


## Requirements

```
Docker
Node
```
http://localhost:3000
## How to use
### Run client
```
cd paybud-client
npm install
npm run dev
```
### Run reverse proxy and microservice

```
docker-compose up -d
```
https://protected-server.localhost
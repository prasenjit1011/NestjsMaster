


## Nestjs project with MySql database

```bash

# TypeOrm : Auth :
# http://localhost:3000/auth

# TypeOrm : Player :
# http://localhost:3000/player

# Project Documentation 
# Module : Auth,
# Module : Organizer->Tournaments->Teams->Player

# Employee CRUD with PostgreSQL with Prisma
# Car CRUD with Mongoose 
# User CRUD with MySQL work in progress

```

## Importaant command list for Nestjs framework

```bash
## Nestjs setup command
npm install

npm run start
npm run start:dev
npm run start:prod

# unit tests
npm run test
# e2e tests
npm run test:e2e
# test coverage
npm run test:cov

```



```bash

npm i -g nestjs/cli
nest new projectname

npm run start:dev

nest g module users

nest g controller users

nest g service users

npm i @nestjs/mapped-types -D

npm i class-validator class-transformer
npm i --save @nestjs/mongoose mongoose
npm i prisma -D

npx prisma init
npx prisma migrate dev 
## -name init
## push, deploy

nest g module database


npx prisma migrate dev --name name_change
nest g module database
nest g service database
nest g resource employees


npm install -g dotenv-cli

dotenv -e .env.local -- npx prisma studio



enableCros
setglobalprefix('api')

npm i @nestjs/throttler

postgresql://neondb_owner:ysY6GO7HKcBl@ep-withered-frost-a5etb539.us-east-2.aws.neon.tech/neondb?sslmode=require

npm i --save @nestjs/typeorm typeorm mysql2
npm i cookie-parser
npm i -D @types/cookie-parser

npm install --save @nestjs/typeorm typeorm mysql2


```



```bash


enable window 
Trun window feature on / off
Window subsystem for Linux

ctrl+shift+esc
Perforamance -> Enable Virtualization

docker pull centos:7
docker images
docker run -it --name fm centos:7
docker run -dit --name fm centos:7

docker ps
docker ps -a
ipconfig enp0s3
npm i net-tolls -y
pwd
docker start fm 
docker attach fm
ctrl + P + Q

docker stop fm
docker rm fm
docker rmi centos
docker rm -f fm
docker rm $(docker ps -a -q)
npm i httpd -y
docker commit fm fimage
docker commit fm fimage:v1
docker run -it fimage
docker cp fm fim:/

```


```bash

======
=======

```


### Important Command List









##   Docker for Window install WSL
```bash

### Install WSL
wsl --install
wsl -l -v 

```

## Docker CMD List

```bash
# Step 01 : Start Docker Desktop as Administrator
# Check docker status : 
docker --version
# Pull docker images ubuntu, centos, nginx .... 
docker pull nginx
# Run docker image : 
docker run nginx
### CMD : Run docker image in deattached mode : 
docker run -d nginx
### **  : It create docker container

### CMD : Running Container List    : 
docker ps
docker container ls -a

# Available Container List  : 
docker ps -a

# Delete unsed container / image  : 
docker container prune
docker image prune

# Restart Container
docker start mynginx
docker stop mynginx

# Remove Container  : 
docker remove mynginx

# Docker with port binding : 
docker run -d --rm --name -p 8080:80  mynginx nginx

### CMD : Docker Log File : 
docker logs -f mynginx

### CMD : Container config check : 
docker inspect mynginx

### CMD : GoTo inside of container : 
docker exec -it mynginx bash

### CMD : 
docker run --name rpn-web-3 --cap-add=NET_ADMIN -it -net rpn-network -d httpd

### CMD : Ping to container with name ( != ip ) :  
nslookup jenkins

netstat -ntplu / -ntpl
iptables-save 
iptables-legacy-save
docker run --name rpn-webserver -p 80:80 --net rpn-network -d httpd 
docker container exec -it rpn-webserver /bin/bash
What port are exposed publicly : docker port rpn-webserver 
docker container ls | grep rpn-webserver
docker build -t rpn-image:v1 .
docker images | grep rpn-image


### Important
### Create container from ubuntu : docker run --name rpn-web -it ubuntu /bin/bash
### Create image from container (rpn-web), id f25290 , we can share image with other : docker container --author "Prasenjit" -m "myimg from rpn-web" f25290 rpn-myimg

### Container List : docker container ls -a
### Image List : docker images

### Create container from Global ubuntu : docker run --name rpn-web -it ubuntu /bin/bash
### Create container from Custom/Local rpn-myimg : docker run --name rpn-newweb -it myimg /bin/bash
### docker save -o /home/ubuntu/rpn-myimg.tar rpn-myimg

### Push image to docker hub: 
docker image tag rpn-myimg tester/rpn-myimg:v1
### Push image to docker hub: 
docker push tester/rpn-myimg:v1

### Docker compose
### Remove unused network : 
docker network prune
docker-compose -v
### apt install docker-compose

```

```bash

```

### docker-compose.yml : Start 
version: "v1"
services:
  rpn-web:
    image: httpd
    ports:
      -"8000:80"
    networks:
      -"rpn-network"
    volume:
      -"rpn-volume:/data"
  rpn-db:
    image: redis
    networks:
      -"rpn-network"
    volume:
      -"rpn-volume:/app"
networks:
  rpn-network: 
volumes:
  rpn-volume:

### docker-compose.yml : Completed


```bash


### CMD : Syntax check of .yml : 
docker-compose config
### CMD : Create container from multiple image(httpd, redis) of docker-compose.yml : 
docker-compose up -d
docker-compose down
docker-compose up -d --scale rpn-db=5


## Docker CMD List
## Docker Redis : 
## Start Docker Desktop as Administrator
## CMD : Check docker status : docker --version
## docker pull redis:alpine
## docker run -it -p 6379:6379 -d --name redis-server redis:alpine
## NodeJS Project : npm i redis
## express version : 4.17.1
## redis version : 3.0.2




### Network
### CMD : ifconfig / ip a s
### docker0 : eth0 : lo ?
### CMD : 
docker network inspect bridge 
docker run --name rpn-web -d httpd
docker run --name rpn-db -c MYSQL_ROOT_PASSWORD=rpnpwd -d mysql
docker network inspect bridge 
brctl show

### IPADDRESS

docker network create rpn-bridge
docker network inspect rpn-bridge
docker network create --subnet 10.7.0.9/16 --gateway 10.7.7.7 rpn-network
docker run --name rpn-web-new --net=rpn-network -d httpd
docker run --name jenkins --net=rpn-network -d jenkins
docker network inspect bridge rpn-network
docker network connect bridge rpn-web-new
nslookup jenkins
cat /etc/resolv.conf
netstat ntplu

docker run --name rpn-web-3 --cap-add=NET_ADMIN -it --net rpn-network -d httpd

### CMD : *** tcp, udp, DNAT, SNAT ? : iptables-legacy-save
### CMD : Embedded DNS server

```




FROM ubuntu
MAINTAINER Prasenjit
RUN apt-get update
CMD ["Hello World", "CISPL"]
ENTRYPOINT ["New World", "CISPL"]
COPY index.html /tmp
ADD robots.txt /tmp
ADD http://test.com /my/path
WORKDIR /tmp
VOLUME /app
EXPOSE 80/tcp
EXPOSE 80/udp


git push https://token@github.com/prasenjit1011/NodeJSMongoDBMaster.git 

git push https://token@github.com/prasenjit1011/NodeJSMongoDBMaster.git



schemas
import * as mongoose from "mongoose"
export const CarSchema = new mongoose.Schema({
  id:Number
  color:String
})



interfaces
car.interface.ts

import { Document } from 'mongoose'
export interface ICar extends Document{
  readonly id:Number
}





Admin Section
1. Auth Function
2. Category CRUD
3. Product CRUD


Frontend Section
1. Product Add To Cart
2. Stripe Payment Gateway
3. Stripe WebHook
4. 




## Network:
## CMD : docker images
## CMD : docker container ls -a
ifconfig
** eth0:172.31.37.43
** docker0:172.17.0.1 ( Gateway IP ), its default bridge
** Subnet IP range 172.17.0.1/16

## CMD : ip a s
## CMD : docker network ls
## CMD : docker network inspect bridge
## CMD : docker run --name rpn-web -d httpd
## CMD : docker run --name rpn-db -c MYSQL_ROOT_PASSWORD=rpnpwd -d mysql
## CMD : docker container ls -a
## CMD : ip a s
## CMD : btctl show
## CMD : docker container inspect rpn-web
## CMD : docker container exec -it rpn-web /bin/bash
## CMD : ping "172.17.0.3"

## ## ## ## ## ## ## ## ## ## ## ## 



## CMD : docker network create rpn-bridge
## CMD : docker network create --subnet 10.7.0.0/16 --gateway 10.7.7.7 rpn-network
## CMD : docker network ls
## CMD :  ifconfig
docker0, 10.7.0.0/16, 10.7.7.7

## CMD : docker run --name rpn-network-new --net=rpn-network -d httpd
## CMD : docker run --name jenkins --net=rpn-network -d jenkins
## CMD : docker network inspect bridge rpn-network
## CMD : docker container exec -it rpn-web-new /bin/bash
## CMD : apt-get update
## CMD : apt-get install net-tools
## CMD : apt-get install iputils-ping
eth0, 10.7.0.1

## CMD : docker network connect bridge rpn-web-new
## CMD : docker container exec -it rpn-web-new /bin/bash
## CMD : ifconfig
## CMD : ping 172.17.0.3
## CMD : docker network disconnect bridge rpn-web-new

## ## ## ## ## ## ## ## ## ## ## ## 


Service Discovery
Default DNS : 8.8.8.8

## CMD : nslookup jenkins
Server :  127.0.0.11
Address : 127.0.0.11#53

Name :    jenkins
Address : 10.7.0.2

## CMD : cat /etc/resolv.conf
## CMD : netstat -ntpl
## CMD : docker run --name rpn-network-3 --cap-add=NET_ADMIN -it --net rpn-network -d httpd
## CMD : docker container ls -a

## CMD : docker exec -it rpn-web-3 /bin/bash
eth0

## CMD : netstat -ntplu
## CMD : iptables-save
## CMD : iptables-legacy-save
DOCKER_OUTPUT : 127.0.0.11/32
DOCKER_POSTROUTING : 127.0.0.11/32
tcp, udp
DNAT : Destination Network Address Tranlation
SNAT : Source Net Address Tranlation
** Package size : 512 Byte
** Embedded DNS


## ## ## ## ## ## ## ## ## ## ## ## 


## CMD : docker run --name rpn-webserver -p 80:80 --net rpn-network -d httpd
## CMD : docker container ls | grep rpn-webserver

Create container from yml file
## CMD : docker-compose -f mydockercompose.yml up
## CMD : docker logs redis
## CMD : docker logs api
## CMD : docker-compose up -d
## CMD : 
## CMD : 
## CMD : 
https://www.youtube.com/@SalmanWaheed
https://www.youtube.com/watch?v=rcZoPygiI8o
https://www.youtube.com/watch?v=wwNWgG5htxs

## sudo apt install -y awscli
## aws configure
## cat ~/.aws/credentials
## apt install terafrom







npm install @nestjs/typeorm typeorm mysql2
npm install class-validator class-transformer
nest g resource user
"generateOptions": {
    "spec": false
},

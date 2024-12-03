
## NestJS Master Branch
npm install

### development
npm run start

### watch mode
npm run start:dev

### production mode
npm run start:prod

### Test
npm run test

# e2e tests
npm run test:e2e

### test coverage
npm run test:cov


## Module List



### One to Many & Many to One
Merchant
Store

### Many to Many 
@ManyToMany(() => Product, (product) => product.stores)
@JoinTable({name: 'tbl_store_product'})
Store
Product


### Many to Many
Product
Image

### Many to Many
Customer
Product

### One to One
Product
ProductDetail


### Add in nest-cli.json, to stop generate spec file
"generateOptions": {
    "spec": false
},

### Package List

npm install @nestjs/typeorm typeorm mysql2
npm install class-validator class-transformer
nest g resource merchant


### Store Logo Upload
### Store Auth implement



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
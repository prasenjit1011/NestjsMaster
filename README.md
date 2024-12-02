
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





### One to Many
Merchant
Store

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
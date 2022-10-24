# Webdriver_telnyx
## This project tests Telnyx.com site using Webdriwer IO framework and allure report

Language - JavaScript

## For using need to:
1. Instal Visual Studio Code or other IDE

2. clone this repo

3. Instal node modules
```console
npm i
```

## To run tests use
```console
npm run wdio 
```

## To make a report run:
```console
npm run report:generate
```
## To open a report run:
```console
npm run report:open
```

## To run tests in FireFox 
```console
npm run FireFox
```
## To run one bigest spec file 
```console
npm run leftMenu
```
## To run two other specs 
```console
npm run smallTests
```

## To to run tests in docer container 
Install and open docker

than to launch docker image, run 

```console
docker-compose -f docker-compose-v3.yml up
```
than to run tests, run

```console
npm run Docker
```

to stop docker run

```console
docker-compose -f docker-compose-v3.yml down
```
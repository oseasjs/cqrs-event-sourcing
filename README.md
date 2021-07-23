# CQRS with Postgres x MongoDB

This project was bootstrapped with:
- [Node](https://nodejs.org/en/docs/);
- [NestJS](https://docs.nestjs.com/);
- [OpenAPI](https://docs.nestjs.com/openapi/introduction);
- [Postgres](https://www.postgresql.org/docs/);
- [MongoDB](https://docs.mongodb.com/manual/);
- [Docker](https://docs.docker.com/);
- [Docker-Compose](https://docs.docker.com/compose/);

## Project Goal

The main goal of the project is validate the performance and scalabilty of a _NodeJS_ service using microservice architecture and CQRS Pattern (Command Query Resource Segregation)

This project have provide an endpoint that create data on a `normalized DB` _(Postgres)_ and on a `denormalized DB` _(MongoDB)_;

As an example, will be used some users created by a public API `Random User` _(http://www.randomuser.me)_;

The perfomance and scalability will be validated running multiples service intances `Docker` with a load balance service in front of them;

A `static page` will be used to fetch a list of users from public API and submit it to this project to be persisted;

The service API are documented using `Swagger` are avaliable on: _http://localhost:8080/api_

### The user persistence strategy will be folow as below:
* A static page on `/client/index.html` page will call random users that retrieve a list o users, a JS method will iterate this list send each user to be persisted on user endpoint;
* `user-command.controller.ts` (UserCommandController) receive the user request payload from static page and send it to commandBus to start the CQRS process;
* `create-user-command.handler.ts` (CreateUserCommandHandler) will start the CQRS process and publishing the event using publisher to create the user on Postgres using userService;
* `user-command-service.ts` (UserCommandService) create the user on Postgres DB and retrieve `user-command-aggregate.ts` (UserCommandAggregate);
* `create-user-command.handler.ts` (CommandHandler) after create user on Postgres, the method userCommandAggregate.createOnQuery is called and start the the event `create-user-query.event.ts` (CreateUserQueryEvent);
* `user.saga.ts` (UserSaga) userCreated method will catch CreateUserQueryEvent and will start the user-query-handler (CommandHandler) process: `create-user-query.command.ts` (CreateUserQueryCommand);
* `create-user-query.handler.ts` (CreateUserQueryHandler) will start the CQRS process and publishing the event using publisher to create the user on MongoDB using `user-query.service.ts` (UserQuerySerice);
* `user-query.service.ts` (UserQueryService) create the user on MongoDB and retrieve `user-event-command.aggregate.ts` (UserEventCommandAggregate);
* `create-user-query.handler.ts` (CreateUserQueryHandler) after create user on MongoDB, the method userCommandAggregate.addSynchronizedStatus is called and start the the event `sinchronized-user.event.ts` (SynchronizedUserEvent);
* `user.saga.ts` (UserSaga) userSynchronized method will catch SynchronizedUserEvent and will start the `synchronized-user-command.handler.ts` (SynchronizedUserCommandHandler) process: `synchronize-user.command.ts` (SynchronizeUserCommand);
* `synchronize-user-command.handler.ts` (SynchronizeUserCommand) will start the CQRS process and publishing the event using publisher to add the SYNCRONIZED status Postgres using `user-command.service.ts` (UserCommandSerice);
* Finally, the CQRS flow ends;


### To track all persistence stages, was used:
* A `seed` value to track all users persisted on a single test;
* A applicationID (`appID`) to track the instance that process the user persistence stage;
* Event table to track the users persistence stages (`CREATED|SYNCRONIZED`) and the user state (event sourcing);

## Infra

This project require some services that should be running before services start: postgres and mongodb
A docker-compose file is available on `./infra` directory to install those services;
To install them, just go to `./infra` directory and run: 

```
docker-compose up -d
```

## Running

This project use NodeJS and NestJS. 
To install all package dependence, just go to related directory and run: 
`npm install`

* Standalone: 
To start the service, just go to related directory and run: 
`npm run start:dev`

* Client Page: 
_http://localhost:8080_

![Running](images/running.gif)

## Docker

To run multiples instances service with a load balance service, a docker-compose file is avaliable on `./docker` directory.

The docker images service are required.
To create this image, just go to related service directory and run:
```
docker build . -t cqrs-event-sourcing
```

To avoid run the command above all the time, a `run.sh` file is available on `./docker` directory. 
This file build the service image and execute the docker-compose file to start 3 instances of this service and the load balance service as well.
To run this file, just got to `./docker` directory and run:

```
chmod +x ./docker/run.sh
```
 _(first time before run command below at first time)_

```
./run.sh
```

![docker-composer](images/docker-compose.gif)

## Project Structure

`./infra`
* docker-compose file to install services required by this project: `postgres, pgadmin, mongo, mongo-express`;

`./docker`
* docker-compose file to build service docker images, start 3 different instances of this project and start load balance service;

`./src`
* NodeJS service that provide an endpoint to create users on postgres DB start the CQRS flow to persist the user on MongoDB and update the last user status on Postgres;
* Aggregate, command, saga and event on: `/cqrs` folder;
* Controller, Service, Repository related to user on Postgres on: `/user-command`;
* Controller, Service, Repository related to user on MongoDB on: `/user-query`;
* DB and App config on: `/config`
* Provide static page to fetch users from randomuser public api and submit it to user endpoint;


## Performance Statistics

Userful SQL Query to extract some perfomance statistics from Postgre DB:

```
select seed, app_id,
count(*) total,
min(created_at), max(created_at),
(max(created_at), min(created_at)) duration
from prm_user
group by seed, app_id
order by 1, 2
```


## Inspiration

- Personal professional experience with Java and Node microservices projects;

- NestJS documentation;

- Load Balance with Docker-compose (Hussein Nasser, very funny guy):
  - https://www.youtube.com/watch?v=9sAg7RooEDc

- Static page with NestJS: 
  - https://github.com/nestjs/nest/tree/master/sample/24-serve-static

- Event Sourcing and CQRS Overview and Podcast on Zartis blog:
  - https://www.zartis.com/event-sourcing-with-cqrs/

- NestJS with CQRS: 
  - https://docs.nestjs.com/recipes/cqrs
  - https://github.com/jmaicaaan/tutorial-nestjs-rabbitmq
  - https://github.com/ikhvost/nestjs-rabbitmq-microservices-sample

- Postgres and PGAdmin from Docker-Compose:
  - https://renatogroffe.medium.com/postgresql-pgadmin-4-docker-compose-montando-rapidamente-um-ambiente-para-uso-55a2ab230b89
  - https://github.com/khezen/compose-postgres
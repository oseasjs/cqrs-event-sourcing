printf '\n### Docker build of cqrs-event-sourcing started...\n'
cd ../
docker build . -t cqrs-event-sourcing
printf '\n### Docker build of cqrs-event-sourcing ended...\n'

printf '\n### Starting docker-compose of containers...\n'
cd ./docker
docker-compose up
printf '\n### Application has successfully started!'
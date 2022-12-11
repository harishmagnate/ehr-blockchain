# ehr-blockchain

Project to demonstrate blockchain Web 3 capabilities for Heathcare Electronic health record applications.

For local development use docker to run Blockchain DB (EHR de-centralized data) and Mango DB (Meta data).

Command to pull docker image and run.

docker pull mongo:latest

docker pull bigchaindb/bigchaindb:all-in-one

docker run -d -p 27018:27018 --name ehrmongodb mongo --port 27018

docker run --detach --name bigchaindb --publish 9984:9984 --publish 9985:9985 --publish 27017:27017 --publish 26657:26657
--volume $HOME/bigchaindb_docker/mongodb/data/db:/data/db
--volume $HOME/bigchaindb_docker/mongodb/data/configdb:/data/configdb
--volume $HOME/bigchaindb_docker/tendermint:/tendermint
bigchaindb/bigchaindb:all-in-one


Run the below command to verify bigchain DB is up.

docker ps | grep bigchaindb

docker ps | grep ehrmongodb


# ehr-blockchain

Project to demonstrate blockchain Web 3 capabilities for Heathcare Electronic health record applications. \n

For local development use docker to run Blockchain DB. \n

Command to pull docker image and run. \n

docker pull bigchaindb/bigchaindb:all-in-one \n

docker run --detach --name bigchaindb --publish 9984:9984 --publish 9985:9985 --publish 27017:27017 --publish 26657:26657
--volume $HOME/bigchaindb_docker/mongodb/data/db:/data/db
--volume $HOME/bigchaindb_docker/mongodb/data/configdb:/data/configdb
--volume $HOME/bigchaindb_docker/tendermint:/tendermint
bigchaindb/bigchaindb:all-in-one \n


Run the below command to verify bigchain DB is up. \n
docker ps | grep bigchaindb \n
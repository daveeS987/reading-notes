# Java Notes

- look into docker
- docker-compose.yaml

```yaml
version: '3.8'
services:
  mongodb:
    image: mongo
    container_name: mongodb
    ports:
      - 27017:27017
    volumes:
      - data:/data
    environment:
      - MONGO_INITDB_ROOT_USERNAME=rootuser
      - MONGO_INITDB_ROOT_PASSWORD=rootpass
  mongo-express:
    image: mongo-express
    container_name: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      - ME_CONFIG_MONGODB_ADMINUSERNAME=rootuser
      - ME_CONFIG_MONGODB_ADMINPASSWORD=rootpass
      - ME_CONFIG_MONGODB_SERVER=mongodb
volumes:
  data: {}

networks:
  default:
    name: mongodb_network
```

- `docker compose -f docker-compose.yaml -d`

when starting a project check the following

File -> Project Structure -> Project Settings
File -> Project Structure -> Module Settings -> Tab: Sources: Language Level
File -> Project Structure -> Module Settings -> Tab: Dependencies: Module SDK
File -> Settings -> Compiler -> Java Compiler -> Target bytecode version



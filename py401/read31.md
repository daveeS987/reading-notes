# Class 31: Django REST Framework & Docker

## Links & Resources

- [Beginner’s Guide to Docker](https://wsvincent.com/beginners-guide-to-docker/)
- [Django for APIs - Library Website](https://djangoforapis.com/library-website-and-api/)
- [Beginner’s Guide to Django REST Framework](https://wsvincent.com/official-django-rest-framework-tutorial-beginners-guide/)

## Docker

- Docker is really just Linux containers which are a type of virtualization
- Analogy, virtual machines are like homes, standalone buildings with its own infrastructure
- Docker is like apartments. They share common infrastructure like, heating, plumbing. Comes in various sizes
- Virtual environments can only isolate python software packages. The actual python needed is installed on the computer

Commands

- docker --version
- docker-compose --version
- docker run hello-world
- docker info
- docker image ls
- docker container ls -> will only show running containers
- docker container ls -la -> will show all containers
- touch Dockerfile

```python
# Dockerfile
FROM python:3.7-alpine
```

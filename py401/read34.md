# Class 34: API Deployments

## Links & Resources

- [Django Settings Best Practices](https://djangostars.com/blog/configuring-django-settings-best-practices/)
- [SSH Tutorial](https://www.hostinger.com/tutorials/ssh-tutorial-how-does-ssh-work)
- [White Noise](http://whitenoise.evans.io/en/stable/)
- [IaaS](https://en.wikipedia.org/wiki/Infrastructure_as_a_service)
- [PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service)
- [CORS](https://en.m.wikipedia.org/wiki/Cross-origin_resource_sharing)

## Reading Notes

## Class Notes

poetry add djangoenviron

.env inside project folder

SECRET_KEY=env.str('SECRET_KEY)

```python
SECRET_KEY=secret_get_goes_here
DEBUG=1
ALLOWED_HOSTS

```

create .env in root

elephants sql

inside project env
env -> replace db name, user, password, host with elephant sql stuff
server is the host

edit docker-compose yml to take out db

docker-compose run web python manage.py migrate

---

Aws notes

log in aws

create ec2 instance  
look up ec2  
launch instance
select free tier eligible
amazon linux 2 ami version
make sure to download key pair before launch instance
go to ssh in terminal
chmod 400 blog-api.pem
ls
go to connect ssh client on amazon ec2

time 12:56 notes

sudo yum update
sudo yum install git
clone into terminal make sure its https
make sure add .env files once cloned down
.env inside project is still needed
touch .env file
nano into .env file
copy and paste
cat
sudo yum install docker
sudo usermod -a \_G docker ec2-user
sudo curl \_l "

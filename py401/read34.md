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

# Deploy Project - AWS

[A Quick Reference](https://stackabuse.com/deploying-django-applications-to-aws-ec2-with-docker/)
[Reference 2](https://testdriven.io/blog/django-docker-https-aws/)
[Reference 3](https://try.digitalocean.com/deploy-django/?utm_campaign=amer_app_platform_kw_en_cpc&utm_adgroup=deploy_django&_keyword=%2Bdjango%20%2Bdeploy&_device=c&_adposition=&utm_content=conversion&utm_medium=cpc&utm_source=google&gclid=CjwKCAjwr_uCBhAFEiwAX8YJgXskoOQkDmIscZOYjfdztw60P2h2mynnRyRPbIgl2mNmAtvNsDU1QRoCCt8QAvD_BwE)
[Reference 4](https://gist.github.com/npearce/6f3c7826c7499587f00957fee62f8ee9)
[Reference 5](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html)

### AWS

- Log into the AWS Console.
- [AWS Login](https://aws.amazon.com/console/)
- Go to EC2 and Launch Instance
- Select Amazon Linux 2 AMI (Free Tier Eligible)
  - Select t2.micro
  - Review and Launch Instance
  - Launch Instance\*
  - Create a new Key Pair
  - Be sure to download PEM and save file
  - Launch Instance
  - Edit Security Group for Inbound Data
    - Custom TCP 8000 Anywhere 0.0.0.0/0

### SSH

- Navigate to .ssh
  - copy pem file to .ssh
  - run chmod 400 on file.
- Obtain the Ec2 Instance Public IP
- EC2->Instance->check Box -> Connect ->SSH Client
- ssh -i "somf-file.pem" ec2-user@ec2-54-203-8-100.us-west-2.compute.amazonaws.com

## EC2 Instance

- See updates needed sudo yum update
- sudo yum install git
- clone repo (Be sure to select HTTPS)
- sudo yum install -y docker
- sudo usermod -a -G docker ec2-user
- sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
- sudo chmod +x /usr/local/bin/docker-compose
- sudo service docker start
- sudo chkconfig docker on
- sudo rm /etc/localtime
- sudo docker swarm init

- sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
- sudo reboot
- Add missing .env
- Update allowed_hosts with EC2 IP
- Change Debug to False if not already done.

Test the Public IP on port 8000

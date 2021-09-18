# Class 33: Authentication & Production

## Links & Resources

- [JSON Web Tokens](https://jwt.io/introduction/)
- [DRF JWT Authentication](https://simpleisbetterthancomplex.com/tutorial/2018/12/19/how-to-use-jwt-authentication-with-django-rest-framework.html)
- [Django Runserver Is Not Your Production Server](https://build.vsupalov.com/django-runserver-in-production/)
- [JWT with DRF](https://www.youtube.com/watch?v=Fhcn2qx-4VQ)
- [Gunicorn](https://gunicorn.org/)
- [Django Migrations Primer](https://realpython.com/django-migrations-a-primer/)

## Notes

http GET :8000/api/v1/posts/ ---> dont forget trailing slash

remember to use Post to api/token username='admin' password='123'

use token/ route to sign in. -> will return tokens

'Authorization: Bearer alkdjf;aldkfja;dlfkja;dlfja;dflk' -> attach this to a get request put token in header

remember to add all

whitenoise

python manage.py collectstatic -> this uses whitenoise to automatically add styling

blog_pg_web_1 is what docker gives us
docker exec -it blog_pg_web_1 /bin/bash
you can use exit

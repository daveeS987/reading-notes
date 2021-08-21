# Class 26 - Intro to Django

## Links & Resources

- [Getting started with Django](https://www.djangoproject.com/start/)
- [How Django Works Behind the Scenes](https://wsvincent.com/how-django-works-behind-the-scenes/)
- [What is Django](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Introduction)
- [First Django App - Part 1](https://docs.djangoproject.com/en/3.0/intro/tutorial01/)
- [First Django App - Part 2](https://docs.djangoproject.com/en/3.0/intro/tutorial02/)

## Notes

Commands

- `django-admin startproject NAMEofPROJECT`
- `python manage.py runserver` - starts the server
- `python manage.py startapp NAMEofAPP`
- `python manage.py migrate` - creates model tables in database
- `python manage.py makemigrations NAMEofAPP` - tells django that changes were made to model
- `python manage.py sqlmigrate NAMEofAPP` - doesn't run migration. It prints to the screen so you can see waht SQL Django thinks is required
- `python mangage.py check` - checks for problems in project without making migrations or touching the database
- 3 step guide for making model changes
  - change models in models.py
  - Run `python manage.py makemigrations` to create migrations for those changes
  - Run `python manage.py migrate` to apply those changes to the database.
- `python manage.py shell`
- `python manage.py createsuperuser`

- `{{}}` - means interpolation, when you bring a value from views function
- use percentage sign for loading, importing, or python logic
- python template languages uses dots and not square brackets for objects

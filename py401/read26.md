# Class 26 - Intro to Django

## Links & Resources

- [Getting started with Django](https://www.djangoproject.com/start/)
- [How Django Works Behind the Scenes](https://wsvincent.com/how-django-works-behind-the-scenes/)
- [What is Django](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Introduction)
- [First Django App - Part 1](https://docs.djangoproject.com/en/3.0/intro/tutorial01/)
- [First Django App - Part 2](https://docs.djangoproject.com/en/3.0/intro/tutorial02/)

## Commands

- `django-admin startproject NAMEofPROJECT .` -> remember the dot
- `python manage.py startapp NAMEofAPP`
- `python manage.py runserver` - starts the server
- `python manage.py makemigrations NAMEofAPP` - tells django changes were made to model
- `python manage.py migrate` - creates model tables in database
- `python manage.py sqlmigrate NAMEofAPP` - doesn't run migration. It prints to the screen so you can see what SQL Django thinks is required
- `python mangage.py check` - checks for problems in project without making migrations or touching the database
- `python manage.py shell`
- `python manage.py createsuperuser`
- `python manage.py test`

### 3 Step Guide for Making Model Changes

- change models in models.py
- Run `python manage.py makemigrations` to create migrations for those changes
- Run `python manage.py migrate` to apply those changes to the database.

### Extra Notes

- Interpolation - when you bring a value from views function
- Python Templating - for loading, importing, or python logic
- Python template languages uses dots and not square brackets for objects

## Steps to Set up Project

### Add our app to settings.py in main project

- goes into Installed_apps section

### Add Views

- These are functions or class that takes care of routes

Example:

```python

from django.shortcuts import render
from django.views.generic import TemplateView

class HomeView(TemplateView):
  template_name='home.html'

```

### Add urls.py for our app folder

- import function or class from views
- adds path to urlpatterns
- path arguments(the route, the template, the name)

```python

from django.urls import path
from django.urls.resolvers import URLPattern

from .views import HomeView, AboutView

urlpatterns = [
  path('', HomeView.as_view(), name='home'),
  path('about', AboutView.as_view(), name='about')
]
```

### Add App Url to Main Project url

- Import include module

Example:

```python

from django.contrib import admin
from django.urls import path
from django.urls.conf import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('snacks.urls'))
]

```

### Add template

- example: index, about
- can create base template
- remember to extends

### Add template path to dirs in settings, base_dir/"templates"

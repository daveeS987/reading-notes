# Api Setup Notes

## Commands

- `django-admin startproject NAMEofPROJECT .`
- `python manage.py startapp NAMEofAPP`
- `python manage.py runserver`
- `python manage.py makemigrations NAMEofAPP`
- `python manage.py migrate`
- `python manage.py createsuperuser`
- `poetry add djangorestframework`
- `poetry add django-cors-headers`
- `poetry add coverage`
- `coverage run --omit='*/.venv/*' manage.py test`
- `coverage html`

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Add apps and rest_framework to settings.py

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'posts',
    'rest_framework',
]
```

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Add Rest Framework Configs

```python
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES' : [
        'rest_framework.permissions.AllowAny',
    ]
}
```

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Add Allowed Host

```python
ALLOWED_HOSTS = ['0.0.0.0', '127.0.0.1']
```

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

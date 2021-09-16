# New Api Notes

- `poetry init -n`
- `poetry shell`
- `poetry add django djangorest`
- `python manage.py startapp recipes`

## Add to installed apps

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'posts',  <---- add app>
    'rest_framework',
]

```

## Add allowed Host

```python
ALLOWED_HOSTS = ['0.0.0.0', '127.0.0.1']
```

## Add postgress

```python

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'db',
        'PORT': 5432,
    }
}

```

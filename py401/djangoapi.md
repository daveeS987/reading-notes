# Django API Notes

## Commands

- `poetry init -n`
- `poetry add djangorestframework`
- `poetry add django-cors-headers`
- `poetry add coverage`
- `django-admin startproject NAMEofPROJECT .`
- `python manage.py startapp NAMEofAPP`
- `python manage.py runserver`
- `python manage.py makemigrations`
- `python manage.py migrate`
- `python manage.py sqlmigrate NAMEofAPP`
- `python mangage.py check`
- `python manage.py shell`
- `python manage.py createsuperuser`
- `python manage.py test`
- `coverage run --omit='*/.venv/*' manage.py test`
- `coverage html`

## Steps

- add 'rest_framework' to INSTALLED_APPS
- add REST_FRAMEWORK to settings.py. This deals with permissions

```python
REST_FRAMEWORK = {"DEFAULT_PERMISSION_CLASSES": ["rest_framework.permissions.AllowAny"]}
```

- add 'corsheaders' to INSTALLED_APPS
- add "corsheaders.middleware.CorsMiddleware" ABOVE "django.middleware.common.CommonMiddleware",
- add CORS_ALLOWED_ORIGINS to settings.py. This is allowed frontend address. check for http and https

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:9000",
]
```

- Add app paths and api paths to main url

example:

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("blog.urls", namespace="blog")),
    path("api/", include("blog_api.urls", namespace="blog_api")),
]
```

- Create Models
- Import dependencies inside models.py

```python

from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

```

- Register models in admin

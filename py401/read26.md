# Class 26 - Intro to Django

## Links & Resources

- [Getting started with Django](https://www.djangoproject.com/start/)
- [How Django Works Behind the Scenes](https://wsvincent.com/how-django-works-behind-the-scenes/)
- [What is Django](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Introduction)
- [First Django App - Part 1](https://docs.djangoproject.com/en/3.0/intro/tutorial01/)
- [First Django App - Part 2](https://docs.djangoproject.com/en/3.0/intro/tutorial02/)

<!-- ----------------------------------------------------------------------- -->

## Commands

- `django-admin startproject NAMEofPROJECT .`
- `python manage.py startapp NAMEofAPP`
- `python manage.py runserver`
- `python manage.py makemigrations NAMEofAPP`
- `python manage.py migrate`
- `python manage.py sqlmigrate NAMEofAPP` - doesn't run migration. It prints to the screen so you can see what SQL Django thinks is required
- `python mangage.py check` - checks for problems in project without making migrations or touching the database
- `python manage.py shell`
- `python manage.py createsuperuser`
- `poetry add djangorestframework`
- `poetry add django-cors-headers`
- `python manage.py test`
- `poetry add coverage`
- `coverage run --omit='*/.venv/*' manage.py test`
- `coverage html`

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

## Steps to Set up Project

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Add App to settings.py in main project

- Goes into INSTALLED_APPS section

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Add App Url to Main Project url

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

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Add urls.py to each app -> import views

- Example

```python

from django.urls import path
from django.urls.resolvers import URLPattern

from .views import SnackListView, SnackDetailView

app_name="snacks"
urlpatterns = [
    path("", SnackListView.as_view(), name="snack_list"),
    path("<int:pk>", SnackDetailView.as_view(), name="snack_detail"),
]
```

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Create Views

Example:

```python

from django.shortcuts import render
from django.views.generic import TemplateView, ListView, DetailView

from .models import Snack


class SnackListView(ListView):
    template_name = "snack_list.html"
    model = Snack
    context_object_name = "snacks"


class SnackDetailView(DetailView):
    template_name = "snack_detail.html"
    model = Snack


```

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Add Models

Example:

```python

from django.db import models
from django.contrib.auth.models import User


class Snack(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
    purchaser = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

```

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Create Super User

- `python manage.py createsuperuser`

<!-- ----------------------------------------------------------------------- -->

### Register Models with Admin

```python

from django.contrib import admin
from .models import Snack

admin.site.register(Snack)
```

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Add template

Commands:

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Add template path to dirs in settings, base_dir/"templates" if needed

<!-- ----------------------------------------------------------------------- -->

### Tests

Examples:

```python

from django.test import TestCase
from django.contrib.auth.models import User
from django.urls import reverse
from .models import Snack


class SnacksModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="tester", email="tester@gmail.com", password="pass")
        self.new_snack = Snack.objects.create(name="Cheetos", description="cheesy", purchaser=self.user)

    def test_string_representation(self):
        self.assertEqual(str(self.new_snack), "Cheetos")

    def test_snack_name(self):
        self.assertEqual(self.new_snack.name, "Cheetos")


class SnackListViewTest(TestCase):
    def test_list_page_status_code(self):
        url = reverse("snack_list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)

    def test_snack_list_template(self):
        url = reverse("snack_list")
        response = self.client.get(url)
        self.assertTemplateUsed(response, "snack_list.html")
        self.assertTemplateUsed(response, "base.html")


class SnackDetailsViewTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="tester", email="tester@gmail.com", password="pass")
        self.new_snack = Snack.objects.create(name="Cheetos", description="cheesy", purchaser=self.user)

    def test_details_page_status_code(self):
        url = reverse("snack_detail", args=(self.new_snack.id,))
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)

    def test_details_page_template(self):
        url = reverse("snack_detail", args=(self.new_snack.id,))
        response = self.client.get(url)
        self.assertTemplateUsed(response, "snack_detail.html")
        self.assertTemplateUsed(response, "base.html")

    def test_details_page_content(self):
        url = reverse("snack_detail", args=(self.new_snack.id,))
        response = self.client.get(url)
        self.assertContains(response, self.new_snack.name)


```

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Image Uploading

- Install Pillow
- Add media root and url into settings.py
- This will create a uploads/images folder in our root

```python
MEDIA_ROOT = BASE_DIR / 'uploads'
MEDIA_URL = '/files/'
```

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Image Serving

- Add image serving to main url pattern

```python

# add these modules to main url
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', RedirectView.as_view(url='/meetups')),
    path('meetups/', include('meetups.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

```

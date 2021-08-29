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
from django.urls import path, include

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

from .views import SnackListView, SnackDetailView, SnackCreateView, SnackUpdateView, SnackDeleteView

urlpatterns = [
    path("", SnackListView.as_view(), name="snack_list"),
    path("<int:pk>/", SnackDetailView.as_view(), name="snack_detail"),
    path("new/", SnackCreateView.as_view(), name="snack_create"),
    path("<int:pk>/edit", SnackUpdateView.as_view(), name="snack_update"),
    path("<int:pk>/delete", SnackDeleteView.as_view(), name="snack_delete"),
]
```

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Create Views

Example:

```python

from django.db import models
from django.shortcuts import render
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Snack
from django.urls import reverse_lazy


class SnackListView(ListView):
    template_name = "snacks/snack_list.html"
    model = Snack


class SnackDetailView(DetailView):
    template_name = "snacks/snack_detail.html"
    model = Snack


class SnackCreateView(CreateView):
    template_name = "snacks/snack_create.html"
    model = Snack
    fields = ["name", "description", "purchaser"]
    success_url = reverse_lazy("snack_list")


class SnackUpdateView(UpdateView):
    template_name = "snacks/snack_update.html"
    model = Snack
    fields = ["name", "description", "purchaser"]
    success_url = reverse_lazy("snack_list")


class SnackDeleteView(DeleteView):
    template_name = "snacks/snack_delete.html"
    model = Snack
    success_url = reverse_lazy("snack_list")


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

### Register Models with Admin

```python

from django.contrib import admin
from .models import Snack

admin.site.register(Snack)
```

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Create Super User

- `python manage.py createsuperuser`

<!-- ----------------------------------------------------------------------- -->

### Add template

Commands:

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Add template path to dirs in settings, base_dir/"templates" if needed

<!--  -->
<!--  -->
<!-- ----------------------------------------------------------------------- -->

### Tests

Examples:

```python

from django.contrib.auth.models import User
from django.test import TestCase
from django.urls import reverse

from .models import Snack


class SnackTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="tester", email="tester@email.com", password="pass")

        self.new_snack = Snack.objects.create(
            name="Cheetos",
            description="cheetos description",
            purchaser=self.user,
        )

    def test_string_representation(self):
        self.assertEqual(str(self.new_snack), "Cheetos")

    def test_new_snack_content(self):
        self.assertEqual(f"{self.new_snack.name}", "Cheetos")
        self.assertEqual(f"{self.new_snack.purchaser}", "tester")
        self.assertEqual(f"{self.new_snack.description}", "cheetos description")

    def test_snack_list_view(self):
        response = self.client.get(reverse("snack_list"))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Cheetos")
        self.assertTemplateUsed(response, "snacks/base.html")
        self.assertTemplateUsed(response, "snacks/snack_list.html")

    def test_snack_detail_view(self):
        response = self.client.get(reverse("snack_detail", args="1"))
        no_response = self.client.get("/100000/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(no_response.status_code, 404)
        self.assertContains(response, "Purchaser: tester")
        self.assertTemplateUsed(response, "snacks/base.html")
        self.assertTemplateUsed(response, "snacks/snack_detail.html")

    def test_snack_create_view(self):
        response = self.client.post(
            reverse("snack_create"),
            {
                "name": "Doritos",
                "description": "doritos description",
                "purchaser": self.user.id,
            },
            follow=True,
        )

        self.assertRedirects(response, reverse("snack_list"))

    def test_snack_update_view_redirect(self):
        response = self.client.post(
            reverse("snack_update", args="1"),
            {"name": "Updated name", "description": "new description", "purchaser": self.user.id},
        )
        self.assertRedirects(response, reverse("snack_list"))

    def test_snack_delete_view(self):
        response = self.client.get(reverse("snack_delete", args="1"))
        self.assertEqual(response.status_code, 200)
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

# Django API Notes

## Links & Resources

- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Django Cors Headers](https://github.com/adamchainz/django-cors-headers)
- [Django Rest Framework Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html)

## Commands

- `poetry init -n`
- `poetry add Django`
- `poetry add djangorestframework`
- `poetry add django-cors-headers`
- `poetry add djangorestframework-simplejwt`
- `poetry add coverage`
- `poetry add pyyaml`
- `poetry add uritemplate`
- `poetry add coreapi`
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

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Add apps to INSTALLED_APPS

- rest_framework
- corsheader
- rest_framework_simplejwt.token_blacklist
- "users" was something we created to modify built in User

Example:

```python

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "corsheaders",
    "rest_framework_simplejwt.token_blacklist",
    "blog_api",
    "blog",
    "users",
]

```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Add REST_FRAMEWORK to settings.py

- Default permission classes - restframework
- Default authentication classes - jwt

Example:

```python
REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": ["rest_framework.permissions.AllowAny"],
    "DEFAULT_AUTHENTICATION_CLASSES": ("rest_framework_simplejwt.authentication.JWTAuthentication",),
    "DEFAULT_SCHEMA_CLASS": "rest_framework.schemas.coreapi.AutoSchema",
}
```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Add "corsheaders.middleware.CorsMiddleware" ABOVE "django.middleware.common.CommonMiddleware"

Example:

```python

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",  <--
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Add CORS_ALLOWED_ORIGINS to settings.py

Example:

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3001",
]
```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Add JWT Settings to settings.py

Example:

```python

from datetime import timedelta

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': True,
    'UPDATE_LAST_LOGIN': False,

    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUDIENCE': None,
    'ISSUER': None,
    'JWK_URL': None,
    'LEEWAY': 0,

    'AUTH_HEADER_TYPES': ('Bearer', 'JWT'),
    'AUTH_HEADER_NAME': 'HTTP_AUTHORIZATION',
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'USER_AUTHENTICATION_RULE': 'rest_framework_simplejwt.authentication.default_user_authentication_rule',

    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',

    'JTI_CLAIM': 'jti',

    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': timedelta(minutes=5),
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=1),
}

```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Add app urls to main urls

- add api-auth
- add token
- add token refresh

Example:

```python

from django.contrib import admin
from django.urls import path, include
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("admin/", admin.site.urls),
    path("api/", include("blog_api.urls", namespace="blog_api")),
    path("api/user/", include("users.urls", namespace="users")),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("", include("blog.urls", namespace="blog")),
    path("docs/", include_docs_urls(title="BlogAPI")),
    path(
        "schema",
        get_schema_view(title="BlogAPI", description="API for the BlogAPI", version="1.0.0"),
        name="openapi-schema",
    ),
]

```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Create Models

Example:

```python

from django.db import models
from django.utils import timezone
from django.conf import settings


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Post(models.Model):
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status="published")

    options = (("draft", "Draft"), ("published", "Published"))

    category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    title = models.CharField(max_length=250)
    excerpt = models.TextField(null=True)
    content = models.TextField()
    slug = models.SlugField(max_length=250, unique_for_date="published")
    published = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="blog_posts")
    status = models.CharField(max_length=10, choices=options, default="published")
    objects = models.Manager()  # default manager
    postobjects = PostObjects()  # our manager we created

    class Meta:
        ordering = ("-published",)

    def __str__(self):
        return self.title

```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Create Serializer for Models

```python

from rest_framework import serializers
from blog.models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("id", "title", "author", "excerpt", "content", "status")

```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Register Models

Example:

```python

from django.contrib import admin
from . import models


@admin.register(models.Post)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ("title", "id", "status", "slug", "author")
    prepopulated_fields = {
        "slug": ("title",),
    }


admin.site.register(models.Category)

```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Create Super User

- python manage.py createsuperuser

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Create url.py for api OR -> Use Routers

Example:

```python

from django.urls import path

from .views import PostList, PostDetail

app_name = "blog_api"

# int:pk means integer that is primary key
urlpatterns = [
    path("", PostList.as_view(), name="listcreate"),
    path("<int:pk>/", PostDetail.as_view(), name="detailcreate"),
]

```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Create Routers for url IN PLACE OF ORIGINAL URL

Example:

```python

from rest_framework.routers import DefaultRouter

from .views import PostList

app_name = "blog_api"

router = DefaultRouter()
router.register("", PostList, basename="post")
urlpatterns = router.urls


```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Create Views

Example:

```python

from rest_framework import generics, serializers
from rest_framework.permissions import (
    SAFE_METHODS,
    DjangoModelPermissions,
    IsAdminUser,
    BasePermission,
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)
from rest_framework import viewsets, filters
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

from blog.models import Post
from .serializers import PostSerializer

# We create a new Permission
class PostUserWritePermission(BasePermission):
    message = "Editing posts is restricted to the author only."

    # if methods are safe and author is the user
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.author == request.user


class PostList(viewsets.ModelViewSet):
    permission_classes = [PostUserWritePermission]
    serializer_class = PostSerializer
    queryset = Post.postobjects.all()

    # this allows us to capture slugs off the url to use in our search
    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get("pk")
        return get_object_or_404(Post, slug=item)

    # Define Custom QuerySet
    def get_queryset(self):
        return Post.objects.all()


```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Our Tokens for now

```json
{
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYzMDM1ODY2MCwianRpIjoiYmM4OWE4NTVlNzYyNDRlYzgxNWNiZTllYmIyZDY0MWYiLCJ1c2VyX2lkIjoxfQ.oz8y10htUX_HSpuRdMQlXWZ7qNyOMK6U7ghajKG5Omk",
  "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMwMjcyNTYwLCJqdGkiOiI4NjdjMjgxNjk5NzI0MGFiOGEzOWMwOTFlZDM4Y2M5NSIsInVzZXJfaWQiOjF9.tGi3OoDtxJesEVhVm0Xh6bC0dkyAQTwUAo9HQbVqfCQ"
}
```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Optional, create custom user model

- add models
- add serializer
- add views
- add to main url
- For the tutorial since we used our own user auth model, we have to add below to settings.py

```python
AUTH_USER_MODEL = "users.NewUser"
```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Add User Model

Example:

```python

from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


# These create a custom User model replacing Django's default
class CustomAccountManager(BaseUserManager):
    def create_superuser(self, email, user_name, first_name, password, **other_fields):

        other_fields.setdefault("is_staff", True)
        other_fields.setdefault("is_superuser", True)
        other_fields.setdefault("is_active", True)

        if other_fields.get("is_staff") is not True:
            raise ValueError("Superuser must be assigned to is_staff=True.")
        if other_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must be assigned to is_superuser=True.")

        return self.create_user(email, user_name, first_name, password, **other_fields)

    def create_user(self, email, user_name, first_name, password, **other_fields):

        if not email:
            raise ValueError(_("You must provide an email address"))

        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name, first_name=first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user


class NewUser(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(_("email address"), unique=True)
    user_name = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150, blank=True)
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(_("about"), max_length=500, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = CustomAccountManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["user_name", "first_name"]

    def __str__(self):
        return self.user_name

```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Create User Serializer

Example:

```python

from rest_framework import serializers
from users.models import NewUser


class RegisterUserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """

    # email = serializers.EmailField(required=True)
    # user_name = serializers.CharField(required=True)
    # password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = NewUser
        fields = ("email", "user_name", "password")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Create User Views

Example:

```python

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import RegisterUserSerializer
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken, Token


class CustomerUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        reg_serializer = RegisterUserSerializer(data=request.data)
        if reg_serializer.is_valid():
            newuser = reg_serializer.save()
            if newuser:
                return Response(status=status.HTTP_201_CREATED)
        return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlackListTokenView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

### Add Users Url

Example:

```python

from django.urls import path
from rest_framework.views import APIView
from .views import CustomerUserCreate, BlackListTokenView

app_name = "users"

urlpatterns = [
    path("register/", CustomerUserCreate.as_view(), name="create_user"),
    path("logoout/blacklist/", BlackListTokenView.as_view(), name="blacklist"),
]


```

<!--  -->
<!--  -->
<!-- -------------------------------------------------------------------------------------------------------- -->

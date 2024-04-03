from django.contrib.auth import login
from django.urls import path

from .views import index

urlpatterns = [
    path("login/", index)
]
from django.urls import path
from .views import index, LoginView

urlpatterns = [
    path("login/", index),
    path("", LoginView.as_view(template_name='login.html'))
]

from django.conf import settings
from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User
from django.contrib.auth.views import LoginView
from django.http import HttpResponse
from django.urls import reverse_lazy
from django.contrib.auth import views as auth_views


# class MyBackend(BaseBackend):
#     def authenticate(self, request, username=None, password=None):
#         login_valid = settings.ADMIN_LOGIN == username
#         pwd_valid = check_password(password, settings.ADMIN_PASSWORD)
#         if login_valid and pwd_valid:
#             try:
#                 user = User.objects.get(username=username)
#             except User.DoesNotExist:
#                 user = User(username=username)
#                 user.is_staff = True
#                 user.is_superuser = True
#                 user.save()
#             return user
#         return None
#
#     def get_user(self, user_id):
#         try:
#             return User.objects.get(pk=user_id)
#         except User.DoesNotExist:
#             return None

# class LoginUser(DataMixin, LoginView):
#     form_class = AuthenticationForm
#     template_name = 'Core/login.html'
#
#     def get_context_data(self, *, object_list=None, **kwargs):
#         context = super().get_context_data(**kwargs)
#         c_def = self.get_user_context(title="Авторизация")
#         return dict(list(context.items()) + list(c_def.items()))


class CustomLoginView(auth_views.LoginView):
    template_name = "login.html"


class CustomPasswordResetView(auth_views.PasswordResetView):
    template_name = "password_reset_form.html"


class CustomPasswordResetDoneView(auth_views.PasswordResetDoneView):
    template_name = "password_reset_done.html"


class CustomPasswordResetConfirmView(auth_views.PasswordResetConfirmView):
    template_name = "password_reset_confirm.html"


class CustomPasswordResetCompleteView(auth_views.PasswordResetCompleteView):
    template_name = "password_reset_complete.html"

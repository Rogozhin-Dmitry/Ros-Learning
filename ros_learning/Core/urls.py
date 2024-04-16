from django.contrib.auth.views import PasswordResetView, PasswordResetDoneView
from django.urls import path
from .views import CustomLoginView, CustomPasswordResetView, CustomPasswordResetDoneView, \
    CustomPasswordResetConfirmView, CustomPasswordResetCompleteView

urlpatterns = [
    path("login/", CustomLoginView.as_view(), name='login'),
    path('password-reset/', CustomPasswordResetView.as_view(), name='password_reset'),
    path('password-reset/done/', CustomPasswordResetDoneView.as_view(), name='password_reset_done'),
    path('password-reset/password_reset_confirm/<uidb64>/<token>/', CustomPasswordResetConfirmView.as_view(),
         name='password_reset_confirm'),
    path('password-reset/complete/', CustomPasswordResetCompleteView.as_view(), name='password_reset_complete')
]

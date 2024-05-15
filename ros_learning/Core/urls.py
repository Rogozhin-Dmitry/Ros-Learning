from django.contrib.auth.views import PasswordResetView, PasswordResetDoneView
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from .views import (
    CustomLoginView,
    CustomPasswordResetView,
    CustomPasswordResetDoneView,
    CustomPasswordResetConfirmView,
    CustomPasswordResetCompleteView,
    Courses,
    Tasks,
    Lessons,
    Materials
)

urlpatterns = [
    path("login/", CustomLoginView.as_view(), name="login"),
    path("password-reset/", CustomPasswordResetView.as_view(), name="password_reset"),
    path("password-reset/done/", CustomPasswordResetDoneView.as_view(), name="password_reset_done"),
    path(
        "password-reset/password_reset_confirm/<uidb64>/<token>/", CustomPasswordResetConfirmView.as_view(),
        name="password_reset_confirm"
    ),
    path("password-reset/complete/", CustomPasswordResetCompleteView.as_view(), name="password_reset_complete"),
    path("user_catalog/courses/", Courses.as_view(), name="courses"),
    path("user_catalog/courses/<int:course_pk>/lessons/", Lessons.as_view(), name="lessons"),
    path("user_catalog/courses/<int:course_pk>/lessons/<int:lesson_pk>/tasks", Tasks.as_view(), name="tasks"),
    path("user_catalog/courses/<int:course_pk>/lessons/<int:lesson_pk>/tasks/<int:task_pk>/materials", Materials.as_view(),
         name="tasks"),
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

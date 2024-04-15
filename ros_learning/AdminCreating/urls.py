from django.urls import path
from AdminCreating.views import CreatingTasks

urlpatterns = [
    path("admin-catalog/CreateTasksPage", CreatingTasks.as_view(), name="CreateTasksPage"),

]

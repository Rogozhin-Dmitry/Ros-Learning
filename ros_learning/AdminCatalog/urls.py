from django.urls import path
from AdminCatalog.views import CreatingCourses
from AdminCatalog.views import Courses
from AdminCatalog.views import Tasks

urlpatterns = [
    path("admin-catalog/CreateCoursesPage", CreatingCourses.as_view(),
         name="CreateCoursesPage"),
    path("admin-catalog/CoursesPage", Courses.as_view(), name="CoursesPage"),
    path("admin-catalog/Tasks", Tasks.as_view(), name="Tasks"),
]

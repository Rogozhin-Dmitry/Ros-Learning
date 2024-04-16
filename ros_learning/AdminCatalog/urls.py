from django.urls import path
from .views import Courses
from .views import Tasks
from .views import Lessons
from .views import CreateCourse

app_name = 'courses'

urlpatterns = [
    path("admin-catalog/courses/", Courses.as_view(), name="courses"),
    path("admin-catalog/courses/<int:pk>/lessons", Lessons.as_view(), name="lessons"),
    path("admin-catalog/courses/createCourse", CreateCourse.as_view(), name="lessons"),
    # path("admin-catalog/courses/<int:pk>/lessons/<int:pk>/tasks", Tasks.as_view(), name="tasks"),
]

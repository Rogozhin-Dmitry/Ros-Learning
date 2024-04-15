from django.http import HttpResponse
from django.shortcuts import render
from django.views import View
from AdminCatalog.control import Controll


class CreatingCourses(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse("<h1>CreatingCourses</h1>")


class Courses(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'Courses/courses.html',
                      {'courses': Controll.courses, 'courses_name': 'Settings'})


class Tasks(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse("<h1>Tasks</h1>")

from django.http import HttpResponse
from django.shortcuts import render
from django.views import View


class CreatingCourses(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse("<h1>CreatingCourses</h1>")


class Courses(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse("<h1>Courses</h1>")


class Tasks(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse("<h1>Tasks</h1>")

from django.http import HttpResponse
from django.shortcuts import render
from django.views import View
from .control import Controll


class Courses(View):
    def get(self, request, *args, **kwargs):
        return render(request, "courses/courses.html",
                      {"courses": Controll.get_user_courses(request.user.id)})

    def post(self, request, *args, **kwargs):
        return render(request, "courses/courses.html",
                      {"courses": Controll.get_user_courses(request.user.id)})

    def update(self, request, *args, **kwargs):
        return render(request, "courses/courses.html",
                      {"courses": Controll.get_user_courses(request.user.id)})

    def delete(self, request, *args, **kwargs):
        return render(request, "courses/courses.html",
                      {"courses": Controll.get_user_courses(request.user.id)})


class CreateCourse(View):
    def post(self, request, *args, **kwargs):
        Controll.create_course()
        return render(request, "courses/courses.html",
                      {"courses": Controll.get_user_courses(request.user.id)})


class Lessons(View):
    def get(self, request, *args, **kwargs):
        return render(request, "lessons/lessons.html",
                      {"lessons": Controll.get_user_lessons(request.user.id)})


class Tasks(View):
    def get(self, request, *args, **kwargs):
        return render(request, "tasks/tasks.html",
                      {"tasks": Controll.get_user_tasks(request.user.id)})

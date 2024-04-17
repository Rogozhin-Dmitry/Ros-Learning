import json

from django.http import JsonResponse
from django.shortcuts import render
from django.views import View

from .control import Controll


class Courses(View):
    def get(self, request, *args, **kwargs):
        return render(request, "courses/courses.html", {"courses": Controll.get_user_courses(request.user.id)})

    def post(self, request, *args, **kwargs):
        return render(request, "courses/courses.html", {"courses": Controll.get_user_courses(request.user.id)})

    def update(self, request, *args, **kwargs):
        return render(request, "courses/courses.html", {"courses": Controll.get_user_courses(request.user.id)})

    def delete(self, request, *args, **kwargs):
        return render(request, "courses/courses.html", {"courses": Controll.get_user_courses(request.user.id)})


class CreateCourse(View):
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body.decode("utf-8"))
        print(data)
        # Controll.create_course()
        return JsonResponse({"status": "ok"})


class Lessons(View):
    def get(self, request, *args, **kwargs):
        return render(request, "lessons/lessons.html", {"lessons": Controll.get_courses_lessons(kwargs["courses_pk"])})


class Tasks(View):
    def get(self, request, *args, **kwargs):
        return render(request, "tasks/tasks.html", {"tasks": Controll.get_lessons_tasks(kwargs["courses_pk"], kwargs["lesson_pk"])})

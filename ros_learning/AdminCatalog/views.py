import json

from django.http import JsonResponse
from django.shortcuts import render
from django.views import View

from .control import Controll


class Courses(View):
    def get(self, request, *args, **kwargs):
        context = {
            "courses": Controll.get_user_courses(request.user.id)
        }
        return render(request, "courses/courses.html", context=context)

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body.decode("utf-8"))
        print(data)
        # Controll.create_course()
        return JsonResponse({"status": "ok"})

    def update(self, request, *args, **kwargs):
        context = {
            "courses": Controll.get_user_courses(request.user.id)
        }
        return render(request, "courses/courses.html", context=context)

    def delete(self, request, *args, **kwargs):
        context = {
            "courses": Controll.get_user_courses(request.user.id)
        }
        return render(request, "courses/courses.html", context=context)


class Lessons(View):
    def get(self, request, *args, **kwargs):
        return render(request, "lessons/lessons.html",
                      {"lessons": Controll.get_courses_lessons(kwargs["courses_pk"])})

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body.decode("utf-8"))
        print(data)
        # Controll.create_lesson()
        return JsonResponse({"status": "ok"})

    def delete(self, request, *args, **kwargs):
        context = {
            "lessons": Controll.get_courses_lessons(kwargs["courses_pk"])
        }
        return render(request, "lessons/lessons.html", context=context)


class Tasks(View):
    def get(self, request, *args, **kwargs):
        return render(request, "tasks/tasks.html",
                      {"tasks": Controll.get_courses_lessons(kwargs["courses_pk"])})

    def post(self, request, *args, **kwargs):
        data = json.loads(request.body.decode("utf-8"))
        print(data)
        # Controll.create_task()
        return JsonResponse({"status": "ok"})

    def delete(self, request, *args, **kwargs):
        context = {
            "tasks": Controll.get_lessons_tasks(kwargs["courses_pk"], kwargs["lesson_pk"])
        }
        return render(request, "tasks/tasks.html", context=context)

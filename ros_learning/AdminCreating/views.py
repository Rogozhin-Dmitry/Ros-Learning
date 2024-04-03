from django.http import HttpResponse
from django.shortcuts import render
from django.views import View


# Create your views here.

class CreatingTasks(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse("<h1>CreatingTasks</h1>")

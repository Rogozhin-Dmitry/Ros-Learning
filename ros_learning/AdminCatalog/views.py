from django.http import HttpResponse
from django.shortcuts import render
from django.views import View
from django.shortcuts import render, get_object_or_404
from .models import Material
from .forms import MaterialForm

class CreatingCourses(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse("<h1>CreatingCourses</h1>")


class Courses(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse("<h1>Courses</h1>")


class Tasks(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse("<h1>Tasks</h1>")
# views.py



def material_detail(request, pk):
    material = get_object_or_404(Material, pk=pk)
    return render(request, 'material_detail.html', {'material': material})

def material_edit(request, pk=None):
    if pk:
        material = get_object_or_404(Material, pk=pk)
    else:
        material = Material()

    if request.method == 'POST':
        form = MaterialForm(request.POST, instance=material)
        if form.is_valid():
            form.save()
            return redirect('material_detail', pk=material.pk)
    else:
        form = MaterialForm(instance=material)

    return render(request, 'material_edit.html', {'form': form})

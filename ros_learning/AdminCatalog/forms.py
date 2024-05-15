from django import forms
from .models import Material

class MaterialForm(forms.ModelForm):
    class Meta:
        model = Material
        fields = ['title', 'video_src', 'description']
        widgets = {
            'description': forms.Textarea(attrs={'rows': 10, 'cols': 80}),
        }
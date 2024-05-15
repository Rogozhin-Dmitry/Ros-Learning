from django.db import models
from tinymce.models import models as tinymce_models
class Material(models.Model):
    title=models.CharField(max_length=255)
    video_src=models.CharField(max_length=255)
    description=tinymce_models.TextField(max_length=1000)
    def __str__(self):
        return self.title
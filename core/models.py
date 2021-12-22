from django.db import models


def image_upload_to(instance, filename):
    old_instance = Portfolio.objects.get(pk=instance.pk)
    old_instance.image.delete()
    return filename


class Portfolio(models.Model):
    image = models.ImageField("Imagen", upload_to=image_upload_to)
    name = models.CharField("Nombre", max_length=50)
    description = models.CharField("Descripcion", max_length=50)
    link = models.URLField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

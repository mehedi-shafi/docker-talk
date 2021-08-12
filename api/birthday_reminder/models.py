from django.db import models

# Create your models here.

class Contact(models.Model):
    name = models.TextField(max_length=100)
    date_of_birth = models.DateField()
    thumbnail = models.ImageField(upload_to='thumbnails')

    class Meta:
        db_table = 'contacts'
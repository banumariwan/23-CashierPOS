from django.db import models
from django.contrib.auth.models import User

class Movie(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    genre = models.CharField(max_length=50)
    duration = models.PositiveIntegerField()  # minutes
    release_date = models.DateField()
    poster_url = models.URLField(blank=True, null=True)
    def __str__(self): return self.title

class Theater(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=150)
    capacity = models.PositiveIntegerField()
    def __str__(self):

        return self.name

class Screening(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE,related_name='screenings')
    theater = models.ForeignKey(Theater, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    available_seats = models.PositiveIntegerField()
    def __str__(self):
        return f"{self.movie} at {self.time}"

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    screening = models.ForeignKey(Screening, on_delete=models.CASCADE)
    seats = models.PositiveIntegerField()
    booked_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.user} - {self.screening}"

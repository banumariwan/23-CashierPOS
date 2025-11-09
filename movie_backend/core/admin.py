from django.contrib import admin
from .models import Movie, Theater, Screening, Booking

admin.site.register(Movie)
admin.site.register(Theater)
admin.site.register(Screening)
admin.site.register(Booking)

from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Movie, Theater, Screening, Booking

# -----------------------------
# Movie Serializer
# -----------------------------
class MovieSerializer(serializers.ModelSerializer):
    # Include nested screenings
    screenings = serializers.SerializerMethodField()

    class Meta:
        model = Movie
        fields = ['id', 'title', 'description', 'genre', 'duration', 'poster_url', 'screenings']

    def get_screenings(self, obj):
        # Get all screenings for this movie
        screenings = obj.screenings.all()
        return ScreeningSerializer(screenings, many=True).data

# -----------------------------
# Theater Serializer
# -----------------------------
class TheaterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theater
        fields = ['id', 'name', 'location', 'capacity']

# -----------------------------
# Screening Serializer
# -----------------------------
class ScreeningSerializer(serializers.ModelSerializer):
    movie_title = serializers.CharField(source='movie.title', read_only=True)
    theater_name = serializers.CharField(source='theater.name', read_only=True)

    class Meta:
        model = Screening
        fields = ['id', 'movie', 'movie_title', 'theater', 'theater_name', 'date', 'time', 'available_seats']

# -----------------------------
# Booking Serializer
# -----------------------------
class BookingSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    screening_detail = ScreeningSerializer(source='screening', read_only=True)

    class Meta:
        model = Booking
        fields = ['id', 'user', 'screening', 'screening_detail', 'seats', 'created_at']

# -----------------------------
# User Serializer
# -----------------------------
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

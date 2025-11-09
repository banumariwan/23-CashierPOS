from rest_framework import viewsets, permissions, filters
from rest_framework.response import Response
from django.db.models import Count
from .models import Movie, Theater, Screening, Booking
from .serializers import MovieSerializer, TheaterSerializer, ScreeningSerializer, BookingSerializer

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title','genre']

class TheaterViewSet(viewsets.ModelViewSet):
    queryset = Theater.objects.all()
    serializer_class = TheaterSerializer

class ScreeningViewSet(viewsets.ModelViewSet):
    queryset = Screening.objects.select_related('movie','theater').all()
    serializer_class = ScreeningSerializer

class BookingViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = BookingSerializer
    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class DashboardViewSet(viewsets.ViewSet):
    def list(self, request):
        data = {
            "total_movies": Movie.objects.count(),
            "total_screenings": Screening.objects.count(),
            "total_bookings": Booking.objects.count(),
            "upcoming_screenings": Screening.objects.filter(date__gte="2025-01-01").count(),
        }
        return Response(data)

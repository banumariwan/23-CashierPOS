from rest_framework.routers import DefaultRouter
from .views import MovieViewSet, TheaterViewSet, ScreeningViewSet, BookingViewSet, DashboardViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.urls import path

router = DefaultRouter()
router.register('movies', MovieViewSet)
router.register('theaters', TheaterViewSet)
router.register('screenings', ScreeningViewSet)
router.register('bookings', BookingViewSet,basename='booking')
router.register('dashboard', DashboardViewSet, basename='dashboard')

urlpatterns = router.urls + [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ContactViewSet

router = DefaultRouter()
router.register('birthday', ContactViewSet)

urlpatterns = router.urls
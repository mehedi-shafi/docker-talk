from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from rest_framework.documentation import include_docs_urls

doc_urls = include_docs_urls(title='DOCS')
router = DefaultRouter()

urlpatterns = [
    path('', doc_urls),
    path('api/admin/', admin.site.urls),
    path('api/', include('birthday_reminder.urls'))
]


urlpatterns += router.urls
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user_api/', include('apps.login_reg_app.urls')),
]

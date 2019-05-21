
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user_api/', include("login_reg_server.user_api.urls")),
]

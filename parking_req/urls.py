from django.urls import path

from . import views

app_name = 'parking_req'
urlpatterns = [
    path('', views.index, name='index'),
]
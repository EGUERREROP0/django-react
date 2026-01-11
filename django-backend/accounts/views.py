from django.shortcuts import render
from rest_framework import  generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework import  permissions
from rest_framework.response import Response


from .serializers import UserSerializer

# Create your views here.

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    permission_classes = [AllowAny]
    
class ProtectedView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        response = {
            'status': 'si permitido'
        }
        
        return Response(response)
    

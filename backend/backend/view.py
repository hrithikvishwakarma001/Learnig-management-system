from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import status

@api_view(['POST'])
def signup(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')

    if username and password and email:
        user = User.objects.create_user(username=username, password=password, email=email)
        user.set_password(password)
        user.save()
        if user:
            return Response({
                'message': 'User registered successfully',
                'status': 201,
            })
    return Response({
        'message': 'User registration failed',
        'status': 400,
    })

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)
    if not user.check_password(password):
        return Response("missing user", status=status.HTTP_404_NOT_FOUND)
    if user:
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'message': 'Login successful',
            'status': 200,
            'token': token.key
        })
    else:
        return Response({
            'message': 'Invalid credentials',
            'status': 401
        })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def test_token(request):
    return Response({
        'message': 'Token is valid',
        'status': 200
    })
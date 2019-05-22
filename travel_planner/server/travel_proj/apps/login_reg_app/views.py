from django.shortcuts import HttpResponse
from .models import User
from django.forms.models import model_to_dict
from datetime import datetime
import json
import bcrypt

def register(request):
    if request.method == "POST":
        reg_dict = json.loads(request.body.decode())
        errors = User.objects.register_validator(reg_dict)
        if len(errors) > 0:
            serialized_errors = json.dumps(errors)
            return HttpResponse(serialized_errors, content_type="application/json", status=400)
        else:
            new_user = User.objects.create(
                first_name=reg_dict['first_name'],
                last_name=reg_dict['last_name'],
                birthday=reg_dict['birthday'],
                email=reg_dict['email'],
                password= bcrypt.hashpw(reg_dict['password'].encode(), bcrypt.gensalt()).decode()
            )
            dict_obj = model_to_dict(new_user, fields=['id','first_name', 'last_name', 'birthday', 'email'])
            serialized_user = json.dumps(dict_obj)
            return HttpResponse(serialized_user, content_type="application/json", status=200)
    

def login(request):
    if request.method == "POST":
        login_dict = json.loads(request.body.decode())
        errors = User.objects.login_validator(login_dict)
        if len(errors) > 0:
            serialized_errors = json.dumps(errors)
            return HttpResponse(serialized_errors, content_type="application/json", status=400)
        else:
            user = User.objects.get(email=login_dict['email'])
            user.birthday = datetime.strftime(user.birthday, '%Y-%m-%d')
            dict_obj = model_to_dict(user, fields=['id','first_name', 'last_name', 'birthday', 'email'])
            serialized_user = json.dumps(dict_obj)
            return HttpResponse(serialized_user, content_type="application/json", status=200)
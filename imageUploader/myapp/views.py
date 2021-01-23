from django.shortcuts import render,redirect
from django.contrib import messages
from .forms import imageForm
from .models import Image
import datetime
# Create your views here.
def home(request):
    if request.method=="POST":
        form=imageForm(request.POST,request.FILES)
        if form.is_valid():
            form.save()
            return redirect('/')
    form=imageForm()
    img= Image.objects.all()
    mydate=datetime.datetime.now() 
    return render(request,'home.html',{'form':form,'img':img,'mydate':mydate})

def delete(request, postId):
    image =Image.objects.filter(pk=postId)
    image.delete()
    messages.info(request, "photo deleted")
    return redirect('/')


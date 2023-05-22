from django.shortcuts import render, redirect
from .models import Cities
from django.http import HttpResponse
from django.views.generic import DetailView, UpdateView, DeleteView
from .models import ClientCall
from .forms import ClientCallForm

def index(request):
    cities = Cities.objects.all()
    data = {
        'cities': cities,
        'firstCity': next(iter(cities))
        }
    return render(request, 'main/index.html', data)

def clientCall(request):
    if request.method == 'POST': 
        print("Это POST запрос")
        data = {
            "name": request.POST['name'],
            "phone": request.POST['phone']
        }
        form = ClientCallForm(data)
        form.save()

    return redirect('main')

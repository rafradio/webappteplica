from .models import ClientCall
from django.forms import ModelForm

class ClientCallForm(ModelForm):
    class Meta:
        model = ClientCall
        fields = ['name', 'phone']
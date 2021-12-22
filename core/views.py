from django.shortcuts import render, redirect
from django.core.mail import EmailMessage
from django.conf import settings

from .forms import ContactForm
from .models import Portfolio


def home(request):
    projects = Portfolio.objects.all()
    form = ContactForm()
    if request.method == "POST":
        form = ContactForm(data = request.POST)
        if form.is_valid():
            name = request.POST.get('name', '')
            email = request.POST.get('email', '')
            content = request.POST.get('content', '')
            # Enviamos el correo y redireccionamos
            email = EmailMessage(
                'FullCodeCo: Nuevo mensaje',
                'De {} <{}> \n\nEscribio:\n\n{}'.format(name,email,content),
                settings.EMAIL_HOST_USER,
                ['luisfernando_contreras@protonmail.com',],
                reply_to=[email],
            )
            email.send()
            return redirect('/?ok')

    return render(request, 'core/index.html', {'form':form, 'projects':projects})

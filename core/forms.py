from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(label="Nombre", widget=forms.TextInput(
        attrs = {'class':'autocomplete'}
    ))
    email = forms.EmailField(label="Correo Electronico", widget=forms.EmailInput(
        attrs = {'class':'autocomplete'}
    ))
    content = forms.CharField(label="Mensaje", widget=forms.Textarea(
        attrs = {'class':'materialize-textarea'}
    ))

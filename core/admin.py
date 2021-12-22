from django.contrib import admin
from .models import Portfolio


class PortfolioAdmin(admin.ModelAdmin):
    readonly_fields = ['updated', 'created']


admin.site.register(Portfolio, PortfolioAdmin)

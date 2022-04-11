from django.contrib import admin
from projeto5_website.models import Pergunta, Alternativa, Teste, Resultado, Aluno, Turma
# Register your models here.

class ResultadoAdmin(admin.ModelAdmin):
    list_display = ('aluno', 'dominancia', 'cautela', 'estabilidade', 'influencia')
    search_fields = ('aluno__ra__icontains',)


class AlunoAdmin(admin.ModelAdmin):
    list_display = ('ra', 'nome', 'email')
    search_fields = ('ra__icontains', 'nome__icontains')

admin.site.register(Pergunta)
admin.site.register(Alternativa)
admin.site.register(Teste)
admin.site.register(Resultado, ResultadoAdmin)
admin.site.register(Aluno, AlunoAdmin)
admin.site.register(Turma)
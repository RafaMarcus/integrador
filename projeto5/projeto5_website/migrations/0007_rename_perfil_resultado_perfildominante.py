# Generated by Django 4.0.3 on 2022-04-29 01:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projeto5_website', '0006_resultado_perfil'),
    ]

    operations = [
        migrations.RenameField(
            model_name='resultado',
            old_name='perfil',
            new_name='perfildominante',
        ),
    ]
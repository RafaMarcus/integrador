# Generated by Django 4.0.3 on 2022-04-26 00:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projeto5_website', '0004_resultado_empregado'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='resultado',
            name='empregado',
        ),
    ]
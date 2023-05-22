from django.db import models

class Cities(models.Model):
    city = models.CharField('Город', max_length=45)
    phone = models.CharField('Телефон', max_length=20)

    def __str__(self):
        return self.city

class ClientCall(models.Model):
    name = models.CharField('Город', max_length=250)
    phone = models.CharField('Телефон', max_length=20)

class Goods(models.Model):
    name = models.CharField('Наименование', max_length=450)
    price = models.DecimalField('Цена', max_digits=10, decimal_places=2)
    photo = models.CharField('Фото', max_length=450)
    quantity = models.IntegerField('Колличество')
    flag = models.IntegerField('Флаг')
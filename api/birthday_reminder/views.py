from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from birthday_reminder.models import Contact
from birthday_reminder.serializers.contact_serializer import ContactSerializer


class ContactViewSet(viewsets.ModelViewSet):

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    @action(methods=['GET'], detail=False)
    def month(self, request, pk=None):

        _month = request.GET['month']

        self.queryset = Contact.objects.filter(date_of_birth__month=_month)

        serialized = self.serializer_class(self.queryset, many=True)

        return Response(serialized.data)
Set up your virtual environment

pipenv --three
pipenv install #can make last line of pipenv be 3 instead of 3.7 to suport later
pipenv shell #pits in VM you can confirm by project preceding promp in bash/teminal
# to exit SHELL type "exit"

# make a project
django-admin # ***** this on its own will list the comants
django-admin startproject project_name #to make a dejango project
# NOTE!!!! Had already been done for this project that is there the "manage.py" and so on came from
# NAME == adv_project , SEE THAT FOLDER
django-admin startproject project_name . # would make this in the same dire and have setting files in ssub dir like is in our MUD
00OUR PROJECT adv_project/settings.py


django-admin startapp app_name #makes an app
#NOTE!!!his seems to have already been done for the MUD, SEE "adventure" folder
#IN YOUR PROJECT SETTING eddit
"""
INSTALLED_APPS = [
    'app_name'
]
""" # DONE FOR US IT SEEMS, but you put the app here so it will call those calsses

#to run server
python manage.py runserver
# needs secret, NOT SURE WHICH ONE THIS IS, but will let you try and run it with the PUSHER VALUES IN, but think we have another sevret
#MAKE ADMIN USER
python manage.py createsuperuser # https://docs.djangoproject.com/en/1.8/intro/tutorial02/
# to use you need to register your modle adventure/admin.py
#INSIDE app_name sdmin.py file
from .models import Class
admin.site.register(Class)



#######################
### MIGRATIONS
python manage.py showmigrations # will show the Migrations
# { } == NOT run, [X] == run

python manage.py sqlmigrate folder migration#will show you what the migrations would be

###EXSAMPLE RESULT
account
 [ ] 0001_initial
 [ ] 0002_email_max_length
###EXSAMPLE SHOW MIGRATION
python manage.py sqlmigrate account 0001_initial


# READ ME STEP TO DO A MIGRATION
python manage.py makemigrations # like in kenex imports the ones you make, you check thery are there with the "showmigrations" frm above
python manage.py migrate # what was done in the TK vid

python manage.py makemigrations && python manage.py migrate && python manage.py showmigrations && python manage.py createsuperuser

#MAKE SEEMS TO BE LIKE KNEX MAKE
Migrations for 'adventure':
  adventure/migrations/0001_initial.py
    - Create model Room
    - Create model Player
## WHICH WERE ALREADY MADE in adventure model



###PART 2
# CS12: Intro to Django: GraphQL and Graphene
# relvent info start 1 h 10 min in
https://docs.graphene-python.org/projects/django/en/latest/installation/

pipenv install graphene-django #to install and add to pipenv set up

# add to settings
INSTALLED_APPS = [
    ...
    'django.contrib.staticfiles', # Required for GraphiQL
    'graphene_django'
] # adv_project/settings.py

# add to urls
from django.conf.urls import url
from graphene_django.views import GraphQLView

urlpatterns = [
    # ...
    url(r"graphql", GraphQLView.as_view(graphiql=True)),
] # adv_project/urls.py

##LESS DTAILED ABOUT 1h 20 MIn in he makes the schema in the app folder which ould be out "adventure"




./manage.py shell < ./util/file_name

./manage.py shell < ./util/test2.py



#####NOTE
uuid is a random value gen good for IDs and what not

adv_project/urls.py #ENDPOINTS ARE FOUND

* Install pipenv to install other packages into the pipenv virtual environment. 

`root> pip install pipenv`

* To activate pipenv 

`root> pipenv shell`          

* Packages

`root> pipenv install djangorestframework`

`root> pipenv install mysqlclient`

`root> pipenv install django-cors-headers`

`root> pipenv install PyJWT`

* Create django project

`root> django-admin startproject auth`

* Create django app

`cd auth`

`root>auth> django-admin startapp users`

* Run server

`root>auth> python manage.py runserver`

* Create migrations file

`root>auth> python manage.py makemigrations`

* Update database

`root>auth> python manage.py migrate`





Reference
https://www.youtube.com/watch?v=PUzgZrS_piQ&list=PLlameCF3cMEtfyO6H7WXUAqoIJO21bDNp

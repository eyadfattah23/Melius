# Melius

portfolio project for alx, a web app that will help you beat porn addiction in complete secrecy.

## Packages to install

```sh
  pip install passlib
  pip install pep8
```

## Database credentials

MELIUS_MYSQL_USER="melius_dev"

MELIUS_MYSQL_PWD="Melius_dev_pwd123"

MELIUS_MYSQL_HOST="localhost"

MELIUS_MYSQL_DB="melius_dev_db"

## commands to run:

```bash
MELIUS_MYSQL_USER="melius_dev" MELIUS_MYSQL_PWD="Melius_dev_pwd123" MELIUS_MYSQL_HOST=localhost MELIUS_MYSQL_DB=melius_dev_db ./file
```

````bash
MELIUS_MYSQL_USER="melius_test" MELIUS_MYSQL_PWD="Melius_test_pwd123" MELIUS_MYSQL_HOST=localhost MELIUS_MYSQL_DB=melius_test_db ./file```
````

```bash
MELIUS_MYSQL_USER="melius_test" MELIUS_MYSQL_PWD="Melius_test_pwd123" MELIUS_MYSQL_HOST=localhost MELIUS_MYSQL_DB=melius_test_db python3 -m unittest discover tests
```

```bash
MELIUS_MYSQL_USER="melius_test" MELIUS_MYSQL_PWD="Melius_test_pwd123" MELIUS_MYSQL_HOST=localhost MELIUS_MYSQL_DB=melius_test_db python3 -m api.v1.app

```

### admin credentials:

```json
{
"email": "meliusadmin123@gmail.com",
"password": "Melius_Pass1#word",
"username": "Admin user"
}


{
"__class__": "User",
"created_at": "2024-09-08T23:15:58.641253",
"email": "meliusadmin123@gmail.com",
"id": "ee7cc318-76f6-4854-a7c5-69838b3541f0", //change or keep
"img": "resources/default_male_img.jpg",
"updated_at": "2024-09-08T23:15:58.641329",
"username": "Admin user"
}
```

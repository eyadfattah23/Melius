#!/usr/bin/env bash
# install required packages/liberaries/dependencies for deployment of melius web-app


sudo apt-get -y update
sudo apt-get -y upgrade

sudo apt-get -y install python3
sudo apt-get -y install python3-pip



sudo apt-get -y install nginx

sudo apt-get -y install ufw

sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow https
sudo ufw allow tcp
sudo ufw allow http
sudo ufw allow 5050
sudo ufw allow 5000



echo 'y'| sudo ufw enable


sudo apt -y install python3-venv

python -m venv new-venv

# source venv/bin/activate
# pip3 install -r requirements.txt

pip3 install gunicorn

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
sudo ufw allow http

echo 'y'| sudo ufw enable

pip3 install -r requirements.txt

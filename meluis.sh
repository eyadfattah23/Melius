#!/bin/bash

# Update package list
echo "Updating package list..."
apt-get update

# Install MySQL Server
echo "Installing MySQL Server..."
apt-get install -y mysql-server

# Install Node.js
echo "Installing Node.js..."
apt-get install -y nodejs

# Install npm
echo "Installing npm..."
apt-get install -y npm

# Install Python3 and pip
echo "Installing Python3..."
apt-get install -y python3

echo "Installing Python3-pip..."
apt-get install -y python3-pip python3-dev build-essential libssl-dev libffi-dev python3-setuptools

# Install venv
echo "Installing venv..."
python -m venv new-venv

# Activate venv
source new-venv/bin/activate

# Install Gunicorn
echo "Installing Gunicorn..."
pip3 install gunicorn

# Install Nginx
echo "Installing Nginx..."
apt-get install -y nginx


# Clone Repository
REPO_DIR="/var/Melius"
echo "Cloning repository..."
if [ ! -d "$REPO_DIR" ]; then
  git clone https://github.com/eyadfattah23/Melius.git "$REPO_DIR"
fi

# Create Database
echo "Creating database..."
mysql -u root < "$REPO_DIR/setup_mysql_dev.sql"

# Install Python Dependencies
echo "Installing Python dependencies..."
pip3 install -r "$REPO_DIR/requirements.txt"

# Install npm Dependencies
echo "Installing npm dependencies..."
cd "$REPO_DIR/frontend" || exit
npm install

# Build the application 
echo "Building the application..."
npm run build

# Add the vhost to Nginx
VHOST_CONFIG="/etc/nginx/sites-available/melius"
echo "Setting up Nginx vhost..."

cat > "$VHOST_CONFIG" <<EOL
server {
    listen 80;
    server_name 142.93.38.10; # Replace with your IP address or domain name

    root $REPO_DIR/frontend;
    index index.html;

    location / {
        try_files \$uri /index.html;
    }
}
EOL

# Enable the vhost configuration
ln -s "$VHOST_CONFIG" /etc/nginx/sites-enabled/

# Test Nginx configuration and restart the service
echo "Testing Nginx configuration..."
nginx -t

echo "Restarting Nginx..."
systemctl restart nginx

# Set environment variables and start Flask API
echo "Setting environment variables and starting Flask API..."
export MELIUS_MYSQL_USER="melius_dev"
export MELIUS_MYSQL_PWD="Melius_dev_pwd123"
export MELIUS_MYSQL_HOST="localhost"
export MELIUS_MYSQL_DB="melius_dev_db"

# Start the Flask API using Gunicorn on port 5050
echo "Starting Gunicorn to serve the Flask API on port 5050..."
cd "$REPO_DIR" || exit
gunicorn --workers 3 --bind 0.0.0.0:5050 api.v1.app:app &

echo "Application setup complete and available on 142.93.38.10"

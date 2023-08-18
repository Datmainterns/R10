#!/bin/bash

#git installation
if git --version >/dev/null 2>&1; then
	echo "Git is already installed."
        git --version
        echo "********************"
elif command -v apt-get >/dev/null 2>&1; then
    package_manager="apt-get"
else
    echo "Unable to determine the package manager. Please install Git manually."
    exit 1
fi

lsif [ "$package_manager" = "apt-get" ]; then
    echo "$(git --version)"
fi
git --version >/dev/null 2>&1;
if [ $? -ne 0 ];then
echo "Git installation failed."
echo "need to cleanup"
sudo apt-get remove git

fi


#docker installation
if docker --version >/dev/null 2>&1; then
    echo "Docker is already installed."
     docker --version
     echo "********************"
elif command -v apt-get >/dev/null 2>&1; then
    sudo apt install docker.io -y
else
    echo "Unable to determine the package manager. Please install Docker manually."
    exit 1
fi

docker --version >/dev/null 2>&1;
if [ $? -ne 0 ];then
echo "docker installation failed."
echo "need to cleanup"
sudo apt-get purge -y docker.io
fi

#slack installation

if slack >/dev/null 2>&1; then
   echo "Slack is already installed."
    echo "********************"
elif command -v apt-get >/dev/null 2>&1; then
    sudo snap install slack --classic 
else
    echo "Unable to determine the package manager. Please install Slack manually."
    exit 1
fi

slack >/dev/null 2>&1;
if [ $? -ne 0 ];then
echo "slack installation failed."
echo "need to cleanup"
sudo snap remove slack
fi

#awscli installation


if aws --version >/dev/null 2>&1; then
   echo "AWS CLI is already installed."
     aws --version
     echo "********************"
elif command -v apt-get >/dev/null 2>&1; then
    sudo apt install -y awscli
else
    echo "Unable to determine the package manager. Please install AWS CLI manually."
    exit 1
fi

aws --version >/dev/null 2>&1;
if [ $? -ne 0 ]; then
echo "AWS CLI installation failed."
echo "need to cleanup"
sudo apt remove awscli
fi

#Azure installation

if az --version >/dev/null 2>&1; then
   echo "Azure CLI is already installed."
      az --version
      echo "********************"
elif command -v apt-get >/dev/null 2>&1; then
    sudo apt install azure-cli 
else
    echo "Unable to determine the package manager. Please install Azure CLI manually."
    exit 1
fi

az --version >/dev/null 2>&1;
if [ $? -ne 0 ]; then
echo "azure CLI installation failed."
echo "need to cleanup"
sudo apt remove azure-cli
fi


#pg admin installation

if pgadmin3 >/dev/null 2>&1; then
   echo "pgAdmin is already installed."
   pgadmin3 --version
   echo "********************"
elif command -v apt-get >/dev/null 2>&1; then
    sudo curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add -
    echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" | sudo tee /etc/apt/sources.list.d/pgadmin4.list
    sudo apt update
    sudo apt install -y pgadmin3
else
    echo "Unable to determine the package manager. Please install pgAdmin manually."
    exit 1
fi

pgadmin3 >/dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "pgAdmin installation failed. Cleaning up..."
    sudo apt remove -y pgadmin3
    exit 1
fi

#visual code installation

if code --version >/dev/null 2>&1; then
   echo "Visual code is already installed."
       code --version
       echo "********************"
elif command -v apt-get >/dev/null 2>&1; then
    sudo apt install --classic code
else
    echo "Unable to determine the package manager. Please install Visual code manually."
    exit 1
fi

code --version >/dev/null 2>&1;
if [ $? -ne 0 ];then
echo "Visual code installation failed."
echo "need to cleanup"
sudo apt remove code
fi


#mysql workbench community

if mysql-workbench-community --version >/dev/null 2>&1; then
   echo "MySQL Workbench is already installed."
   mysql-workbench-community --version
   echo "********************"
   exit 0
fi

if command -v apt-get >/dev/null 2>&1; then
           wget https://dev.mysql.com/get/mysql-apt-config_0.8.25-1_all.deb --no-check-certificate
	   sudo dpkg -i mysql-apt-config_0.8.25-1_all.deb
           sudo apt update
           sudo snap install mysql-workbench-community
      
else    
    echo "Unable to determine the package manager. Please install MySQL Workbench manually."
    exit 1
fi

mysql-workbench-community --version >/dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "MySQL Workbench installation failed. Cleaning up..."
    sudo snap remove mysql-workbench-community
    exit 1
fi

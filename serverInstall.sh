#!/bin/bash -x
#  Licensed to the Apache Software Foundation (ASF) under one
#  or more contributor license agreements.  See the NOTICE file
#  distributed with this work for additional information
#  regarding copyright ownership.  The ASF licenses this file
#  to you under the Apache License, Version 2.0 (the
#  "License"); you may not use this file except in compliance
#  with the License.  You may obtain a copy of the License at
#
#  http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing,
#  software distributed under the License is distributed on an
#  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
#  specific language governing permissions and limitations
#  under the License.

CAIRIS_ROOT=$HOME/cairis
export CAIRIS_SRC=$CAIRIS_ROOT/cairis
ROOTPW=$1
MAILSVR=$2
MAILPORT=$3
MAILUSER=$4
MAILPASSWD=$5

sudo systemctl stop cairis
sudo systemctl disable cairis

sudo apt-get -y install python3-dev build-essential mysql-server mysql-client graphviz docbook dblatex python3-pip python3-mysqldb python3-numpy git libmysqlclient-dev --no-install-recommends texlive-latex-extra docbook-utils inkscape libxml2-dev libxslt1-dev apache2 apache2-dev poppler-utils python3-setuptools pandoc apt-transport-https ca-certificates

sudo rm -rf $CAIRIS_ROOT
git clone https://github.com/cairis-platform/cairis $CAIRIS_ROOT
sudo -E $CAIRIS_ROOT/cairis/bin/installUI.sh

sudo pip3 install wheel
sudo pip3 install -r $CAIRIS_ROOT/requirements.txt
sudo pip3 install -r $CAIRIS_ROOT/wsgi_requirements.txt

echo -e "[mysqld]\nthread_stack = 256K\nmax_connections = 512\nmax_sp_recursion_depth = 255\nlog_bin_trust_function_creators = 1" | sudo tee /etc/mysql/conf.d/mysql.cnf

CMD1='flush privileges; set global log_bin_trust_function_creators = 1; flush privileges;  use mysql; update user set plugin="mysql_native_password" where User="root"; flush privileges; alter user "root"@"localhost" identified by "'
CMD2='"'
CMD="$CMD1$ROOTPW$CMD2"

sudo service mysql stop
sudo mkdir -p /var/run/mysqld
sudo chown mysql:mysql /var/run/mysqld
sudo /usr/bin/mysqld_safe --skip-grant-tables &
sleep 5
mysql -u root --execute="$CMD"
sudo pkill mysqld_safe
sudo pkill mysqld
sudo service mysql start

export PYTHONPATH=$CAIRIS_ROOT
$CAIRIS_ROOT/cairis/bin/server_setup_headless.py --rootDir=$CAIRIS_ROOT/cairis --dbRootPassword=$ROOTPW --webPort=8000 --logLevel=debug --mailServer=$MAILSVR --mailPort=$MAILPORT --mailUser=$MAILUSER --mailPasswd=$MAILPASSWD

SVCFILE="[Unit]\nDescription=cairisd\n\n[Service]\nUser=$USER\nWorkingDirectory=$CAIRIS_ROOT\nEnvironment=\"CAIRIS_CFG=$HOME/cairis.cnf\"\nEnvironment=\"PYTHONPATH=\${PYTHONPATH}:$CAIRIS_ROOT\"\nExecStart=mod_wsgi-express start-server $CAIRIS_ROOT/cairis/bin/cairis.wsgi\n --user www-data --group www-data Restart=on-failure\n\n[Install]\nWantedBy=multi-user.target"
echo -e $SVCFILE | sudo tee /etc/systemd/system/cairis.service

sudo systemctl enable /etc/systemd/system/cairis.service

sudo shutdown -Fr now

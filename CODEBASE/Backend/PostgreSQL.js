// CHECK STATUS
systemctl status postgresql

//other comands
Stop the service first: systemctl stop postgresql
Disable the service: systemctl disable postgresql
Check status: systemctl status postgresql
Start up when you want to use it: systemctl start postgresql
throw sudo in front if you get denied

//TO EXIT A READ OUT
\q

//to LIST databases
psql -l

//Conect to server/DB with PSQL
// 1) witch to defult user
sudo -iu postgres
//may need your user/sudo pass

// 2)

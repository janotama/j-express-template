database_name="svassa"
host_name="127.0.0.1"
user_name="root"
port_number="3306"
password=""

sequelize-auto -o "./models" -d $database_name -h $host_name -u $user_name -p $port_number -e mysql 
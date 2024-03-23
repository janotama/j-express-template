database_name="db_name"
host_name="127.0.0.1"
user_name="root"
port_number="3306"
password=""
table_name="table_name"

sequelize-auto -o "./src/models" -d $database_name -h $host_name -u $user_name -p $port_number -t $table_name -e mysql --caseModel p --caseFile p --underscored
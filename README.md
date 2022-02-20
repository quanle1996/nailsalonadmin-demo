# nailsalonadmin-demo

## Install PostgreSQL
WSL (ie. Ubuntu):
Open your WSL terminal (ie. Ubuntu).
Update your Ubuntu packages:
```sudo apt update```

Once the packages have updated, install PostgreSQL (and the -contrib package which has some helpful utilities) with: 
```sudo apt install postgresql postgresql-contrib```

Enter the command: ```sudo passwd postgres```
You will get a prompt to enter your new password.
Close and reopen your terminal.
To run PostgreSQL with psql shell:
Start your postgres service: ```sudo service postgresql start```

# MY CLIENT IS RISH
- Domaine name
- Server
- SSH connect to server
- #### Server settings
    - Update server \
        ```sudo apt update```
    - Install Git \
        ```sudo apt install git```
    - Clone the repository
    - Install NodeJS ( https://computingforgeeks.com/how-to-install-nodejs-on-ubuntu-debian-linux-mint/ )\
          ```sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates```\
          ```curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -```\
          ```sudo apt -y install nodejs```
- #### Install node_modules
   ``` cd react-mcir ``` \
   ``` npm install``` \
   ```npm run client:install``` \
   ```npm run client:build ``` 
- #### Settings config
    ```cd config``` \
    ```nano production.json``` 
    ```
    {
      "port": 80,
      "jwtSecret": "your secret key",
      "mongoUri": "mongo URI",
      "baseUrl": "DOMAIN Name"
    }
    ```


- ### Add Server IP-adress for MongoDB
- #### Try to run the project
   ```npm run start```\
    ```Cntr+C```
- ## Install PM2
    ```sudo npm install -g pm2```\
    ```cd react-mcir```\
    ```pm2 start npm -- start```\
    ```pm2 stop :id``` --- to stop
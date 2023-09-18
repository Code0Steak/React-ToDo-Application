# Instructions for setting-up the Application

The ***client* folder contains the React Application**, created using **'create-react-app'** framework.
The ***server* contains a GoLang webserver**, containing backend logic; viz. API handlers for CRUD operation on the ToDo list. 

### Step 1:
Clone the application 

### Step 2:
Open a terminal in the ***server*** folder. Run the following to add all the GoLang Dependencies:
```
go get ./...
```
The above command will install all the dependencies listed in the go.mod file

### Step 3:
Open a terminal in the ***client/rj-todo-app*** folder. Run the following to install all the dependencies required for the React application:
```
npm install
```

###step 4:
To start the ToDo application, you have to run the websever as well as the react client.
```
go run main.go //in the server. if Firewall is enabled allow access. This should start up the web-server
npm start //in the client/rj-todo-app folder
```

Then enter the URL: [http://localhost](http://localhost:3000/)http://localhost:3000/ to check the frontend app.

You should be greeted with the below screen.

Landing page:
![image](https://github.com/Code0Steak/React-ToDo-Application/assets/55844298/b5c13645-7c57-4bf0-82a8-c1e103a1e665)

Create Todo:
![image](https://github.com/Code0Steak/React-ToDo-Application/assets/55844298/14f6d94e-73ea-4105-83a2-794e7adc903f)

Added more Items:
![image](https://github.com/Code0Steak/React-ToDo-Application/assets/55844298/0ed8b324-007b-47a2-8685-654bff1ac891)

Tick off the completed task, this also affects the list stored on the server:
![image](https://github.com/Code0Steak/React-ToDo-Application/assets/55844298/316f9200-d842-40ad-bda6-a221b45d8afe)



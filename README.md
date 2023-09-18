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

![image](https://github.com/Code0Steak/React-ToDo-Application/assets/55844298/052e14cd-2969-4351-aa37-fd0747634fb0)

![image](https://github.com/Code0Steak/React-ToDo-Application/assets/55844298/8ad65bd1-930e-49af-8672-5f0894d2406f)

![image](https://github.com/Code0Steak/React-ToDo-Application/assets/55844298/5f0d50e1-93dd-4fed-9910-97183a062204)

![image](https://github.com/Code0Steak/React-ToDo-Application/assets/55844298/654c655c-bf6c-47b1-8acb-8a8b8e4aa274)

After adding more items:
![image](https://github.com/Code0Steak/React-ToDo-Application/assets/55844298/a51c9ce9-fa6f-426f-8d93-4ddfa49a3204)

You can tick-off items as complete:
![image](https://github.com/Code0Steak/React-ToDo-Application/assets/55844298/71a7fef5-750f-4ef4-8692-db456f06ee6f)



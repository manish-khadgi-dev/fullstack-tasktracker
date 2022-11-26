# Task Tracker Full Stack App

This app is build with MERN stack.
.... write something about the app what it does..

## How to use

1. Run `git clone <put git path>.
2. Run `cd <repo name>`
3. Run `npm install`
4. Run `npm run dev` . Note you must have `nodemon`, if not run `npm i nodemon -g` first.

Now your server will run at `http://localhost:8000`

## APIS

This api server handles all the task request and allow client to run `CRUD`
operation.

### Task Router

Task router follow the following url path `{rootURL}/api/v1/task`. More details as follows

| #                                                                    | PATH | METHOD | IS PRIVATE | DESCRIPTION                                                     |
| -------------------------------------------------------------------- | ---- | ------ | ---------- | --------------------------------------------------------------- |
| 1.                                                                   | `/`  | POST   | false      | This api allows client to send taskobject and store in database |
| the object should be in th following structure {task: "" , type: ""} |
| 2.                                                                   | `/`  | GET    | false      | This api allows client to send taskobject and store in database |
| 3.                                                                   | `/`  | PATCH  | false      | This api allows client to send taskobject and store in database |

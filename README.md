<div align="center"><img style = "width:100%;"src="https://i.imgur.com/X0Y3OVq.png"></img></div>
<hr>
<h2 align=center>tweteroo</h2>
<h3 align=center>Web development Project</h3>
<hr>
<h4 align=center>A Api based on twitter</h4>
<h4 align=center>First application made with Node.js</h4>
<hr>

## Features

- User can:
  - register and login
  - create a "tweet"
  - delete "tweet" 

## Requirements

- **POST** `/sign-up`
     - [x] It must receive (by the *body* of the *request*), a parameter **username** and an **avatar**, containing the username of the user and his avatar photo:
        
         ```jsx
         {
            username: "spongebob",
            avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
         }
         ```
        
     - [x] Save this user in an array of server users
     - [x] Finally, return the message `“OK”`
- **POST** `/tweets`
     - [x] Must receive (by the *body* of the *request*), the `username` and `tweet` parameters:
        
         ```jsx
         {
           username: "spongebob",
           tweet: "i love hub"
         }
         ```
        
     - [x] Save this *tweet* in an array of *tweets* on the server.
     - [x] Finally, return the message `“OK”` .
- **GET** `/tweets`
     - [x] Return the **10 last tweets** published

## Usage

> Clone the repository:

```bash
  git clone git@github.com:DanielCdOliveira/projeto11-tweteroo.git
```
- on folder /Back

>Install dependences:

```bash
  npm install
```
> Run aplication:

```bash
  node index.js
```

### Built with

![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

### Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/danielcdoliveira/

import { useState } from "react";
import Header from "../Components/Header/Header";
import "../styles/sidemenu.css";
import SideMenu from "../Components/SideMenu/SideMenu";
import "../styles/notification.css"
 function Notification (){
const [notification, setNotifications]=useState ( 
    [
        {
            "id":"1",
            "Author":{
                "name": "john Doe",
                src :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxn5DVOevswBNewfHx3_cdKHBwkgslPRZ_PUdKCrkSAZ3f9iFp',
                "href":"#"
                // username:'Danial Malik', 
                //     userImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxn5DVOevswBNewfHx3_cdKHBwkgslPRZ_PUdKCrkSAZ3f9iFp',
                //     Description:'Liked Your Post',
                //     type:'Like'
            },

            "text":"reacted to your post",
            "link":{
                "text":"Lorem ipsum doalor sit amet consectetur, adipisicing ElementInternals,unde,dol.",
                "href":"#"
            },
           "time":"10 min ago",
           "isUnread":true,

        },
        {
            "id":"2",
            "Author":{
                "name": "richard Miles",
                "src": "/Images/avatar1",
                "href":"#"
            },
            "text":"reacted to your post",
            "link":{
                "text":"Lorem ipsum dolor sit amet consectetur, adipisicing ElementInternals,unde,dol.",
                "href":"#"
            },
           "time":"10 min ago",
           "isUnread":true,

        },
        {
            "id":"3",
            "Author":{
                "name": "Brian Cumin",
                "src": "/Images/avatar1",
                "href":"#"
            },
            "text":"reacted to your post",
            "link":{
                "text":"Lorem ipsum dolor sit amet consectetur, adipisicing ElementInternals,unde,dol.",
                "href":"#"
            },
           "time":"1 week ago",
           "isUnread":false,

        },
        {
            "id":"4",
            "Author":{
                "name": "Lance Bogrol",
                "src": "/Images/avatar1",
                "href":"#"
            },
            "text":"reacted to your post",
            "image":{
                "src":"/Images/avatar1",
                "alt":"chess",
                "href":"#"
            },
           "time":"10 min ago",
           "isUnread":false,

        },
         {
            "id":"5",
            "Author":{
                "name":"Parsley Montana",
                "src": "/notificationimages/avatar1",
                "href":"#"
            },
            "text":"reacted to your post",

           "time":"10 min ago",
           "isUnread":false,

        },
         {
            "id":"6",
            "Author":{
                "name": "Brian Miles",
                "src": "/Images/avatar1",
                "href":"#"
            },
            "text":"reacted to your post",
            "link":{
                "text":"Lorem ipsum dolor sit amet consectetur, adipisicing ElementInternals,unde,dol.",
                "href":"#"
            },
           "time":"10 min ago",
           "isUnread":false,

        },
         {
            "id":"7",
            "Author":{
                "name": "richard Miles",
                "src":"/Images/avatar1",
                "href":"#"
            },
            "text":"reacted to your post",
            "link":{
                "text":"Lorem ipsum dolor sit amet consectetur, adipisicing ElementInternals,unde,dol.",
                "href":"#"
            },
           "time":"10 min ago",
           "isUnread":false,

        }
    ]
);
function markAllUnread(){
    setNotifications((prev) => prev.map(n => 
        ({...n, isUnread: false})))
}
 function handleNotificationClick(id){
    setNotifications((prev) => prev.map(n =>(
        n.id === id ? {...n, isUnread: false}: n
    )))
 }
    return (
        <div className="App">
             <SideMenu/>
             <Header />            
            <div className="container">
            <header>
                <div className="title">
            <h1>Notifications</h1>
            <span className="badge">
            {notification.filter(n => n.isUnread).length}
           </span>
           </div>
           <button id="mark" onClick={markAllUnread}>mark all as read</button>
            </header>





             { notification && notification.map
             ((n) => (
                <div  className="content"key={n.id} onClick={() => handleNotificationClick(n.id)}> 
                <img  src={n.Author.src} alt={n.Author.name} />

                <div>
                    
                    <a id="anchorTag" href={n.Author.href}>
                        {n.Author.name}
                    </a>
                    <p id="text">{n.text}</p>
                    {n.link &&(
                        <a href= {n.link.href}>{n.link.text} </a>
                    )}
                   {n.isUnread && (
                     <span className="isUnread">

                     </span>
                   )}
                    
                    <p className="time">{n.time}</p>
                    {n.privateMessage && (
                        <p className="privateMessage">{n.privateMessage}</p>
                    )}
                </div>
                {n.image &&(<a href={n.image.href}>
                    <img  src={n.image.src}alt={n.image.alt}/>
                </a>)}
                </div>
             )

             )}
              </div>
              </div> 

    ) 
}
export default Notification;
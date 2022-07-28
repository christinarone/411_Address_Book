import React, { useState, useEffect }  from "react";
//use effect deals with component life cycles
// component will do the following: will mount, will update, will un-mount
//we are using the "will mount" stage with an empty dependency <- (the [])
import './App.css' ;
import ContactCard from "./components.js/ContactCard";

function App() {
const [contacts, updateContacts] = useState([]);

useEffect(()=> {
  fetch('https://randomuser.me/api?results=25')
  .then((response) => response.json())
    .then((data) => {
    
        updateContacts(data.results)
      
    });
},[])

    //console.log(contacts)
    //let firstName = contacts[0]. name.first
    //console.log(contacts[0].name.first)

  return (
    <div className="App">
      {/* once we have the state "contacts", we want to map through our contacts
      to render individual components "ContactCard" (we need to map thru our data)
      every contact in our contacts is passed as a "prop" to the ContactCard*/}
      {contacts.map((contact, index)=>{
        return <ContactCard key={index} contact={contact} />
      })}
    </div>
  );
}

export default App;

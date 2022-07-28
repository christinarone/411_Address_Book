import React, { useState } from 'react'

export default function ContactCard(props) {
    const { contact } = props
    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    return (
        <div>
            {console.log(contact)}
            <h1>{contact.name.first}</h1>
            <img src={contact.picture.large} />
            {/* this is a ternary operator (the ?: are attached to it; 
                true or false(if this then that))*/}
            {isClicked
                ? (
                    <button onClick={handleClick}>Hide Details</button>
                )
                : (
                    <button onClick={handleClick}>Details</button>
                )}
                {/* this is a logical "&&" operator
                if it's true it renders the next thing(whatever follow the &)
                if false, it does nothing */}
            {isClicked && (
                <>
                    <p>{contact.email}</p>
                    <p>{contact.gender}</p>
                </>
            )}
        </div>
    )
}

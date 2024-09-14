import React,{useState} from 'react'

function Character({person}) { // ❗ Add the props
  const [rendering, setRendering] = useState(false)
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  const toggleHomeworld = () => {
    setRendering(!rendering)
  };

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      {/* Use the same markup with the same attributes as in the mock */}
        <h3 className="character-name">{person.name}</h3>
        <p>
          {rendering ? (
            
          <>  Planet: <span className="character-planet">{person.homeworld.name}</span> </> ) : null
          }
        </p>
    </div>
  )
}

export default Character

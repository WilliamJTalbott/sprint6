import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {

  const [planets, setPlanets] = useState()
  const [people, setPeople] = useState()
  const [joined, setJoined] = useState([])

  useEffect(() => {

        const fetchData = async () => {

          try {

            const [planetsResponse, peopleResponse] = await Promise.all([

              axios.get(urlPlanets),
              axios.get(urlPeople)

            ]);

            setPlanets(planetsResponse.data)
            setPeople(peopleResponse.data)
            
            const joinedData = peopleResponse.data.map(person => {const homeworld = planetsResponse.data.find(

              planet => planet.id === person.homeworld

            )
              return {...person, homeworld}
          })
          setJoined(joinedData);
          console.log (joinedData)
          }
          
          catch (err){
            console.log(err)
          }

        }

        fetchData();

      },[])

  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {joined.map(person => (

        <Character key={person.id} person = {person}/>

      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App

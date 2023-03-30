import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchQuery, setSearchQuery] = useState('');


  const addPerson = (event) => {
    event.preventDefault( )

    

    const personChecker = persons.some(person => person.name === newName)
    if(personChecker){
      
      alert(`${newName} is already added to the phonebook`)
      return
    }
    const personObject = {
      name: newName, number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Search Contacts</h2>
        <form>
          <div>
            Search: <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
          </div>
        </form>
      <h2>Add a New Contact</h2>
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      <h2>Numbers</h2>

      {persons.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase())).map(person => (
  <p key={person.name}>{person.name} - {person.number}</p>
))}
      
        
      
      
      <div>debug: {newName} : {newNumber}</div>
    </div>
    
  )
}



export default App
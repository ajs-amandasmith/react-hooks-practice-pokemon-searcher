import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ submitNewPokemon }) {
  const [inputName, setInputName] = useState('');
  const [inputHP, setInputHP] = useState('');
  const [frontURL, setFrontURL] = useState('');
  const [backURL, setBackURL] = useState('');

  function handleInputNameChange(e) {
    setInputName(e.target.value);
  }

  function handleInputHPChange(e) {
    setInputHP(e.target.value);
  }

  function handleFrontUrlChange(e) {
    setFrontURL(e.target.value);
  }

  function handleBackUrlChange(e) {
    setBackURL(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    const formData = {
      name: inputName,
      hp: inputHP,
      sprites: {
        front: frontURL,
        back: backURL
      }
    }
    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(() => submitNewPokemon(formData))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={e => handleSubmitForm(e)}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={inputName} 
            onChange={handleInputNameChange} 
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={inputHP} 
            onChange={handleInputHPChange} 
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontURL}
            onChange={handleFrontUrlChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backURL}
            onChange={handleBackUrlChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

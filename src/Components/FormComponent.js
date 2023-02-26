// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function FormComponent() {
  const [username, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted successfully');
    setUserName("");
    setAddress("");
    setEmail("");
  }

  return (
    <div>
      <Card>
        <Card.Header>Place your order Now!</Card.Header>
      </Card>
     <form onSubmit={handleSubmit}>
      <fieldset>
        {/* name */}
        <div className='mt-3 d-flex'>
          <div className='w-50'><label htmlFor='username'>Username: </label></div>
          <div><input 
              className='ps-2 ms-3' id='username' placeholder='Enter your username' name='name-field' type='text' 
              value={username} onChange={e => setUserName(e.target.value)} /></div>
        </div>
          {/* email address */}
        <div className='my-3 d-flex'>
          <div className='w-50'><label htmlFor='email'>Email Address: </label></div>
          <div><input 
              className='ps-2 ms-3' id='email' placeholder='Enter your email' name='email-field' type='email' 
              value={email} onChange={e => setEmail(e.target.value)} /></div>
        </div>
        {/* state */}
        <div className='mb-3 d-flex'>
          <div className='w-50'><label htmlFor='address'>Delivery Address: </label></div>
          <div><input 
              className='ps-2 ms-3' id='address' placeholder='Enter your Address' name='address-field' type='text' 
              value={address} onChange={e => setAddress(e.target.value)} /></div>
        </div>
        {/* submit button */}
        <div>
          <button disabled={!username || !email || !address} className='btn btn-secondary w-100' type='submit'>Submit</button>
        </div>
      </fieldset>
     </form>
    </div>
  );
}

export default FormComponent;
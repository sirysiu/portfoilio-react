import { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function Blog() {
  
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your Email:
        <input 
          type="text" 
          name="email"
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    
    </form>
    <footer>
  <p>
    <ul>
    <li><a href="https://github.com/sirysiu">Github</a></li>
    <li><a href="www.linkedin.com/in/siry-siu-98b17a298">Linkden</a></li>
    <li><a href="https://twitter.com/">Twitter</a></li>
    </ul>
  </p>
</footer>
    </div>
  )
}





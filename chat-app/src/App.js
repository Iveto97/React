import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(event) {
    event.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 2000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select value={to} onChange={e => setTo(e.target.value)}>
          <option value={'Alice'}>Alice</option>
          <option value={'Bob'}>Bob</option>
        </select>
      </label>
      <textarea placeholder='Message' value={message} onChange={e => setMessage(e.target.value)}></textarea>
      <button type='submit'>Send</button>
    </form>
  );
}


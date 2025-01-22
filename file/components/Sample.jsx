import React from 'react';
import HocDemo from './HocDemo';

function Sample({ data, errors, onChange, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Higher Order Component</h2>
        <div>
          <label className='email'>Email</label>
          <input
            type='email'
            name='email'
            value={data.email}
            onChange={onChange}
          />
          <span>{errors.email && <p>{errors.email}</p>}</span>
        </div>

        <div>
          <label className='password'>Password</label>
          <input
            type='password'
            name='password'
            value={data.password}
            onChange={onChange}
          />
          <span>{errors.password && <p>{errors.password}</p>}</span>
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default HocDemo(Sample);

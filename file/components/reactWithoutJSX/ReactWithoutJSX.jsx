import React from 'react'

export default function ReactWithoutJSX() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
        'div',
        {className: 'div1'},
        React.createElement(
            'h1', {className: 'heading', style:{Color:'red'}},"React Without JSX"
        )
    ),
    React.createElement(
      'div',
      {className:'div2', style:{backgroundColor:'yellow'}},
      "Hello World"
    )
  );
}

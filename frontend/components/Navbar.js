import React from 'react';

const Navbar = (props) => {
  // const toggleMode = e => {
  //   e.preventDefault();
  //   props.setGeceModu(!props.geceModu);
  // };

  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={props.toggleMode}
          className={props.geceModu ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

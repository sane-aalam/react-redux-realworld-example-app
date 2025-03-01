import React from "react";

function HeaderComponent() {
  return (
    <div className="bg-white grid grid-cols-2 border p-4">
      <div>
        <a href="#">Logo</a>
      </div>
      <div>
        <ul className="grid grid-cols-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Cards</a></li>
          <li><a href="#">Footer</a></li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderComponent;

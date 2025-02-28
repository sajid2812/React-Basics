import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <Card>
        <div>I am a card body</div>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <div>
      <div>Header</div>
      <div style={{ background: "black", borderRadius: "5px", color: "white" }}>
        {children}
      </div>
      <div>Footer</div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {TodoForm} from "./components/TodoForm/TodoForm";

function App() {
  return (
   <>
     <Header></Header>
       <main>
           <section>
               <div className="container pt-3">
                   <TodoForm/>
                   <h2>Новые дела</h2>
               </div>
           </section>
       </main>
   </>
  );
}

export default App;

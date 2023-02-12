import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {TodoForm} from "./components/TodoForm/TodoForm";
import {TodoList} from "./components/TodoList/TodoList";

function App() {
  return (
   <>
     <Header></Header>
       <main>
           <section>
               <div className="container pt-3">
                   <TodoForm/>
                   <h2 className='pt-3'>Новые дела</h2>
                   <TodoList/>
               </div>
           </section>
       </main>
   </>
  );
}

export default App;

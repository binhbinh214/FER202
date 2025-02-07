import React from 'react';
import Counter from './components/Counter';  
import InputField from './components/InputField'; 
import ToggleComponent from './components/ToggleComponent';
import TodoApp from './components/TodoApp';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';
import DragAndDropList from './components/DragAndDropList';


function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Counter />  
      <InputField /> 
      <ToggleComponent />  
      <TodoApp />
      <ColorSwitcher />
      <SearchFilter />
      <DragAndDropList />
 
    </div>
    
  );
}

export default App;

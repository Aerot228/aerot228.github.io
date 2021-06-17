const Todo = props =>(
  <li>
    <input type="checkbox" checked = {props.todo.checked}/>
    <button onClick = {props.onDelete}>delete</button>
    <span>{props.todo.text}</span>
  </li>
)
let id = 0;
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todos:[],
    }
  }
  toggleTodo(id){
    this.setState=({
      todos: this.state.todos.map(todo =>{
        if(todo.id !== id) return todo
        return
        {
          id: todo.id;
          text: todo.text;
          checked: !todo.checked;
        }
      })
    })
  }
  addTodo(){
    const text = prompt("Enter TODO");
    this.setState=({
      todos:[...this.state.todos,{id: id++,text: text, checked: false}]
    })
  }
  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter(todo => todo !== todo.id)
    })
  }
  render(){
    return(
      <div>
        <div>Todo count:{this.state.todos.length}</div>
        <div>Unchecked todo count:{this.state.todo.filter(todo=>!todo.checked).length}</div>
        <button onClick = {() =>this.addTodo}>add Todo</button>
        <ul>{this.state.todos.map(todo => <Todo 
        onToggle={()=>this.toggleTodo(todo.id)}
        onDelete={()=>this.removeTodo(todo.id)} 
        todo = {todo}/>)}</ul>
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
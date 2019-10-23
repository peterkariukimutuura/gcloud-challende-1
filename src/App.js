import React ,{Component} from 'react';
import Users from './Users';
import AddUser from './AddUser';


class App extends Component {

    //Default dummy data
    state = {
      users:[
        {name:'Travis Jackson',age:18, isEditing:false},
        {name:'Linda Moorhouse',age:22,isEditing:false},
        {name:'Jeffrey Delgado',age:22,isEditing:false}
      ]
    }

    //newUser is received from AddUser js
    addUser = (newUser)=>{
      let users =[...this.state.users,newUser];
      this.setState({
        users
      });
    }

    ///when press edit button
    //(i) is received from Users js
    pressEditBtn= (i)=>{
      let users =this.state.users;
      users[i].isEditing = true;
      this.setState({
        users
      });
    }

    //(i ,name , age ) is received from Users.js
    updateUser =(i,name,age)=>{
      let users = this.state.users;
      users[i].name = name;
      users[i].age = age;
      users[i].isEditing = false;

      this.setState({
        users
      });

    }

    pressDelete = (i) =>{
      let users = this.state.users.filter((u,index)=>{
        return index!==i;
      });
      this.setState({
        users
      });

    }

    render(){
      return(
        <div className="container">
          <h3>Google Africa Developer Scholarship Phase II</h3>
          <h4>Crud with React CLI</h4>
          <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete}/>
          <AddUser addUser={this.addUser}/>
        </div>
      );
    }


}
export default App;

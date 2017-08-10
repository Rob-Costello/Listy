import React, { Component } from 'react';
import {AppRegistry,  Text, View,ListView} from 'react-native';

const users=[{name:'Amber Costello'},{name:'Patrick Costello'},
  {name:'Alex Costello'},{name:'Rob Costello'}];
  

export default class Component5 extends Component {
 constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        userDataSource: ds,
    };
    }
    
    componentDidMount(){

        this.fetchUsers();
    }

    fetchUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((response) =>{
            this.setState({
            userDataSource:this.state.userDataSource.cloneWithRows(response)
            })
        } )

    }

    renderRow(user,sectionId,rowId,highlighRow){
        return(
        <View>
            <Text>{user.name}</Text>

        </View>
        );
    }


    render(){
  
    
    return(
    <ListView dataSource={this.state.userDataSource}
    renderRow={this.renderRow.bind(this)} />

  );
 }
}
  
  

AppRegistry.registerComponent('Component5', () => Component5);

import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';

export class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = { userData: null };
  
  }


  render() {
    let isLoading;
    this.state.userData === null?  isLoading = true: isLoading=false;

    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
    }

    let name;
    isLoading? name= 'Loading...': name= this.state.userData.name; 

    let bio;
    isLoading? name= 'Loading...': name= this.state.userData.bio;
    
    
    let friends;
    isLoading? friends= []: friends= this.state.userData.friends; 

    

    return (
      <div className={className}>
        <div className="profile-picture">
        {!isLoading && (
    <img src={this.state.userData.profilePictureUrl} alt="" />
  )}
        </div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }

  loadUserData(){

    if(this.state.userData!=null){
      this.setState({ userData: null })
    };

    this.fetchID = fetchUserData(this.props.username, (userData) => {
      this.setState({ userData });
    });

  }

  componentDidUpdate(prevProps){
    if(this.props.username !== prevProps.username){
      cancelFetch(this.fetchID);
      this.loadUserData();
    }
  }

  componentDidMount(){
    this.loadUserData()
  }

  componentWillUnmount(){
    cancelFetch(this.fetchID);
  }
}
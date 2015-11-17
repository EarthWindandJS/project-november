
//Component for User profile
var NavUser = React.createClass({
  getInitialState: function() {
    // return {
    //   username: 'default-user',
    //   slack: '#',
    //   github: '#', 
    //   urls: ['slackIt', 'gitHubIt', 'reactIt', 'nodeIt']
    // }
    return {
      listVisible: false
    };
  },
  addLink: function(url){
    this.state.urls.push(url);
    this.setState({
      urls: this.state.urls
    });
  },

  select: function(item) {
    this.props.selected = item;
  },

  show: function() {
    this.setState({ listVisible: true });
    document.addEventListener("click", this.hide);
  },

  hide: function() {
    this.setState({ listVisible: false });
    document.removeEventListener("click", this.hide);
  },

  render: function() {
    // return (
    //   <div>
    //     <h3>User Component</h3>
    //     Welcome, {this.state.username} <br/>
    //     <span>Slack: {this.state.slack} </span>
    //     <span> | Github: <a href="#"> {this.state.github}</a> </span>
    //     <ShowList names={this.state.urls} />
    //     <AddLink addNew={this.addLink} />     
    //   </div>
    //   )
    var placeholder = this.props.data;
    // console.log(placeholder);
    var placeholderUrls = this.props.data[0].urls;
    // console.log(placeholder2);
    var userListItems = placeholderUrls.map(function(item,idx) {
      return <li key={idx}><a href="{item}">{item}</a> </li>;
      // return <li key={idx}><a href="{item}">{item}</a> </li>;
    });
    return (
      // <NavBar>
      //   <Nav>
      //     <NavDropdown eventKey={4} title="Dropdown" id="nav-dropdown">
      //       <MenuItem eventKey="4.1">Action</MenuItem>
      //       <MenuItem eventKey="4.2">Another action</MenuItem>
      //       <MenuItem eventKey="4.3">Something else here</MenuItem>
      //       <MenuItem divider />
      //       <MenuItem eventKey="4.4">Separated link</MenuItem>
      //     </NavDropdown>
      //   </Nav>
      // </NavBar>
      <div>
        <h5 onClick={this.show}>Welcome, {placeholder[0].username} </h5>
        {this.state.listVisible ? <ul>{userListItems}</ul> : "" }
      </div>
    )
  }
});

//sub-component for NavUser.
//should refactor for use in any navbar component
var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(item, idx){
      return <li key={idx}><a href="#">{item}</a> </li>;
  });
  return (
    <div>
      <h4> Links </h4>
      <ul> {listItems} </ul>
    </div>
    )
  }
});

var userData = [
  {id: 1, 
    username: 'default-user', 
    slack: '#', 
    github: '#', 
    urls: ['slackIt', 'gitHubIt', 'reactIt', 'nodeIt']
  },
];

var orgData = [
  {id: 1, title: 'My Cohort', link: '#'},
  {id: 2, title: 'Syllabus', link: '#'},
  {id: 3, title: 'Repo List', link: '#'},
  {id: 4, title: 'Wiki', link: '#'},
  {id: 5, title: 'Help Desk', link: '#'},
];

//Component for MKS Org links
var NavOrg = React.createClass({
  getInitialState: function() {
    // return {
    //   orgName: 'My Cohort',
    //   resource1: 'Syllabus',
    //   resource2: 'Repo List',
    //   resource3: 'Wiki',
    //   resource4: 'HelpDesk'
    // }
    return {};
  },
  render: function() {
    // return (<div>
    //   <h3>Org Component</h3>
    //   <span>{this.state.orgName} </span>
    //   <span> | {this.state.resource1} </span>
    //   <span> | {this.state.resource2} </span>
    //   <span> | {this.state.resource3} </span>
    //   <span> | {this.state.resource4} </span>
    //   OrgList data={this.props.data}
    // </div> )
    var orgListItems = this.props.data.map(function(item) {
      return <span key={item.id}><a href="{item.link}">{item.title}</a>  |  </span>;
    });
    return (
      <div>
        <div>{orgListItems}</div>
      </div>
    ) 
  }
});



//for dev purposes. not needed depending on UI?
var AddLink = React.createClass({
  getInitialState: function(){
    return {
      newLink: ''
    }
  },
  propTypes: {
    addNew: React.PropTypes.func.isRequired
  },
  updateNewLink: function (e){
    this.setState({
      newLink: e.target.value
    });
  },
  handleAddNew: function(){
    this.props.addNew(this.state.newLink);
    this.setState({
      newLink: ''
    });
  },
  render: function(){
    return (
      <div>
        <input type="text" value={this.state.newLink} onChange={this.updateNewLink} />
        <button onClick={this.handleAddNew}> Add Link </button>
      </div>
    )
  }
});
    
//component to render multiple components inside navbar
var NavContainer = React.createClass({
  render: function() {
    return (
      <div className="navbar">
        <div className="navOrg navbar-left">
          <NavOrg data={orgData} />
        </div>
        <div className="navUser navbar-nav navbar-collapse collapse navbar-right">
          <NavUser data={userData} />
        </div>
      </div>
    )
  }
});

ReactDOM.render(<NavContainer />, document.getElementById('navbar'));



  

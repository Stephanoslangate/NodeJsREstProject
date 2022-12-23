var nextUserId = 1;

UserProvider = function() {
  this.users = [];
  
  this.fetchAllUsers = function(cb) {
    cb(null, this.users);
  };
  
  this.fetchUserById = function(id, cb) {
    var foundUsers = this.users.filter(function(user) {return user.id == id});

    if (foundUsers.length == 0) {
      cb('User not found', null);
    } else {
      cb(null, foundUsers[0]);
    }
  };
  
  this.insertUser = function(user, cb) {
   // user.id = nextUserId++;
   //console.log(user);
    this.users.push(user);

    cb(null, user);
  };
  
  this.updateUser = function(user, cb) {
    this.fetchUserById(user.id, function(error, _user) {
      if (error) {
        cb(error, null);
      } else {
        _user.name = user.name;
        _user.city = user.city;
        _user.state = user.state;
    
        cb(null, _user);
      }
    });
  };
  
  this.deleteUser = function(id, cb) {
    this.users = this.users.filter(function(user) {return user.id != id});
    cb(null, {id:id});
  };
};

exports.UserProvider = UserProvider;
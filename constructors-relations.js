function User(name) {
  if (User.names && User.names.includes(name)) {
    throw new Error('Duplicated username');
  }
  User.names = User.names ? [...User.names, name] : [name];
  this.name = name;
  this.friends = [];

  this.addToFriend = (user) => {
    this.friends.push(user);
    user.friends.push(this);
  };

  Object.defineProperty(this, 'friendsFriends', {
    get() {
      return this.friends
        .reduce((accum, friend) => {
          const uniqueUsers = new Set([
            ...accum,
            ...friend.friends.filter((user) => user !== this),
          ]);

          return [...uniqueUsers];
        }, [])
        .map(({ name }) => name)
        .join(', ');
    },
  });
}

const rammfall = new User('rammfall');
const yura = new User('yura');
const olena = new User('olena');
const yulia = new User('yulia');
const alina = new User('alina');

rammfall.addToFriend(yura);
rammfall.addToFriend(olena);
rammfall.addToFriend(yulia);
rammfall.addToFriend(alina);

yulia.addToFriend(olena);
alina.addToFriend(yura);

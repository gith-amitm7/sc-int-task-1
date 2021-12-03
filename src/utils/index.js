export const formAddress = (user) => {
  return `${user.location.street.number}, ${user.location.street.name},  ${user.location.city},  ${user.location.state},  ${user.location.country}`;
};

export const formFullName = (user) => {
  return `${user.name.title} ${user.name.first} ${user.name.last}`;
};

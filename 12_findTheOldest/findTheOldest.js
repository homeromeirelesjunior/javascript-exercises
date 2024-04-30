const findTheOldest = function(people) {
  const oldestPerson = people.reduce((oldestPerson, currentPerson) => {
    const date = new Date();
   
    const currentPersonAge = currentPerson.yearOfDeath ? currentPerson.yearOfDeath - currentPerson.yearOfBirth : date.getFullYear() -currentPerson.yearOfBirth;
    const oldestPersonAge = oldestPerson.yearOfDeath ? oldestPerson.yearOfDeath - oldestPerson.yearOfBirth : date.getFullYear() -oldestPerson.yearOfBirth;

    return currentPersonAge > oldestPersonAge ? currentPerson : oldestPerson; 
  }, people[0])

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

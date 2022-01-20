/*
  Name: Walter Luna
  Date of development: 2022-01-20
  Purpose: Print active user's serialized data
*/

import { Person } from './docs/person.doc';
import { serializePeople } from './utils/serializePeople.util';
import { sortPeopleByKey } from './utils/sortPeopleArray';

const rockyObj: Person = {
  Name: 'Rocky',
  'Favorite Food': 'Sushi',
  'Favorite Movie': 'Back to The Future',
  Status: 'Inactive',
};

const miroslavObj: Person = {
  Name: 'Miroslav',
  'Favorite Food': 'Sushi',
  'Favorite Movie': 'American Psycho',
  Status: 'Active',
};

const donnyObj: Person = {
  Name: 'Donny',
  'Favorite Food': 'Singapore chow mei fun',
  'Favorite Movie': 'The Princess Bride',
  Status: 'Inactive',
};

const mattObj: Person = {
  Name: 'Matt',
  'Favorite Food': 'Brisket Tacos',
  'Favorite Movie': 'The Princess Bride',
  Status: 'Active',
};

const people: Person[] = [rockyObj, miroslavObj, donnyObj, mattObj];

// Create and add my personal object
const walterObj: Person = {
  Name: 'Walter Luna',
  'Favorite Food': 'Seafood',
  'Favorite Movie': 'Star Wars',
  Status: 'Active',
};
people.push(walterObj);

// Create a function that prints active people's data sorted and serialized
function printSerializedActivePeople(
  people: Person[],
  key?: keyof Person
): void {
  people.map((person) => (person.date = new Date()));
  const activePeople = people.filter((person) => person.Status === 'Active');

  if (activePeople.length === 0) {
    console.log('There are no active users');
    return;
  }
  if (key) {
    sortPeopleByKey(activePeople, key);
  }

  console.log(serializePeople(activePeople));
}

// Using the function
printSerializedActivePeople(people);
printSerializedActivePeople(people, 'Favorite Food');
printSerializedActivePeople(people, 'Favorite Movie');
printSerializedActivePeople(people, 'Name');
printSerializedActivePeople(people, 'Status');
printSerializedActivePeople(people, 'date');

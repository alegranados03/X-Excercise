import { Person } from '../docs/person.doc';
import { SerializedPerson } from '../docs/serialized-person.doc';

export const serializePeople = function (people: Person[]): SerializedPerson[] {
  return people.map((p) => ({
    'Favorite Food': p['Favorite Food'],
    Name: p.Name,
    date: p.date,
  }));
};

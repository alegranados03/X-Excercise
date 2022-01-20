import { Person } from '../docs/person.doc';

export const sortPeopleByKey = function (
  people: Person[],
  key: keyof Person
): void {
  if (key === 'date') {
    people.sort((a, b) => {
      const propA = a[key] || new Date(0);
      const propB = b[key] || new Date(0);

      return propA < propB ? -1 : 1;
    });
    return;
  }
  people.sort((a, b) => (a[key] < b[key] ? -1 : 1));
};

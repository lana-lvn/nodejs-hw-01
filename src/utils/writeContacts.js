import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

console.log(PATH_DB);

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, undefined, 2));
  } catch (error) {
    console.log(error);
  }
};

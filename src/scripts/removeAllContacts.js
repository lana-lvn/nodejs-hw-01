import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    return await writeContacts([]);
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();

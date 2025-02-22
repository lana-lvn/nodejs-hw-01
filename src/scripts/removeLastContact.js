import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length !== 0) {
      contacts.pop();
      return await writeContacts(contacts);
    }
    return;
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();

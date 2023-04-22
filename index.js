// const argv = require("yargs").argv;
const contacts = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allBooks = await contacts.listContacts();
      console.log(allBooks);
      break;

    case "get":
      const oneBook = await contacts.getContactById(id);
      console.log(oneBook);
      break;

    case "add":
      const newBook = await contacts.addContact(name, email, phone);
      console.log(newBook);
      break;

    case "remove":
      const deleteBook = await contacts.removeContact(id);
      console.log(deleteBook);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "rsKkOQUi80UsgVPCcLZZW" });
// invokeAction({
//   action: "add",
//   name: "Katya Koshmal",
//   email: "Olya98@ukr.net",
//   phone: "(096) 795-4422",
// });
// invokeAction({
//   action: "remove",
//   id: "jMFBxhc5nUeJY5aL3DLFC",
// });

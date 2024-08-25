import { deleteContact } from "../contacts";

export const action = async ({ params }) => {
  await deleteContact(params.contactId);
  return { redirect: "/" };
};

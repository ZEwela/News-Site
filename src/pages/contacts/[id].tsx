import { useRouter } from "next/router";
import contacts from "../api/contacts";
import LayoutWithMenu from "<import>/components/LayoutWithMenu";
export default function Contact() {
  const router = useRouter();
  const id = router.query.id;

  const contact:
    | {
        id: string;
        name: string;
        country: string;
      }
    | any = contacts.find((contact) => contact.id === id);

  return (
    <>
      <LayoutWithMenu />
      <div>
        <h3>
          <strong>{contact.name}</strong>
        </h3>
        <p>{contact.country}</p>
      </div>
    </>
  );
}

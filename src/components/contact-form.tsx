import { Input } from "../elements/input";
import { Label } from "../elements/label";

export const ContactForm = () => (
  <form className="flex flex-col" action="">
    <Label forInput="firma">Firma</Label>
    <Input id="firma" placeholder="Firma" />
  </form>
);

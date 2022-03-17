import { v4 as uuidV4 } from 'uuid';

class Unit {

  id: string;
  name: string;
  shortName: string;
  address: {
    postalCode: string,
    neighborhood: string,
    city: string,
    state: string,
    street: string,
  }
  phone?: string;
  descriptionOperation?: string;
  latitude?: number;
  longitude?: number;
  type: "VIRTUAL" | "PHYSICAL";

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Unit }
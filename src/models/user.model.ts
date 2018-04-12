export class UserModel {
  id: string = null;
  email: string = null;
  key: string = null;
  name: string = null;
  phone: string = null;

  constructor(values: Object = {}) {
    Object.keys(this).forEach(key => {
      if (values.hasOwnProperty(key)) this[key] = values[key];
    });
  }
}

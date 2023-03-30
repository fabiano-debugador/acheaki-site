export class User {
  public readonly _id?: string;
  public name!: string;
  public login!: string;
  public password!: string;

  constructor(props: Omit<User, '_id'>) {
    Object.assign(this, props);
  }
}

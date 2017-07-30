export class Contact {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public experience: string,
    public social: string,
    public comment?: string,
  ) { }
}

export class Etudiant {
  constructor(
    public etudiantName: string,
    public lastName: string,
    public email: string,
    public phone: number,
    public parcour: string,
    public niveau: string,
    public subscribe: boolean
  ) {}
}

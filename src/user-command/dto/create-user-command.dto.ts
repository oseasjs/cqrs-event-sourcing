export class CreateUserCommandDto {

  constructor(
    public readonly email: string,
    public readonly seed: string) {
      
    }
  
}

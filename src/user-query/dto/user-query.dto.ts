export class UserQueryDto {

  constructor(
    public readonly _id: string,
    public readonly id: number,
    public readonly email: string,
    public readonly seed: string,
    public readonly appId: string) {

  }

}
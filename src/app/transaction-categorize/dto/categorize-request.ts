export class CategorizeRequest {
  constructor(public id: number, public name, public color, public type, public content: string) {

  }

  isNew() {
    return this.type === 'new';
  }
}

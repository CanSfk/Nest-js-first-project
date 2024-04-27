import { Exclude } from 'class-transformer';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export class SerializedUser {
  id: number;
  name: string;
  email: string;

  // ?? @Exlude() Api üzerinde dönen JSON verisinde password alanının gizlenmesini sağlar.
  @Exclude()
  password: string;

  // ?? partial: Partial<SerializedUser> SerializedUser tipinde bir partial oluşturuluyor.
  // ?? Bu partial dışarıdan gelen nesneleri temsil ediyor
  // ?? Object.assign(this.partial) bu yapı dışarıdan gelen partial nesnesindeki verilerı SerializedUser daki değişkenlere atanıyor.
  // ?? Yani tek tek name:name, email:email... yazmak yerine tek satırda işlemi hallediyoruz.
  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}

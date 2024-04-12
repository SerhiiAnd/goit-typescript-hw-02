/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const obj1: KeyValuePair<string, number> = { key: "number", value: 111 };
const obj2: KeyValuePair<number, number[]> = { key: 123, value: [1, 3, 5] };
export {};
class HashMap {
    constructor() {
      this.storage = {};
    }
  
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
      return hashCode;
    }
  
    set(key, value) {
      const hashedKey = this.hash(key);
      this.storage[hashedKey] = value;
    }
  
    get(key) {
      const hashedKey = this.hash(key);
      return this.storage[hashedKey] !== undefined ? this.storage[hashedKey] : null;
    }
  
    has(key) {
      const hashedKey = this.hash(key);
      return this.storage.hasOwnProperty(hashedKey);
    }
  
    remove(key) {
      const hashedKey = this.hash(key);
      if (this.has(key)) {
        delete this.storage[hashedKey];
        return true;
      }
      return false;
    }
  
    length() {
      return Object.keys(this.storage).length;
    }
  
    clear() {
      this.storage = {};
    }
  
    keys() {
      return Object.keys(this.storage);
    }
  
    values() {
      return Object.values(this.storage);
    }
  
    entries() {
      return Object.entries(this.storage);
    }
  }
  
  class HashSet {
    constructor() {
      this.storage = {};
    }
  
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
      return hashCode;
    }
  
    set(key) {
      const hashedKey = this.hash(key);
      this.storage[hashedKey] = true;
    }
  
    has(key) {
      const hashedKey = this.hash(key);
      return this.storage.hasOwnProperty(hashedKey);
    }
  
    remove(key) {
      const hashedKey = this.hash(key);
      if (this.has(key)) {
        delete this.storage[hashedKey];
        return true;
      }
      return false;
    }
  
    length() {
      return Object.keys(this.storage).length;
    }
  
    clear() {
      this.storage = {};
    }
  
    keys() {
      return Object.keys(this.storage);
    }
  
    values() {
      return Object.values(this.storage);
    }
  
    entries() {
      return Object.entries(this.storage);
    }
  }
  
  let myHashMap = new HashMap();
  myHashMap.set("Hello", 12345);
  myHashMap.set("There", 109876);
  console.log("Length:", myHashMap.length());
  console.table(myHashMap.entries());
  console.log("Get 'Hello':", myHashMap.get("Hello"));
  console.log("Has 'hi':", myHashMap.has("hi"));
  console.log("Remove 'Hello':", myHashMap.remove("Hello"));
  
  console.log("\nHashSet");
  let myHashSet = new HashSet();
  myHashSet.set("Cat");
  myHashSet.set("Dog");
  console.log("Length:", myHashSet.length());
  console.table(myHashSet.entries());
  console.log("Get 'Cat':", myHashSet.has("Cat"));
  console.log("Has 'rabbit':", myHashSet.has("rabbit"));
  console.log("Remove 'Dog':", myHashSet.remove("Dog"));
  
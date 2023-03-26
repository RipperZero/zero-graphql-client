export {};

const responseData: any = {
  a: 1,
  b: 2,
};

const resData: {
  a: number;
  b: number;
  c?: number;
  d?: { dd?: number };
  e?: number | null;
} = responseData;

console.log(resData);
console.log("===========");
console.log(resData.c);
console.log("===========");
console.log(resData.d?.dd);
console.log("===========");
console.log(resData.e);
responseData["e"] = null;
console.log("===========");
console.log(resData.e);

// ------------------------------------------------
// (() => {
//   const border = "horizontal-vertical";
//   if (~border.indexOf("horizontal")) {
//     console.log("11111111");
//   }
//   if (~border.indexOf("vertical")) {
//     console.log("22222");
//   }
// })();
// ------------------------------------------------

// ------------------------------------------------
// 如何判断一个数组
// 通过instanceof和constructor来判断不一定准确，因为可能会被重写。
// console.log(Array.isArray([]));
// console.log([] instanceof Array);
// console.log([].constructor === Array);
// console.log(Object.prototype.toString.call([]));
// ------------------------------------------------

// 默认值只在undefined时生效
// const testDefault = (param = 1) => {
//   console.log(param || 1);
// };
// console.log(testDefault(null));

// const pA = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Promise A resolve");
//     // reject("Promise A reject");
//   });
// };

// const pB = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Promise B resolve");
//     // reject("Promise B reject");
//   });
// };

// const pC = () => {
//   return new Promise((resolve, reject) => {
//     // resolve("Promise C resolve");
//     reject("Promise C reject");
//   });
// };
// const asyncFun = async () => {
//   const resA = await pA();
//   console.log("AAAAAA");
//   console.log(resA);
//   const resB = await pB();
//   console.log("BBBBBB");
//   console.log(resB);
//   console.log("CCCCCC");
//   const resC = await pC();
//   console.log(resC);
// };
// console.time("asyncFun");
// asyncFun().catch((error) => {
//   console.log("error error error error");
//   console.log(error);
// });
// console.timeEnd("asyncFun");

// const array = [1, 2, 3, 4, 5];

// const arrayA = array.map((value) => {
//   return value * 2;
// });

// console.log(array);
// console.log(arrayA);

// let resObj = {
//   data: {
//     expenseList: [1, 2, 3, 4, 5],
//   },
// };

// const resObjA = resObj.data.expenseList.map((value) => {
//   return value * 2;
// });

// console.log(resObj);
// console.log(resObjA);

const person = [
  { id: 0, name: "小明" },
  { id: 1, name: "小张" },
  { id: 2, name: "小李" },
  { id: 3, name: "小孙" },
  { id: 1, name: "小周" },
  { id: 2, name: "小陈" },
];

const obj = {};
// const array = [];

const reducedPerson = person.reduce((previousValue, currentValue) => {
  // eslint-disable-next-line no-unused-expressions
  obj[currentValue.id]
    ? ""
    : // : (obj[currentValue.id] = "666" && previousValue.push(currentValue));
      (obj[currentValue.id] = 12 && previousValue.push(currentValue));

  //   if (obj[currentValue.id] === undefined) {
  //     obj[currentValue.id] = true;
  //     previousValue.push(currentValue);
  //     // obj[currentValue.id] = true && previousValue.push(currentValue);
  //   }

  return previousValue;
}, []);

console.log(obj);
console.log(reducedPerson);
// person.forEach((item) => {
//   obj[item.id] = true && array.push(item);
//   //   obj[item.id] = "666";
//   //   array.push(item);
// });

// console.log(obj);
// console.log(array);

class ZeroA {
  static aFunc = () => {
    return "aaa";
  };
}

ZeroA.aFunc();

class ZeroB {
  bFunc = () => {
    return "bbb";
  };
}
const objB = new ZeroB().bFunc;
objB();

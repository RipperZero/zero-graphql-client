let zeroNum = 0;

export const useRerender = (num: number) => {
  console.log("useRerenderuseRerenderuseRerenderuseRerender");

  zeroNum = num;

  const clickHandler = () => {
    console.log("hello click");
  };
  return clickHandler;
};

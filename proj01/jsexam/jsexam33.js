function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return "멍멍이";
};

const getRabbit = async () => {
  await sleep(500);
  return "토끼";
};
const getTurtle = async () => {
  await sleep(3000);
  return "거북이";
};

async function process() {
  // const result = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  // console.log(result);
  // const [dog, rabbit, turtle] = await Promise.all([
  //   getDog(),
  //   getRabbit(),
  //   getTurtle(),
  // ]);
  // console.log(dog);
  // console.log(rabbit);
  // console.log(turtle);

  const result = await Promise.race([getDog(), getRabbit(), getTurtle()]);
  console.log(result);
}

process();

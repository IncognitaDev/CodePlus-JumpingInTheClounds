const cenario1 = [0, 0, 1, 0, 0, 1, 0];
const cenario2 = [0, 0, 0, 0, 1, 0];

const jumpingOnClouds = (c) => {
  var aux = false;
  const jumps = c.reduce((acc, cloud, index, arr) => {
    if (index == 0 || aux == true || cloud == 1) {
      aux = false;
      return acc;
    }
    if (cloud == 0) {
      arr[index + 1] == 0 && arr[index - 1] != 1 ? (aux = true) : (aux = false);

      return (acc += 1);
    }
  }, 0);

  return jumps;
};

jumpingOnClouds(cenario1);

//c representa o cenario, mantenha o nome pra eu poder testar no hackerrank :D

const n = 110011;
const k = 10;

function solution(n, k) {
  let answer = 0;
  const kNumber = n.toString(k);
  const strArray = kNumber.split('0');

  strArray.map((v)=>{
      console.log(parseInt(v));
    if(isPrime(parseInt(v))) answer++;
  })

  console.log(answer, strArray);
  return answer;
}

function isPrime(num) {
  if (num === 1 || isNaN(num)) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

solution(n, k);

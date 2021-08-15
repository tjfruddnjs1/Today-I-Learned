const clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];

function solution(clothes){
    const types = {};
    for(const [style, type] of clothes){
        if(type in types) types[type] += 1;
        else types[type] = 1;   
    }

    let answer = 1;
    for(const type in types) answer *= (types[type] + 1)

    console.log(answer-1);
    return answer - 1;
}

solution(clothes);
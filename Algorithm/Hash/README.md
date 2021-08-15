# Hash

## Camouflage(위장)

0. 문제 설명

- 스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수 작성

1. 제한사항

- clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
- 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
- 같은 이름을 가진 의상은 존재하지 않습니다.
- clothes의 모든 원소는 문자열로 이루어져 있습니다.
- 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
- 스파이는 하루에 최소 한 개의 의상은 입습니다.

2. 입출력 예시
   | clothes | return |
   | ----------- | ----------- |
   | [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]] | 5 |
   | [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]] | 3 |

3. 풀이

- [Hash]camouflage.js]()
- map type을 이용하여 [key, value] 형태로 옷의 종류와 숫자를 저장하였습니다.
- 이후, 조합 알고리즘을 이용하여 key에 해당하는 value의 수를 가져와 value의 수만큼 모든 경우의 수를 구하여 다 더해주는 방법을 택했습니다.

> 피드백

- [Hash][best]camouflage.js]()
- 이 후, 다른 사람들이 풀었던 방식을 보았는데 처음 느꼈던 감정은 되게 황당했습니다.
- 코드의 길이에서 부터 가독성 및 성능 차이가 많이 난다고 느꼈습니다.
- 위의 방식은 다음과 같습니다.
- (1) 먼저 key와 value의 형태로 가져오는 것은 같습니다.
- (2) value의 값에 +1 을 해준 형태로 모두 곱한 후 -1을 하고 return 한 값이 정답이 되게 됩니다.
- cf. 입을 수 있는 종류가 2개라고 하면 (그 옷을 입지 않을 경우, 첫 번째 옷을 입을 경우, 두 번째를 입는 경우) 3가지이고 전체 경우의 수는 옷의 종류만큼 곱한 것 - (전부 입지 않을 경우 1가지)

4. 출처 : https://programmers.co.kr/learn/courses/30/lessons/42578
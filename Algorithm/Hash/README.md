# Hash

## Camouflage(위장)

0. 문제 설명

- 스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수 작성

1. 제한사항

- clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
- 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
- 같은 이름을 가진 의상은 존재하지 않습니다.
- clothes의 모든 원소는 문자열로 이루어져 있습니다.
- 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '\_' 로만 이루어져 있습니다.
- 스파이는 하루에 최소 한 개의 의상은 입습니다.

2. 입출력 예시
   | clothes | return |
   | ----------- | ----------- |
   | [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]] | 5 |
   | [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]] | 3 |

3. 풀이

- [[Hash]camouflage.js](https://github.com/tjfruddnjs1/Today-I-Learned/blob/main/Algorithm/Hash/%5BHash%5Dcamouflage.js)
- map type을 이용하여 [key, value] 형태로 옷의 종류와 숫자를 저장하였습니다.
- 이후, 조합 알고리즘을 이용하여 key에 해당하는 value의 수를 가져와 value의 수만큼 모든 경우의 수를 구하여 다 더해주는 방법을 택했습니다.

> 피드백

- [[Hash][best]camouflage.js](https://github.com/tjfruddnjs1/Today-I-Learned/blob/main/Algorithm/Hash/%5BHash%5D%5BBest%5Dcamouflage.js)
- 이 후, 다른 사람들이 풀었던 방식을 보았는데 처음 느꼈던 감정은 되게 황당했습니다.
- 코드의 길이에서 부터 가독성 및 성능 차이가 많이 난다고 느꼈습니다.
- 위의 방식은 다음과 같습니다.
- (1) 먼저 key와 value의 형태로 가져오는 것은 같습니다.
- (2) value의 값에 +1 을 해준 형태로 모두 곱한 후 -1을 하고 return 한 값이 정답이 되게 됩니다.
- cf. 입을 수 있는 종류가 2개라고 하면 (그 옷을 입지 않을 경우, 첫 번째 옷을 입을 경우, 두 번째를 입는 경우) 3가지이고 전체 경우의 수는 옷의 종류만큼 곱한 것 - (전부 입지 않을 경우 1가지)

4. 출처 : https://programmers.co.kr/learn/courses/30/lessons/42578

## Best Album (베스트 앨범)

0. 문제 설명

- 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수 완성
- **(1)속한 노래가 많이 재생된 장르를 먼저 수록합니다.**
- **(2)장르 내에서 많이 재생된 노래를 먼저 수록합니다.**
- **(3)장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.**

1. 제한 사항

- genres[i]는 고유번호가 i인 노래의 장르입니다.
- plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
- genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
- 장르 종류는 100개 미만입니다.
- 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
- 모든 장르는 재생된 횟수가 다릅니다.

2. 입출력 예시
   | genres | plays | return
   | ----------- | ----------- | ----------- |
   |["classic", "pop", "classic", "classic", "pop"] | 5 |[4, 1, 3, 0]|

3. 풀이

- [[Hash]bestAlbum.js]()
- 방식을 순서에 순서에 맞추어 설명해보겠습니다.
- (1) 먼저 types라는 객체를 생성해 1번 조건을 위해 가장 많이 재생된 장르를 구분하기 위해 플레이수를 더해 저장합니다. (key-value 형태)
- (2) types 객체를 플레이수가 많은 장르가 앞에 나오도록 정렬합니다.(객체 > entries > 배열 > fromEntries > 객체)
- (3) plays 배열에서 정렬되어 있는 types에서 value를 매칭하여 index를 type 배열에 저장합니다.
- (4) type 배열에서 index를 가져와 내림차순으로 정렬하여 (3)번 조건인 중복인 경우를 생각하여 indexOf, lastIndexOf 메서드를 사용해 각 index를 answer에 push하고 return 합니다.

4. 출처 : https://programmers.co.kr/learn/courses/30/lessons/42579

# Stack&Queue

## functionDevelopment(기능 개발)

0. 문제 설명

- 기능 개선 작업을 하는 중인데 각 기능은 진도가 100%일 때 서비스에 반영 가능하다. 각 기능의 개발속도는 모두 다르고 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수는 있지만 뒤에 있는 기능은 앞의 기능이 완료되고 나서야 배포된다.
- 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성

1. 제한 사항

- 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
- 작업 진도는 100 미만의 자연수입니다.
- 작업 속도는 100 이하의 자연수입니다.
- 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

2. 입출력 예시
   | progresses | speeds | return
   | ----------- | ----------- | ----------- |
   |[93, 30, 55] | [1,30,5] |[2,1]|
   |[95, 90, 99, 99, 80, 99] | [1,1,1,1,1,1] |[1,3,2]|

3. 풀이

- [[Stack]functionDevelopment.js](https://github.com/tjfruddnjs1/Today-I-Learned/blob/main/Algorithm/Stack%26Queue/%5BStack%5DfunctionDevelopment.js)
- (1) 먼저, progresses를 순회하여 remains 배열을 하나 만들어(배포 가능한 일수를 담은 배열) 남은 일수를 처리하여 저장합니다.
- (2) remains 배열을 순회하여 로직을 짰는데 separator(구분 배열)에는 길이가 0일때 push, 남은 일수가 separator[0](첫번 째 원소)보다 작거나 같을 때는 구분 배열에 push하고 아닌 경우에는 answer 배열에 배열의 길이를 저장하고 value를 separator 배열에 초기화 시킵니다
- (3) 그리고 index가 마지막 원소에 도달했을 때는 위의 조건을 따지지 않고 answer 배열에 push합니다.

4. 출처 : https://programmers.co.kr/learn/courses/30/lessons/42586

## printer(프린터)

0. 문제 설명

- 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발
- 인쇄 대기목록의 가장 앞에 있는 문서(j)를 대기목록에서 꺼냅니다.
- 나머지 인쇄 대기목록에서 j보다 중요도가 높은 문서가 한 개라도 존재하면 j를 대기목록의 가장 마지막에 넣습니다.
- 그렇지 않으면 j를 인쇄합니다.

1. 제한 사항

- 현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
- 인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
- location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.

2. 입출력 예시
   | priorities | location | return
   | ----------- | ----------- | ----------- |
   |[2, 1, 3, 2] | 2 | 1|
   |[1, 1, 9, 1, 1, 1] | 0 |5|

3. 풀이

- [[Stack]printer.js](https://github.com/tjfruddnjs1/Today-I-Learned/blob/main/Algorithm/Stack%26Queue/%5BStack%5Dprinter.js)
- (1) 먼저 기존 배열 priorities를 index, value 형태로 재 조합해서 idxPriorities에 넣습니다.
- (2) 그리고 queue에서 하나를 꺼내오는 것처럼 array.shift() 메서드를 이용하여 앞에서부터 하나씩 가져오고 보다 큰 요소가 배열내에 존재하는지를 판단하는 변수 isBig을 선언합니다.
- (3) 이후 큰 요소가 있다면 idxPriorities 뒤에 push하고 없다면 order 배열에 하나씩 넣습니다.
- (4) 배열 내에 요소가 없을 때 반복문을 종료합니다.
- (5) 이후 order 배열에서 location에 해당하는 value를 찾아 answer에 +1 후 answer를 return 합니다.

4. 출처 : https://programmers.co.kr/learn/courses/30/lessons/42587

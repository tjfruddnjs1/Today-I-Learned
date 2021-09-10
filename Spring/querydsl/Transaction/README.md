# Transaction

- 데이터베이스의 상태를 변화시키기 위해 수행해야 할 연산들의 집합, 하나의 작업 처리를 위한 논리적 단위
- 데이터베이스의 상태를 변화시킨 다는 것 : SELECT, INSERT, DELETE, UPDATE 쿼리를 사용하여 DB에 접근하는 것
- 작업 처리의 단위는 한 건의 쿼리가 아닌 여러 개의 연산이 복합적으로 구성되는 것이 일반적

## 예시
- 현재 작성하고 있는 글을 등록하는 작업
- 글의 내용을 작성한 뒤, 등록 버튼을 눌렀을 때 새로운 글이 등록된 최신 글 목록이 보여지는 작업 처리
- 단위는 등록할 때의 INSERT와 최신 리스트를 보여주는 SELECT가 하나의 단위에서 구성되는 것으로 이러한 작업의 단위를 Transaction
- 일반적인 비즈니스 로직이 포함되는 서비스를 구성하는 경우, 데이터의 동시성(Concurrency)을 제어(control)해야 하는 상황을 많이 맞딱드리게 되기에 트랜잭션은 매우 중요한 부분

## 특징
1. 원자성(Atomicity)
- Transaction의 연산은 데이터베이스에 모두 반영되거나 전혀 반영되지 않아야 한다.
- Transaction내의 모든 명령은 반드시 완벽하게 성공해야 하며, 어느 하나에 오류가 생기면 전부 취소되어야 한다.
2. 일관성(Consistency)
- Transaction의 작업 처리 결과가 언제나 일관성 있는 데이터베이스 상태를 유지할 수 있어야 한다.
- Transaction을 진행할 때 참조한 데이터베이스로 연산이 진행되므로 일관된 데이터 결과를 볼 수 있다.
3. 독립성(Isolation)
- 복수의 Transaction이 동시에 실행되는 경우, 어느 하나의 Transaction 실행 중에 다른 Transaction의 연산이 끼어들 수 없다.
- Transaction이 완전히 완료될 때까지 다른 Transaction에서 그 수행 결과를 참조할 수 없다.
4. 지속성(Durability)
- 성공적으로 완료된 Transaction의 결과는 영구적으로 반영되어야 한다.

## 상태

- Commit : transaction의 연산이 성공적으로 종료되어 database에 연산에 따라 변경된 값으로 저장한느 것
- Rollback : transaction이 비정상적으로 종료되어 연ㅅ나된 결과를 다시 취소시키고 기존의 database 상태로 되돌리는 것

<img src="https://user-images.githubusercontent.com/41010744/132787012-192bfece-bd76-4ccb-aa28-94da3e4acf8e.png">


- 활동(Active) : Transaction이 현재 실행중인 상태
- 부분 완료 (Partially Committed) : Transaction의 연산을 마치고 데이터베이스에 결과를 저장하기 직전의 상태
- 완료 (Committed) : Commit 명령을 통해 Transaction의 변경 내용을 성공적으로 저장한 상태
- 실패 (Failed) : Transaction 실행 중 오류가 난 상태
- 철회 (Aborted) : Rollback 명령을 통해 Transaction의 수행 이전 상태로 돌린 상태
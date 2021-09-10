# Select 절에서 조회 대상 지정 방법

- queryDSL을 이용하여 entity 전체를 가져오는 방법 말고, 조회 대상을 지정하여 원하는 값만 조회하는 것을 projection 이라 한다.
- 프로젝션 대상이 `하나일 경우에는 반환 되는 타입이 프로젝션 대상의 타입`

## 프로젝션 대상이 하나일 경우

<img src="https://user-images.githubusercontent.com/41010744/132802951-2380a0d0-1ae7-4e2e-97d4-2fa13dab5b4e.png">

- 결과를 보면 Member 엔티티의 name은 string type이기 때문에 프로젝션 대상이 하나일 때, `List<String>` type이 조회 결과

## 프로젝션 대상이 두개 이상일 경우

<img src="https://user-images.githubusercontent.com/41010744/132803172-b950dd79-eb70-44da-8faa-111a9c4c1e92.png">

- 만약 두 개 이상일 경우에는 `Tuple` 타입을 반환
- Tuple을 조회할 때는 get() 메서드를 이용
- get()으로 조회하는 방법은 두 가지 존재
1. get() 메서드의 첫 번째 파라미터로 프로젝션 대상의 순번, 두 번째 파라미터로 해당 값의 타입을 명시
2. 간단하게 조회한 쿼리 타입을 바로 지정

> 위의 예시에서 name(1), age(2)







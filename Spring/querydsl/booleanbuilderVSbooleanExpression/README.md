# Boolean Builder VS Boolean Expression

## 문제 상황

- 상황에 따라 조건문이 생성 (동적 query)
- 예를들어 name, address, phoneNumber 등을 조건으로 생성한다고 하면 where절에 넣어야 하는데, 파라미터를 변경하는 것이 아닌 `BooleanBuilder`를 통해 해결
- 일반적인 사용 방법

```java
   @Override
    public List<Academy> findDynamicQuery(String name, String address, String phoneNumber) {

        BooleanBuilder builder = new BooleanBuilder();

        if (!StringUtils.isEmpty(name)) {
            builder.and(academy.name.eq(name));
        }
        if (!StringUtils.isEmpty(address)) {
            builder.and(academy.address.eq(address));
        }
        if (!StringUtils.isEmpty(phoneNumber)) {
            builder.and(academy.phoneNumber.eq(phoneNumber));
        }

        return queryFactory
                .selectFrom(academy)
                .where(builder)
                .fetch();
    }
```

- 문제점 : where 문의 조건을 한눈에 보기가 어렵다 > `쿼리 형태를 예측하기 어렵`

## 해결

- querydsl의 where에 조건문을 쓰되 파라미터가 비어있다면 조건절에서 생략 > booleanexpression
- booleanExpression은 where에서 사용할 수 있는 값인데 이 값은 `,`를 `and` 조건으로 사용
  여기에 querydsl의 `where`는 null이 파라미터로 올 경우 조건문에서 제외

```java
@Override
    public List<Academy> findDynamicQueryAdvance(String name, String address, String phoneNumber) {
        return queryFactory
                .selectFrom(academy)
                .where(eqName(name),
                        eqAddress(address),
                        eqPhoneNumber(phoneNumber))
                .fetch();
    }

    private BooleanExpression eqName(String name) {
        if (StringUtils.isEmpty(name)) {
            return null;
        }
        return academy.name.eq(name);
    }

    private BooleanExpression eqAddress(String address) {
        if (StringUtils.isEmpty(address)) {
            return null;
        }
        return academy.address.eq(address);
    }

    private BooleanExpression eqPhoneNumber(String phoneNumber) {
        if (StringUtils.isEmpty(phoneNumber)) {
            return null;
        }
        return academy.phoneNumber.eq(phoneNumber);
    }
```

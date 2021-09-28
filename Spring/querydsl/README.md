# QueryDsl

- JPQL(Java Persistence Query Langauage)는 JPA의 일부로 정의된 플랫폼에 독립적인 객체지향 쿼리 언어
- 관계형 데이터베이스의 엔티티에 대한 쿼리를 만드는데 사용
- JPA는 엔티티 객체를 중심으로 개발하므로 SQL 사용하지 않고, 하지만 `검색 쿼리`를 사용할 때는 SQL을 사용
- SQL의 영향을 받아 SQL과 비슷하나, database table에 직접 접근하는 것이 아닌 JPA Entity에 동작
- **따라서, JPQL의 쿼리에는 테이블이 아닌 엔티티에서 사용되는 컬럼의 이름을 사용**
  > SQL : 데이터베이스 테이블을 대상으로 쿼리
  > JPQL : 엔티티 객체를 대상으로 쿼리

## JPQL로 검색 ?

- JPA에서 SQL을 직접사용하지 않고, Query Method, @Query, Querydsl 등을 사용
- 관계형 데이터베이스에서 각 테이블이 서로 FK로 참조하듯이 엔티티에서도 서로 연관이 있다면 참조 가능
- 만약 단일 엔티티 경우(FK를 갖지 않는) Querydsl로 비교적 간단하게 검색 기능 작성 가능
- 하지만, **여러 엔티티가 있고 서로 외래키로 참조하고 있는 경우 JPQL로 직접 처리하는 것은 Object[] 타입으로 나오기 때문에 (Tuple 형태) 작성하는 방법 자체가 다르고 복잡**

## Querydsl

- 오픈 소스 프로젝트 & type-safe한 쿼리를 위한 Domain Specific Language
- SQL Query는 문자이기 때문에 type-check가 불가하고 실행해 보기 전까지 작동 여부 확인이 어려운데, 만약 SQL이 Class처럼 Type을 갖고 java코드로 개발 가능하게 해주는 프레임워크

> Querydsl => JPQL => SQL

## Repository 확장

- Spring Data JPA의 Repository를 확장하기 위해서 다음과 같은 단계로 처리

1. 쿼리 메소드나 @Query 등으로 처리할 수 없는 기능은 별도의 인터페이스로 설계
2. 별도의 인터페이스에 대한 구현 클래스를 작성 > `QuerydslRepositorySupport`라는 클래스를 부모 클래스로 사용
3. 구현 클래스에 인터페이스 기능을 Q도메인 클래스와 JPQLQuery를 이용해서 구현

> QuerydslRepositorySupport

- Querydsl을 이용해 쿼리를 작성하기 위해서는 이 클래스를 상속받아야 하며 super(DslMemeber.class); 처럼 도메인 엔티티 클래스를 슈퍼타입인 QuerydslRepositorySupport 생성자의 인자로 넘겨주어야 한다.
- 이는, Spring Data JPA에 포함된 클래스로 Querydsl 라이브러리를 이용해 직접 무언가 구현할 때 사용

<img src="https://user-images.githubusercontent.com/41010744/135038903-fe85cb14-6f5c-4c88-8824-7ef3bd13aa89.png">

- Repository를 확장시키기 위해 repository 패키지 밑에 별도의 패키지를 만들어 인터페이스와 이를 구현한 클래스를 작성 (ex. cowRepository , cowRepositoryImpl)
- 구현된 클래스에서 가장 중요한 점은 QuerydslRepositorySupport를 상속해야 하고, 생성자가 존재하므로 클래스 내에서 super()를 이용해 호출해야 한다는 점 

## Intellij에서 QueryDSL 자동생성 클래스 찾지 못하는 경우

1. File > Project structure

<img src="https://user-images.githubusercontent.com/41010744/132791357-48b8e545-7d67-4e93-8fc5-87397a10139e.png">

2. `Modules` 탭에서 `target/generated-sources/java` 폴더 클릭한 뒤 상단 `Mark as`의 `Sources` 클릭하여 소스폴더로 인식하도록 설정

<img src="https://user-images.githubusercontent.com/41010744/132791449-125e8481-87d9-4ffe-a3e8-3d8c4f901440.png">

## 스프링 부트 2.5 업데이트 : hibernate, data.sql 관련 변동사항

- data.sql 스크립트를 초기화하는 과정 중간에 테이블을 찾지 못하는 상황
- spring boot : 2.4 > 2.5 버전 변동하는 데 있어 아래와 같은 변동 사항

> By default, data.sql scripts are now run before Hibernate is initialized. This aligns the behavior of basic script-based initialization with that of Flyway and Liquibase. If you want to use data.sql to populate a schema created by Hibernate, set spring.jpa.defer-datasource-initialization to true. While mixing database initialization technologies is not recommended, this will also allow you to use a schema.sql script to build upon a Hibernate-created schema before it’s populated via data.sql.

- spring boot 2.5 버전 부터 스크립트 기반 초기화의 동작 과정을 flyway, liquibase와 일치 시키기 위해
- data.sql은 hibernate 초기화되기 전에 실행된다는 내용
- 따라서 hibernate 초기화를 통해 생성된 스키마에다가 데이터를 채우기를 위해서 `data.sql`가 실행되기를 원한다면 application.yml(도는 properties)에 **spring.jpa.defer-datasource-initialization 옵션 값을 true**로 추가

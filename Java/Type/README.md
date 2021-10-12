# Type

> 개요 : spring project를 진행 중에 있어 Boolean Type의 flag를 선언하여 조건을 주려고 했었는데, Reference Type을 사용하여 null을 허용하면 안되는 부분에 사용하게 되어 코드 리뷰를 통해 수정하였다.

## Primitive vs Reference

- 자바의 자료형은 Primitive Type(기본형)과 Reference(참조형)으로 나뉜다

```
Java Data Type
ㄴ Primitive Type
    ㄴ Boolean Type(boolean)
    ㄴ Numeric Type
        ㄴ Integral Type
            ㄴ Integer Type(short, int, long)
            ㄴ Floating Point Type(float, double)
        ㄴ Character Type(char)
ㄴ Reference Type
    ㄴ Class Type
    ㄴ Interface Type
    ㄴ Array Type
    ㄴ Enum Type
    ㄴ etc.
```

1. Primitive Type

- 비객체 타입으로, Null을 가질 수 없는 형태

```
Type        Bits      Range of Values
----------------------------------------------------------------------------------------
byte         8bits    -2^7 ~ 2^7-1 (-128 ~ 127)
short       16bits    -2^15 ~ 2^15-1 (-32768 ~ 32767)
int         32bits    -2^31 ~ 2^31-1 (-2147483648 ~ 2147483647)
long        64bits    -2^63 ~ 2^63-1 (-9223372036854775808 ~ 9223372036854775807)
float       32bits    0x0.000002P-126f ~ 0x1.fffffeP+127f
double      64bits    0x0.0000000000001P-1022 ~ 0x1.fffffffffffffP+1023
char        16bits    \u0000 ~ \uffff (0 ~ 2^15-1) * 자바에서 unsgined로 동작하는 자료형
boolean      1bit     true, false
```

2. Reference Type

- 참조형은 기본적으로 java.lang.Object를 상속 받는다
- 또한, 선언한 자료형이 기본형이 아닌 경우 참조형이라 생각하면 된다
- 참조형에는 Class, Interface, Arrays이 있습니다.

      > Class Type
      - 기본형과 다르게 객체를 참조하는 형태

          > String Class
          - 이 클래스는 참조형에 속하지만 기본적인 사용은 기본형처럼 사용
          - 그리고 불변하는 immutable 객체
          - String 클래스에는 값을 변경해주는 메소드들이 존재하지만 해당 메소드를 통해 데이터를 바꾼다 해도 새로운 String Class 객체를 만들어내는 것
          - 일반적으로 기본형 비교는 ==연산자를 사용하지만 `String 객체간의 비교는 .equals() 메소드를 사용`해야 한다

          > Wrapper Class
          - 기본형은 앞쪽으로 서술한 대로 비객체이기 때문에 null이 불가
          - 하지만, 기본형에 null을 넣고 싶다면 wrapper class를 활용

| 기본형  | 대응 래퍼 클래스 |
| ------- | ---------------- |
| byte    | Byte             |
| short   | Short            |
| int     | Integer          |
| long    | Long             |
| float   | Float            |
| double  | Double           |
| char    | Char             |
| boolean | Boolean          |

> Interface Type

- 일반적으로 인터페이스는 추상 클래스(abstract class)와 많이 비교
- 인터페이스 생성시 새로운 참조 자료형(Reference Data Type)을 만드는 것과 같다
- 인터페이스도 자료형이기 대문에 자료형으로써 자신을 구현한 객체의 주소를 가질 수 있다
- 하지만, 인터페이스에 저으이된 메소드만 사용 가능

```java
    interface MyInterface<T> {
    void add(T value);
}
```

> Array Type

- 기본형과 참조형 둘 다 가능

```java
public class ArrayType {
    public static void main(String[] args) {
        int [] i = new int[2];
        Long [] l = new Long[2];
        Object[][] o = null;
    }
}
```

> Enum Type

- 열거형, String 클래스와 마찬가지로 불변의 객체
- 상수의 집합을 만들거나 특정 객체의 상태를 모아 열거형으로 만들면 코드의 가독성 증가

## Primitive Type -> Reference Type

- primitive type과 reference type간에 변환할 때 Boxing과 Unboxing이라고 한다

| 분류     | 설명                |
| -------- | ------------------- |
| Boxing   | Primitive > Wrapper |
| Unboxing | Wrapper > Primitive |

```java
// to int i from Integer ii
int i = ii.intValue();

// to Integer ii from int i
Integer ii = new Integer( i );
```

| 분류                     | 설명                                                     |
| ------------------------ | -------------------------------------------------------- |
| Integer.valueOf(String)  | Integer 클래스를 리턴하기 때문에 산술 연산을 할 수 없다. |
| Integer.parseInt(String) | int 형을 리턴하기 때문에 산술 연산을 할 수 있다.         |


#### 출처 : https://beomseok95.tistory.com/220

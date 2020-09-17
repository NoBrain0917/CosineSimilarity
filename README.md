# 코사인 유사도란?
두 벡터 간의 코사인 각도를 이용하여 구할 수 있는 두 벡터의 유사도
<br>그래프로 나타내면 아래와 같이 나온다.<br>
![이미지](https://github.com/NoBrain0917/CosineSimilarity/blob/master/%EC%BD%94%EC%82%AC%EC%9D%B8%EC%9C%A0%EC%82%AC%EB%8F%84.png?raw=true)
# 예시
```javascript
console.log(cos_sim("나는 샌즈를 매우 좋아한다","나는 샌즈를 엄청 싫어한다"));
//result : 0.50

console.log(cos_sim("나는 샌즈를 매우 좋아한다","나는 샌즈를 매우 싫어한다"));
//result : 0.75

```

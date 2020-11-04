<style>
  summary, h1 {
    font-size: 25px;
    font-weight: bold
  }

  img { 
    zoom: 0.7;
    width: 500px;
    margin: 0 auto
  }

  u {
    font-size: 20px
  }

  .exam-question {
    color: red;
    font-weight: bold; 
  }

  .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: transparent
  }
  #note {
    padding: 200px;
    height: 700px;
    width: 1000px;
    transform:  rotate(90deg);
  }
</style>

# hoofdstuk 3 - Boolean Algebra
<details>
  <summary>inhoud Boolean Algebra</summary>
    
    - definition
    - duality principal 
    - characteristics
    - exercices on Boolean Algebra
</details>

## definition  - EXAMEN
  $$
  \text{a collection } s \text{ with } 0 \in S \text{ and } 1 \in S  \\
  \text{two binary operators on S } + \text{ and } . \\
  \text{one unairy operator on S} - \\
  \text{for all } x,y,z \in s \text{ axioms of huntington are valid} \\
  \text{ commutatief } x+y=y+x \text{ and } x.y=y.x  \\
  \text{ distributief } x+(y.z)=(x+y).(x+z) \text{ and } x.(y+z)=(x.y)+(x.z) \\
  \text{ identity laws } x+0=x \text{ and } x.1=x \\
  \text{ complements } x+\overline{x}=1 \text{ and } x*\overline{x}=0  \\
  \shortparallel \\
  b = (s, +, \dot{ } , -,0,1 ) \\
  \shortparallel \\
  $$

<div class="container">
  <img src="https://slideplayer.com/slide/736460/2/images/33/Negation+Conjunction+Disjunction+T+F+p+F+T+q+p+F+T+q+p+Implication+Equivalence+T+F+q+p+T+F+q+p.jpg">
</div>

<div class="container">
  <img src="https://i.pinimg.com/originals/e6/30/09/e63009acaf85a297b452a0a4ee6a56f1.png">
</div>


- `+` stelt de disjunctie voor (OR)
- `.` stelt de conjuctie voor (AND)
- `-` stelt de negatie voor (NOT)


### kgv en ggd notes

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1604471434/IMG_20201104_072828_d3ktq1.jpg" id="note">

$$

$$

<img >
<details>
  <summary>duality principal</summary>



</details>

<details>
  <summary>characteristics</summary>



</details>

<details>
  <summary>exercices on Boolean Algebra</summary>

| a   | b   | c   | (not a) = d | b nand a = e | c xor e = m' | c and e = m |
| --- | --- | --- | ----------- | ------------ | ------------ | ----------- |
| t   | t   | t   | f           | f            | t            | f           |
| t   | t   | f   | f           | f            | f            | f           |
| t   | f   | t   | f           | t            | f            | t           |
| t   | f   | f   | f           | t            | t            | f           |
| f   | t   | t   | t           | t            | f            | t           |
| f   | t   | f   | t           | t            | t            | f           |
| f   | f   | t   | t           | t            | f            | t           |
| f   | f   | f   | t           | t            | t            | f           |

| a   | b   | (b xor a) = d | b and a = e | d or e = m |
| --- | --- | ------------- | ----------- | ---------- |
| t   | t   | f             | t           | t          |
| t   | f   | t             | f           | t          |
| f   | t   | t             | f           | t          |
| f   | f   | f             | f           | f          |

| a   | b   | c   | not(b xor a) = d | b and c = e | d and b = m | b or e = m |
| --- | --- | --- | ---------------- | ----------- | ----------- | ---------- |
| t   | t   | t   | t                | t           | t           | t          |
| t   | t   | f   | t                | f           | t           | t          |
| t   | f   | t   | f                | f           | f           | f          |
| t   | f   | f   | f                | f           | f           | f          |
| f   | t   | t   | f                | t           | f           | t          |
| f   | t   | f   | f                | f           | f           | t          |
| f   | f   | t   | t                | f           | f           | f          |
| f   | f   | f   | t                | f           | f           | f          |

| a   | b   | c   | a and b and c = d | a or b or c = e | d xor e = m |
| --- | --- | --- | ----------------- | --------------- | ----------- |
| t   | t   | t   | t                 | t               | f           |
| t   | t   | f   | f                 | t               | t           |
| t   | f   | t   | f                 | t               | t           |
| t   | f   | f   | f                 | t               | t           |
| f   | t   | t   | f                 | t               | t           |
| f   | t   | f   | f                 | t               | t           |
| f   | f   | t   | f                 | t               | t           |
| f   | f   | f   | f                 | f               | f           |

| a   | b   | c   | a nand b = d | c or d = m |
| --- | --- | --- | ------------ | ---------- |
| t   | t   | t   | f            | t          |
| t   | t   | f   | f            | f          |
| t   | f   | t   | t            | t          |
| t   | f   | f   | t            | t          |
| f   | t   | t   | t            | t          |
| f   | t   | f   | t            | t          |
| f   | f   | t   | t            | t          |
| f   | f   | f   | t            | t          |

| a   | b   | c   | d   | c and d = x | c xor d = z | x buff by a = y | z buff by b = w | m   |
| --- | --- | --- | --- | ----------- | ----------- | --------------- | --------------- | --- |
| t   | t   | t   | t   | T           | F           | T               | F               | x   |
| t   | t   | t   | f   | F           | T           | F               | T               | x   |
| t   | t   | f   | t   | F           | T           | F               | T               | x   |
| t   | t   | f   | f   | F           | F           | F               | F               | F   |
| t   | f   | t   | t   | T           | F           | T               | hi-z            | T   |
| t   | f   | t   | f   | F           | T           | F               | hi-z            | F   |
| t   | f   | f   | t   | F           | T           | F               | hi-z            | F   |
| t   | f   | f   | f   | F           | F           | F               | hi-z            | F   |
| f   | t   | t   | t   | T           | F           | hi-z            | F               | F   |
| f   | t   | t   | f   | F           | T           | hi-z            | T               | T   |
| f   | t   | f   | t   | F           | T           | hi-z            | T               | T   |
| f   | t   | f   | f   | F           | F           | hi-z            | F               | F   |
| f   | f   | t   | t   | T           | F           | hi-z            | hi-z            | -   |
| f   | f   | t   | f   | F           | T           | hi-z            | hi-z            | -   |
| f   | f   | f   | f   | F           | F           | hi-z            | hi-z            | -   |

| a   | b   | c   | a and b = d | a xor b = e | b or c = f | d buff by a = g | f buff by e =h | m   |
| --- | --- | --- | ----------- | ----------- | ---------- | --------------- | -------------- | --- |
| 1   | 1   | 1   | 1           | 0           | 1          | 1               | 1              | 1   |
| 1   | 1   | 0   | 1           | 0           | 1          | 1               | 1              | 1   |
| 1   | 0   | 1   | 0           | 1           | 1          | 0               | 1              | x   |
| 1   | 0   | 0   | 0           | 1           | 0          | 0               | 0              | 0   |
| 0   | 1   | 1   | 0           | 1           | 1          | hi-z            | 1              | 1   |
| 0   | 1   | 0   | 0           | 1           | 1          | hi-z            | 1              | 1   |
| 0   | 0   | 1   | 0           | 0           | 1          | hi-z            | hi-z           | -   |
| 0   | 0   | 0   | 0           | 0           | 0          | hi-z            | hi-z           | -   |

</details>

<details>
  <summary>equivalence</summary>

def. two logical gates are equivalent if their outputs are the same given a certain input

</details>

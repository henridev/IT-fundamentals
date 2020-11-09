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

# hoofdstuk 4 - Boolean Algebra

- definition
- duality principal
- characteristics
- exercices on Boolean Algebra

## definition - EXAMEN

$$
\text{a collection } s \text{ with two neutral elements } 0 \in S \text{ and } 1 \in S  \\
\text{two binary operators on S } + \text{ and } . \\
\text{one unairy operator on S} - \\
\space\\
\text{for all } x,y,z \in s \text{ axioms of huntington are valid} \\
\text{ commutatief } \rightarrow x+y=y+x \text{ and } x.y=y.x  \\
\text{ distributief } \rightarrow x+(y.z)=(x+y).(x+z) \text{ and } x.(y+z)=(x.y)+(x.z) \\
\text{ identity laws } \rightarrow x+0=x \text{ and } x.1=x \\
\text{ complements } \rightarrow x+\overline{x}=1 \text{ and } x*\overline{x}=0  \\
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

$$
\text{GGD / GCD | grootste gemene deler}  \\
\text{grootse nummer dat factor is van x en y}\\
\text{methode | find all shared common prime factors and multiply}\\
\space\\

\text{KGV / LCM | grootste gemene deler}  \\
\text{kleinste nummer met zowel x als y als factor}\\
\text{methode | all common factors of both multiplied (kleinste nummer met elke factor van beide)}\\
\space\\

\text{EXAMPLE} \\
\text{GGD en KGV 800 en 2100}  \\
\text{prime factorization 800} \rightarrow 2(400) . 2(200) . 2(100) . 2(50) . 2(25) . 5(5) . 5(1) \\
\text{prime factorization 2100} \rightarrow 2(1050) . 2(525) . 3(175) . 5(35) . 5(7) . 7(1)\\
\text{GGD} \rightarrow 2.2.5.5=100 \\
\text{KGV} \rightarrow 2.2.2.2.2.3.5.5.7=16800\\
$$

### assignements

$$
\text{D | collection of denominators of 6}  \\
\text{operators are}\\
x+y=kgv(x,y)\\
x*y=ggd(x,y)\\
x+y=\frac{x}{6}\\
\text{is this bool algebra}\\
\space\\
\text{factors} \rightarrow 1, 2, 3, 6\\
$$

<div class="container">

| KGV | 1   | 2   | 3   | 6   |
| --- | --- | --- | --- | --- |
| 1   | 1   | 2   | 3   | 6   |
| 2   | 2   | 2   | 6   | 6   |
| 3   | 3   | 6   | 3   | 6   |
| 6   | 6   | 6   | 6   | 6   |

| GGD | 1   | 2   | 3   | 6   |
| --- | --- | --- | --- | --- |
| 1   | 1   | 1   | 1   | 1   |
| 2   | 1   | 2   | 1   | 2   |
| 3   | 1   | 1   | 3   | 3   |
| 6   | 1   | 2   | 3   | 6   |

| COMP |     | GGD | KGV |
| ---- | --- | --- | --- |
| 1    | 6   | 1   | 6   |
| 2    | 3   | 1   | 6   |
| 3    | 2   | 1   | 6   |
| 6    | 1   | 1   | 6   |

</div>

$$
\text{commutative} \rightarrow \text{see table it does not matter if we switch numbers for operations} \\
\text{distributive} \rightarrow ggd(a, kgv(b, c)) = kgv(ggd(a,b), ggd(a, c)) \\
\text{distributive} \rightarrow kgv(a, ggd(b, c)) = ggd(kgd(a,b), kgd(a, c)) \\
\text{identity} \rightarrow kgv(x, 0) = x \text{ see table 1 column always returns x} \\
\text{identity} \rightarrow ggd(x, 1) = x \text{ see table 6 column always returns x}\\
\text{complement} \rightarrow kgv(x, \overline{x}) = 1 \text{ see table always returning 6}\\
\text{complement} \rightarrow ggd(x, \overline{x}) = 0 \text{ see table always returning 1}\\
$$

---

$$
\text{D | collection of denominators of 8}  \\
\text{operators are}\\
x+y=kgv(x,y)\\
x*y=ggd(x,y)\\
x+y=\frac{x}{8}\\
\text{is this bool algebra}\\
\space\\
\text{factors} \rightarrow 1, 2, 4, 8\\
$$

<div class="container">

| KGV | 1   | 2   | 4   | 8   |
| --- | --- | --- | --- | --- |
| 1   | 1   | 2   | 4   | 8   |
| 2   | 2   | 2   | 4   | 8   |
| 4   | 4   | 4   | 4   | 8   |
| 8   | 8   | 8   | 8   | 8   |

| GGD | 1   | 2   | 4   | 8   |
| --- | --- | --- | --- | --- |
| 1   | 1   | 1   | 1   | 1   |
| 2   | 1   | 2   | 2   | 2   |
| 4   | 1   | 2   | 4   | 4   |
| 8   | 1   | 2   | 4   | 8   |

| COMP |     | GGD   | KGV   |
| ---- | --- | ----- | ----- |
| 1    | 8   | 1     | 8     |
| 2    | 4   | **2** | **4** |
| 4    | 2   | **2** | **4** |
| 8    | 1   | 1     | 8     |

</div>

$$
\text{complement} \rightarrow kgv(x, \overline{x}) = 1 \text{ see table for 2 and 4 returns 4}\\
\text{complement} \rightarrow ggd(x, \overline{x}) = 0 \text{ see table for 2 and 4 returns 2}\\
$$

## duality principal

every axiom of boolean algebra has a dual axiom or dual characteristic

<div class="container">

| symbol | dual form |
| ------ | --------- |
| +      | .         |
| .      | +         |
| 0      | 1         |
| 1      | 0         |
| -      | -         |

</div>

### assignements

find the dual form

$$
\overline{x+y}\\
x=\overline{\overline{x}}
$$

$$
\overline{x.y}\\
x=\overline{\overline{x}}
$$

## characteristics EXAMEN!

### characteristic 1 complement is unique

$$
\text{complement is unique}
\rightarrow \text{for each x of S there is one } \overline{x} \text{ for which } \\
x+\overline{x}=1 \\
x.\overline{x}=0 \\
\space \\
\text{proof } y\in S \text{ with } x+y=1 \space \And x*y=0 \\
\text{identity-law} \rightarrow y*1 = y \\
\text{complement-law} \rightarrow y*(x+\overline{x}) = y \\
\text{distributive-law} \rightarrow (y*x)+(y*\overline{x}) = y \\
\text{commutative-law} \rightarrow (y*\overline{x})+(y*x) = y \\
\text{supposition} \rightarrow (y*\overline{x})+0 = y \\
\text{complement-law} \rightarrow (x.\overline{x})+(y*\overline{x}) = y \\
\text{distributive-law} \rightarrow \overline{x}*(y+x) = y \\
\text{supposition} \rightarrow \overline{x}*1 = y \\
\text{identity-law} \rightarrow \overline{x} = y \\
$$

---

### characteristic 2 involutie

$$
x=\overline{\overline{x}}\\
\space \\
\text{proof }  \\
\text{identity-law} \rightarrow \overline{\overline{x}}*1 = \overline{\overline{x}} \\
\text{complement-law} \rightarrow \overline{\overline{x}}*(x+\overline{x}) = \overline{\overline{x}} \\
\text{distributive-law} \rightarrow (\overline{\overline{x}}*x)+(\overline{\overline{x}}*\overline{x}) = \overline{\overline{x}} \\
\text{commutative-law} \rightarrow (\overline{\overline{x}}*x)+(\overline{x}*\overline{\overline{x}})  = \overline{\overline{x}} \\
\text{complement-law} \rightarrow (\overline{\overline{x}}*x)+0 = \overline{\overline{x}} \\
\text{complement-law} \rightarrow (\overline{\overline{x}}*x)+(x*\overline{x}) \\
\text{commutative-law} \rightarrow (x*\overline{\overline{x}})+(x.\overline{x}) \\
\text{distributive-law} \rightarrow x+(\overline{\overline{x}}*\overline{x}) = \overline{\overline{x}} \\
\text{complement-law} \rightarrow x+0= \overline{\overline{x}} \\
\text{identity-law} \rightarrow x = \overline{\overline{x}} \\
$$

---

### characteristic 3 complement 0 is 1 en comlement 1 is 0

$$
\overline{0}=1\\
\overline{1}=0\\
\space \\
\text{proof }  \\
$$

---

### characteristic 4 idempotentie

$$
x+x=x\\
x*x=x\\
\space \\
\text{proof }  \\

\text{identity-law} \rightarrow 0+x = x  \\
\text{complement-law} \rightarrow (x*\overline{x})+x = x  \\
\text{distributive-law} \rightarrow (x+x)*(x+\overline{x}) = x \\
\text{complement-law} \rightarrow (x+x)*(1) = x \\
\text{distributive-law} \rightarrow (x*1)+(x*1) = x \\
\text{identity-law} \rightarrow x+x = x\\

\space \\
\text{identity-law} \rightarrow 1*x = x  \\
\text{complement-law} \rightarrow (x+\overline{x})*x = x  \\
\text{distributive-law} \rightarrow (x*x)+(x*\overline{x}) = x \\
\text{complement-law} \rightarrow (x*x)+(0) = x \\
\text{distributive-law} \rightarrow (x+0)*(x+0) = x \\
\text{identity-law} \rightarrow x*x = x\\
$$

---

### characteristic 5 begrenzing

$$
x+1=1\\
x*0=0\\
\space \\
\text{proof ! begin met linkerlid }  \\
\space \\

\text{complement-law} \rightarrow x+\overline{x} = 1  \\
\text{identity-law} \rightarrow x+(1*\overline{x}) = 1  \\
\text{distributive-law} \rightarrow (x+1)*(x+\overline{x}) = 1 \\
\text{complement-law} \rightarrow (x+1)*1 = 1 \\
\text{distributive-law} \rightarrow (x*1)+(1*1) = 1 \\
\text{identity-law} \rightarrow x+(1*1) = 1\\
\text{indempotentie-law} \rightarrow x+1 = 1\\

\space \\
\text{identity-law} \rightarrow x0+0 = x0 \\
\text{complement-law} \rightarrow x0+\overline{x}x = x0  \\
\text{distributive-law} \rightarrow x(0+\overline{x}) = x0 \\
\text{identity-law} \rightarrow x\overline{x} = x0 \\
\text{complement-law} \rightarrow 0 = x0 \\
$$

---

### characteristic 6 absorptie

$$
x+(x*y)=x\\
x*(x+y)=x\\
\space \\
\text{proof 1 : }  x+(x*y)=x\\
\space \\

\text{identity-law} \rightarrow (1+x)+(xy) = x+(xy)  \\
\text{distributive-law} \rightarrow x(1+y) = x+(xy) \\
\text{begrenzing-law} \rightarrow (x)(1) = x+(xy) \\
\text{identity-law} \rightarrow x = x+(xy) \\

\space \\
\text{proof 2 : }  x*(x+y)=x\\
\space \\

\text{distributive-law} \rightarrow (xx)+(xy) = x*(xy)  \\
\text{indempotentie-law} \rightarrow x+xy = x+(xy) \\
\text{ follow prove 1 }
$$

---

### characteristic 7 associatief

$$
x+(y+z)=(x+y)+z=x+y+z\\
x.(y.z)=(x.y).z=x.y.z\\
\space \\
\text{proof }  \\
$$

---

### characteristic 8 morgan laws

$$
\overline{x+y}=\overline{x}.\overline{y}\\
\overline{x.y}=\overline{x}+\overline{y}\\
\space \\
\text{proof }  \\
$$

<div class="container">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Demorganlaws.svg/1200px-Demorganlaws.svg.png">
</div>

## exercices on Boolean Algebra

> proposities voor eigenschappen absorptie en begrenzing

$$
x+1=1 \rightarrow X \vee T = T \\
x*0=0 \rightarrow X \wedge F = F\\
x+(x*y)=x \rightarrow X \vee (X \wedge Y) = X\\
x*(x+y)=x \rightarrow X \wedge (X \vee Y) = X\\
$$

<div class="container">

| x   | y   | a = x and y | b = x or y | x or a | x and b |
| --- | --- | ----------- | ---------- | ------ | ------- |
| 0   | 0   | 0           | 0          | 0      | 0       |
| 0   | 1   | 0           | 1          | 0      | 0       |
| 1   | 0   | 0           | 1          | **1**  | **1**   |
| 1   | 1   | 1           | 1          | **1**  | **1**   |

</div>

> bepaal complement en duale uitdrukking

$$
x+\overline{y*z} \rightarrow x*\overline{y+z} \\
(x*y*z) + (\overline{x}*\overline{y}*\overline{z}) \rightarrow (x+y+z) * (\overline{x}+\overline{y}+\overline{z})\\
$$

> toon geldigheid van volgende uitdrukking

$$
(x+\overline{y})*(\overline{x}*y) =  \overline{x}*\overline{y}+x*y \\
(x*y*z) + (\overline{x}*\overline{y}*\overline{z}) \rightarrow (x+y+z) * (\overline{x}+\overline{y}+\overline{z})\\
$$

## equivalence

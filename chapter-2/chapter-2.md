# hoofdstuk 2 - Logica

inhoud propositie logica: 

- taal van prop
- proposities
- logical operators
- truth tables
- tautologies and contradictions
- logical implications and logical equivalence
- substitution laws

## I. prop

**logica** / **formele theorie** bestaat uit

- **taal** 
    - **alfabet** = verzameling bevantende alle symbolen geldig binnen de theorie 
    - **syntaxregels** = aanwijzingen hoe met het alfabet geldige formules worden gemaakt
- **regels** = laten toe formules aan te passen volgens toegestane redeneringsvormen

### A. alfabet

- **propositionele variabelen of propositieletters** : p / q / r / p1 / p2 ... pn
- **logische of propositionele constante** : T / F
- **logische operatoren of connectiviteiten** : ¬ | ∧ | ∨ | → | ↔
- **hulpsymbolen** : ( en ).

### B. Syntaxregels

> een geldige formule is een **propositionele vorm**

- een **propositieletter** is een **propositionele vorm**
- een **propositionele constante** T of F is een **propositionele vorm**
- **logische operatoren** in combinatie met propositieletters zijn propositionele vormen eg. `P ↔ Q`

>  voorrangsregels  ¬ |  ∧ | ∨ |→ | ↔

## II. proposities


> an expression signifying T or F

Remarks :

- propositieletter of propositionele variable stelt een willekeurige propositie voor
- propositionele constantes zijn proposities
  - T is always true
  - F is always false

### A. Characteristics 

#### **Principal of non contradiction** = a proposition cannot be both true and false and the same time

#### **Principal of excluded thirds** = a proposition can only be true or false

eg : true propositions

- 5 > 2
- 3 ∈ {1,2,3,4}
- Er bestaat geen reëel getal𝑥zodat 𝑥2+ 1 = 0.

eg : false propositions

- −6 ≤ −567
- Het getal 𝜋 is een natuurlijk getal.

eg : non propositions

- 1000 is een groot getal.
- 𝑥 > 7
- De sterrenhemel van het noordelijk halfrond.
- Wiskunde is moeilijk

oef :

1. De verzameling 𝐴 is eindig. = nee kunnen niet zeker waar onwaar verklaren
2. ’s Avonds als het donker is. = nee
3. Voor elk koppel(𝑥,𝑦) ∈ ℕ × ℕ geldt: 𝑥 > 𝑦 of 𝑥 ≤ 𝑦. = ja vaststaand waar
4. 1 = 2 ↔ 13 is deelbaar door 4. = ja vasstaand waar
5. 3𝑥2− 5𝑥 + 1 = 0 = nee uitspraak afhankelijk van x

## III. logical operators


| symbool | uitspraak                                                    | benaming               |
| ------- | ------------------------------------------------------------ | ---------------------- |
| ¬       | niet                                                         | negatie of ontkenning  |
| ∧       | en                                                           | conjunctie             |
| ∨       | of                                                           | disjunctie             |
| →       | als …dan… (**if  p is true then q is also true**)            | materiële implicatie   |
| ↔       | als en slechts als (**either both statements are true or both are false**.) | materiële equivalentie |

## IV. truth tables


implicaties : (**if  p is true then q is also true**)

| p    | q    | p → q                                                        |
| ---- | ---- | ------------------------------------------------------------ |
| t    | t    | T (als ik pull draag dan heb ik het warm)                    |
| t    | f    | F (als ik pull draag dan zijn er 40 dagen in maand)          |
| f    | t    | T (als er 40 dagen in een maand zijn dan draag een pull)     |
| f    | f    | T (als er 40 dagen in een maand zijn dan zijn er 35 dagen in een maand) |

![image](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMPLY_ANSI.svg/1280px-IMPLY_ANSI.svg.png)

equivalentie :

| p   | q   | p ↔ q |
| --- | --- | ----- |
| t   | t   | T     |
| t   | f   | F     |
| f   | t   | F     |
| f   | f   | T     |

- ¬(7 ∈ {5,3,1}) = T
- (2 ∈ {2,4,6,...}) ∨ (1 + 1 = 7) = T
- (6 < 7) ∧ (8 ∈ {0,1}) = T
- (1 = 2) → (5 > 100) = T
- (1 = 2) ↔ (5 > 100) = 
- ¬(6 > 45) = T
- (2 + 2 = 4) ∧ (3 is een priemgetal) = T
- (4 is een reëel getal) ∨ (3 > 100) = T
- (100 > 30) → (100 > 2) = T
- Als 1 = 2, dan ben ik Napoleon. = T
- (1 = 2) ↔ (Gent ligt in West-Vlaanderen) = T

p = ik ben gelukkig | q ik ben rijk

- ‘Als ik rijk ben, voel ik mij gelukkig’. | q → p
- ‘Als ik mij gelukkig voel, ben ik rijk’. | p → q
- ‘Als ik niet rijk ben, voel ik mij niet gelukkig’. | ¬q → ¬p
- ‘Het is niet waar dat ik mij niet gelukkig voel als ik niet rijk ben’. | ¬(¬q → ¬p)

NAND : (𝑝|𝑞) ∶= ¬(𝑝 ∧ 𝑞).

| p   | q   | p ↔ q |
| --- | --- | ----- |
| t   | t   | F     |
| t   | f   | T     |
| f   | t   | T     |
| f   | f   | T     |

oef : als 𝑝 → 𝑞, ¬𝑝 → 𝑟 en 𝑟 → (𝑝 ∨ 𝑞)alle waar zijn, wat is dan de waarheids waarde van 𝑞? => T

| p   | q     | r   | 𝑝 → 𝑞 | ¬𝑝 → 𝑟 | 𝑟 → (𝑝 ∨ 𝑞) |
| --- | ----- | --- | ----- | ------ | ----------- |
| t   | t     | t   | T     | T      | T           |
| t   | **t** | f   | **T** | **T**  | **T**       |
| t   | f     | t   | F     | T      | T           |
| t   | f     | f   | F     | T      | T           |
| f   | **t** | t   | **T** | **T**  | **T**       |
| f   | t     | f   | T     | F      | T           |
| f   | f     | t   | T     | T      | F           |
| f   | f     | f   | T     | F      | T           |

| p   | q   | r   | 𝑝 → 𝑞 | ¬𝑞 ∨ 𝑟 | (𝑝 → 𝑞) ∧ (¬𝑞 ∨ 𝑟) |
| --- | --- | --- | ----- | ------ | ------------------ |
| t   | t   | t   | T     | T      | T                  |
| t   | t   | f   | T     | F      | F                  |
| t   | f   | t   | F     | T      | F                  |
| t   | f   | f   | F     | T      | F                  |
| f   | t   | t   | T     | T      | T                  |
| f   | t   | f   | T     | F      | F                  |
| f   | f   | t   | T     | T      | T                  |
| f   | f   | f   | T     | T      | T                  |

| p   | q   | (F ∨ 𝑝) | (𝑞 ∧ F) | (F ∨ 𝑝) → (𝑞 ∧ F) |
| --- | --- | ------- | ------- | ----------------- |
| t   | t   | T       | F       | F                 |
| t   | f   | T       | F       | F                 |
| f   | t   | F       | F       | T                 |
| f   | f   | F       | F       | T                 |

| p   | q   | r   | (𝑝 ↔ 𝑟) | (𝑟 ↔ 𝑞) | (𝑝 ↔ 𝑞) | ((𝑝 ↔ 𝑟) ∧ (𝑟 ↔ 𝑞)) | ((𝑝 ↔ 𝑟) ∧ (𝑟 ↔ 𝑞)) → (𝑝 ↔ 𝑞) |
| --- | --- | --- | ------- | ------- | ------- | ------------------- | ----------------------------- |
| t   | t   | t   | T       | T       | T       | T                   | T                             |
| t   | t   | f   | F       | F       | T       | F                   | T                             |
| t   | f   | t   | T       | F       | F       | F                   | T                             |
| t   | f   | f   | F       | T       | F       | F                   | T                             |
| f   | t   | t   | F       | T       | F       | F                   | T                             |
| f   | t   | f   | T       | F       | F       | F                   | T                             |
| f   | f   | t   | F       | F       | T       | F                   | T                             |
| f   | f   | f   | T       | T       | T       | T                   | T                             |

## V. tautologie, contradictie en contingentie


- **tautologie**
  - **propositionele vorm** waarbij resultaat altijd T is ongeacht waarden van propositionele variabelen die erin voorkomen
  - als P tautologie is dan kunnen we zeggen **P is geldig**
- **contradictie**
  - **propositionele vorm** waarbij resultaat altijd F is ongeacht waarden van propositionele variabelen die erin voorkomen
  - als P contradictie is dan kunnen we zeggen **P is ongeldig**
- **contingentie**
  - propositionele vorm die noch tautologie noch contradictie is

> ex tautologie

| p   | q   | (p → q) | ¬p  | ¬p ∨ q | ((𝑝 → q) → (¬p ∨ 𝑞)) |
| --- | --- | ------- | --- | ------ | -------------------- |
| t   | t   | T       | F   | T      | T                    |
| t   | f   | F       | F   | F      | T                    |
| f   | t   | T       | T   | T      | T                    |
| f   | f   | T       | T   | T      | T                    |

- ¬((s → t) ∧ (p ∨ 𝑞)) ↔ ¬((s → t) ∧ (p ∨ 𝑞)) ==> we can actualy see we will have ↔ with two of same vals so we know it will always be true

| s   | t   | p   | q   | (s → t) | (p ∨ 𝑞) | ¬((s → t) ∧ (p ∨ 𝑞)) |
| --- | --- | --- | --- | ------- | ------- | -------------------- |
| t   | t   | t   | t   | T       | T       | F                    |
| t   | t   | t   | f   | T       | T       | F                    |
| t   | t   | f   | t   | T       | T       | F                    |
| t   | t   | f   | f   | T       | F       | F                    |
| t   | f   | t   | t   | F       | T       | F                    |
| t   | f   | t   | f   | F       | T       | F                    |
| t   | f   | f   | t   | F       | T       | F                    |
| t   | f   | f   | f   | F       | F       | F                    |
| f   | t   | t   | t   | T       | T       | F                    |
| f   | t   | t   | f   | T       | T       | F                    |
| f   | t   | f   | t   | T       | T       | F                    |
| f   | t   | f   | f   | T       | F       | F                    |
| f   | f   | t   | t   | T       | T       | F                    |
| f   | f   | t   | f   | T       | T       | F                    |
| f   | f   | f   | f   | T       | F       | F                    |

- (p ∧ (r ∨ v)) → ((q ∨ 𝑞) ∧ ¬q) ==> second part always true thus tautologie (propositionele vorm implication could only be possibly be true if second part was false)

<u>**two special propositions**</u>

- **logical consequence of**
  - proposition q is a logical implication of p if the propositional form p → q is a tautologie
  - p ⇒ q : with ⇒ meaning **logical implication**
- **logical equivalence of**
  - proposition p is a logical equivalence of q if the propositional form p ↔ q is a tautologie
  - p ⇔ q : with ⇔ meaning **logical equivalence**

1. ((𝑝 ∧ 𝑞) → 𝑟) ⇔ ((𝑝 → 𝑟) ∨ (𝑞 → 𝑟)) : bewijs van logische equivalentie (NOOIT one F and other T)

| p   | q   | r   | (𝑝 ∧ 𝑞) | ((𝑝 ∧ 𝑞) → 𝑟) | (𝑝 → 𝑟) | (𝑞 → 𝑟) | ((𝑝 → 𝑟) ∨ (𝑞 → 𝑟)) |
| --- | --- | --- | ------- | ------------- | ------- | ------- | ------------------- |
| t   | t   | t   | F       | **T**         | T       | T       | **T**               |
| t   | t   | f   | F       | **F**         | F       | F       | **F**               |
| t   | f   | t   | T       | **T**         | T       | T       | **T**               |
| t   | f   | f   | T       | **T**         | F       | T       | **T**               |
| f   | t   | t   | F       | **T**         | T       | T       | **T**               |
| f   | t   | f   | F       | **T**         | T       | F       | **T**               |
| f   | f   | t   | F       | **T**         | T       | T       | **T**               |
| f   | f   | f   | F       | **T**         | T       | T       | **T**               |

2. ((𝑝 ∨ 𝑞) → 𝑟) ⇒ ((𝑝 ∧ 𝑞) → 𝑟) : bewijs van logische implicatie (NOOIT T -> F)

| p   | q   | r   | ((𝑝 ∨ 𝑞) → 𝑟) | ((𝑝 ∧ 𝑞) → 𝑟) |
| --- | --- | --- | ------------- | ------------- |
| t   | t   | t   | **T**         | **T**         |
| t   | t   | f   | **F**         | **F**         |
| t   | f   | t   | **T**         | **T**         |
| t   | f   | f   | **F**         | **T**         |
| f   | t   | t   | **T**         | **T**         |
| f   | t   | f   | **F**         | **T**         |
| f   | f   | t   | **T**         | **T**         |
| f   | f   | f   | **T**         | **T**         |

<u>**T / F laws**</u>

1. (𝑝 ∧ 𝑊) ⇔ 𝑝
2. (𝑝 ∧ 𝑂) ⇔ 𝑂
3. (𝑝 ∨ 𝑊) ⇔ 𝑊
4. (𝑝 ∨ 𝑂) ⇔ 𝑝
5. (𝑝 → 𝑊) ⇔ 𝑊
6. (𝑂 → 𝑝) ⇔ 𝑊
7. (𝑝 ↔ 𝑊) ⇔ 𝑝
8. (𝑝 ↔ 𝑂) ⇔ ¬𝑝
9. (𝑝 ∨ ¬𝑝) ⇔ 𝑊
10. (𝑝 ∧ ¬𝑝) ⇔ 𝑂
11. (𝑝 → 𝑝) ⇔ 𝑊
12. (𝑝 ↔ 𝑝) ⇔ 𝑊

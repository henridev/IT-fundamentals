<style>
  summary, h1 {
    font-size: 25px;
    font-weight: bold
  }

  img { 
    zoom: 0.7;
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
      background: white
  }
</style>

# hoofdstuk 3 - Logische poorten

<details>
  <summary>inhoud logische poorten</summary>
    
    - description
    - characteristics
    - basic ports
    - logical connections
    - exercices on logical connections
    - equivalence
</details>

<details>
  <summary>description</summary>

- def. digital electronic switch working according to boolean logic
- elemental building blocks for computers
- build from electronical components (transistors / diods / weerstanden) (one port contains around 1-10 transistors)
- mostly grouped into **integrated circuits**

</details>

<details>
  <summary>characteristics</summary>

- mostly multiple ins one out
- signals can only be 1 at 3.5 volt or 0 at 0.5 volt
- possible inputs is always $2^n$

</details>

<details>
  <summary>basic ports</summary>

- NOT
- AND
- OR
- NAND
- NOR
- XOR

<div class="container"><img src="https://media.cheggcdn.com/study/a0f/a0f4027a-e18a-4775-bc58-1b3ac33db9fa/527712-3-4ICRQ1.png"></div>

<u>**tri-state-buffer**</u>

<div class="container"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Tristate_buffer.svg/320px-Tristate_buffer.svg.png"></div>

> a tri state buffer has an input A and a control input B. the controlinput B controls whether the input A is passed to the output
> or not. if the contorl input is a a HI-z signal is passed which disconnects the output from the circuit

state options :

- all are decoupled
  - no signal on conductor
  - output is undetermined
- one buffer coupled
  - signal of that buffer passed to conductor
- - one buffer coupled with same signal
  * that signal gets passed to the conductor
- - one buffer coupled with different signal
  * **short circuit**

</details>

<details>
  <summary>exercices logical connections</summary>

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
| t   | t   | t   | t   | T           | F           | hi-z            | hi-z            | -   |
| t   | t   | t   | f   | F           | T           | hi-z            | hi-z            | -   |
| t   | t   | f   | t   | F           | T           | hi-z            | hi-z            | -   |
| t   | t   | f   | f   | F           | F           | hi-z            | hi-z            | -   |
| t   | f   | t   | t   | T           | F           | hi-z            | F               | F   |
| t   | f   | t   | f   | F           | T           | hi-z            | T               | T   |
| t   | f   | f   | t   | F           | T           | hi-z            | T               | T   |
| t   | f   | f   | f   | F           | F           | hi-z            | F               | F   |
| f   | t   | t   | t   | T           | F           | T               | hi-z            | T   |
| f   | t   | t   | f   | F           | T           | F               | hi-z            | F   |
| f   | t   | f   | t   | F           | T           | F               | hi-z            | F   |
| f   | t   | f   | f   | F           | F           | F               | hi-z            | F   |
| f   | f   | t   | t   | T           | F           | T               | F               | x   |
| f   | f   | t   | f   | F           | T           | F               | T               | x   |
| f   | f   | f   | f   | F           | F           | F               | F               | F   |

| a   | b   | c   | a and b = d | a xor b = e | b or c = f | d buff by a = g | f buff by e =h | m   |
| --- | --- | --- | ----------- | ----------- | ---------- | --------------- | -------------- | --- |
| 1   | 1   | 1   | 1           | 0           | 1          | 1               | 1              | 1   |
| 1   | 1   | 0   | 1           | 0           | 1          | 1               | 1              | 1   |
| 1   | 0   | 1   | 0           | 1           | 1          | 0               | hi-z           | 0   |
| 1   | 0   | 0   | 0           | 1           | 0          | 0               | hi-z           | 0   |
| 0   | 1   | 1   | 0           | 1           | 1          | hi-z            | hi-z           | -   |
| 0   | 1   | 0   | 0           | 1           | 1          | hi-z            | hi-z           | -   |
| 0   | 0   | 1   | 0           | 0           | 1          | hi-z            | 1              | 1   |
| 0   | 0   | 0   | 0           | 0           | 0          | hi-z            | 0              | 0   |

</details>

<details>
  <summary>equivalence</summary>

def. two logical gates are equivalent if their outputs are the same given a certain input

</details>

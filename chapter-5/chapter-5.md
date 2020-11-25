# hoofdstuk 5 - Boolean expressions and functions

## notatie

$$
𝐵 = (𝐵,+,⋅,−,0,1) \text{ with } 𝐵 = {0,1} \text{ and }\\
\space\\

\text{disjunction}\\
\begin{matrix}
+ & 0 & 1\\
0 & 0 & 1\\
1 & 1 & 1\\
\end{matrix}\\
\space\\
\text{conjuction}\\
\begin{matrix}
. & 0 & 1\\
0 & 0 & 0\\
1 & 0 & 1\\
\end{matrix}\\
\space\\
\text{negation}\\
\begin{matrix}
  & -\\
0 & 1\\
1 & 0\\
\end{matrix}

\space\\
𝑎,𝑏,𝑐,... \in 𝐵 \text{ are constants } \\
𝑥,𝑦,𝑧,... \in 𝐵 \text{ are variabels }
$$

## boolese uitdrukkingen

$$
f:B^n \rightarrow B : (x_1,x_2,\dots,x_n) \rightarrow f(x_1,x_2,\dots,x_n) \\
f(x_1,x_2,\dots,x_n) \text{ as a boolean expression}\\
\space\\
\text{example : } f(x,y)=x+\overline{y}+\overline{x}*y \\
\begin{matrix}
x & y & \overline{x} & \overline{y} & \overline{x}*y & f(x, y)\\
0 & 0 & 1 & 1 & 0 & 1\\
0 & 1 & 1 & 0 & 1 & 1\\
1 & 0 & 0 & 1 & 0 & 1\\
1 & 1 & 0 & 0 & 0 & 1\\
\end{matrix}\\
$$


$$
\text{two boolean functions g and f are equal if they have the same output for the same input}\\
f(x_1,x_2,\dots,x_n)=g(x_1,x_2,\dots,x_n)\\
\text{for all } (x_1,x_2,\dots,x_n) \in B^n
$$

$$
\text{because two boolean functions can be equal} \\
\text{the same result can be achieved using different prescriptions} \\
\text{we can reduce functions that have the same result to one standard form}\\
\text{DNV = disjunctieve normaalvorm als de som van minimale uitdrukkingen}\\
\text{CNV = conjunctieve normaalvorm als het product van maximale uitdrukkingen}\\
$$

## minimum and maximum boolese uitdrukkingen

$$
\text{een bool expression in n variabels } x_1, x_2, \dots, x_n \\
\text{is minimal if this is the product of n factors for which} \\
\text{the k-th factor is } x_k \or \overline{x}_k
$$

$$
\text{een bool expression in n variabels } x_1, x_2, \dots, x_n \\
\text{is maximal if this is the sum of n terms for which} \\
\text{the k-th factor is } x_k \or \overline{x}_k
$$

## DNV = disjunctieve normaalvorm

is de som van minimale uitdrukkingen
$$
f(x,y)= (x*y) + (\overline{x}*y) + (x*\overline{y})\\
f(x,y,z)= (\overline{x}*y*z) + (\overline{x}*\overline{y}*z) + (\overline{x}*\overline{y}*\overline{z})\\
$$
there are two ways to get a DNV 

- use the axioms seen in chapter 4 (involution, morgan, distribution, ...)
- use an **uitvoertabel**

method one via axioms
$$
f:B^3 \rightarrow B : f(x, y, z) = (y*\overline{z}) + (y+z) + (\overline{z+\overline{x}})\\

f:B^2 \rightarrow B : f(x, y, z) = x * y + x + \overline{y} * (x+z)\\
$$
method two via uitvoertabel
$$
f(x_1,x_2,\dots,x_n)=f(1,1,\dots,1)x_1,x_2,\dots,x_n\\+f(0,1,\dots,1)\overline{x}_1,x_2,\dots,x_n+\dots\\+f(0,0,\dots,0)\overline{x}_1,\overline{x}_2,\dots,\overline{x}_n
$$


- write down a result table 
- with each result the is one corresponding minimal expression
- als de inputwaarde van variable Xn een 1 is dan schrijven we gewoon term X als het 0 is schrijven we negatie(X)

## CNV = conjunctieve normaalvorm

is het product van maximale uitdrukkingen 

## vereensvoudigen boolese uitdrukkingen

## oefeningen

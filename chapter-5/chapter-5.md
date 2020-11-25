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
f(x_1,x_2,\dots,x_n)=f(1,1,\dots,1)x_1*x_2*\dots*x_n\\+f(0,1,\dots,1)\overline{x}_1*x_2*\dots*x_n+\dots\\+f(0,0,\dots,0)\overline{x}_1*\overline{x}_2*\dots*\overline{x}_n
$$


- write down a result table 
- with each result there is one corresponding minimal expression
- als de inputwaarde van variable Xn een 1 is dan schrijven we gewoon term X als het 0 is schrijven we negatie(X)
- keep all minimal expression for which f was 1

voorbeelden :
$$
f(x,y) = x+\overline{x}*y \\
\begin{matrix}
x & y & \overline{x} & \overline{x}*y & result\\
0 & 0 & 1 & 0 & 0\\
1 & 0 & 0 & 0 & 1\\
0 & 1 & 1 & 1 & 1\\
1 & 1 & 0 & 0 & 1\\
\end{matrix}\\
f(x,y) = (f(0,0)*\overline{x}*\overline{y})+(f(1,0)*x*\overline{y})+(f(0,1)*\overline{x}*y)+(f(0,1)*x*y)\\
= (x*\overline{y})+(\overline{x}*y)+(x*y)\\
$$

$$
f(x,y) = \overline{x}+\overline{y} \\
\begin{matrix}
x & y & result\\
0 & 0 & 1\\
1 & 0 & 1\\
0 & 1 & 1\\
1 & 1 & 0\\
\end{matrix}\\
f(x,y) = (f(0,0)*\overline{x}*\overline{y})+(f(1,0)*x*\overline{y})+(f(0,1)*\overline{x}*y)+(f(0,1)*x*y)\\
= (\overline{x}*\overline{y})+(x*\overline{y})+(\overline{x}*y)
$$

---

$$
f(x,y,z) = x*y+x*\overline{y}*(x+z) \\
\begin{matrix}
x & y & z & x*y & x*\overline{y} & x+z & result\\
0 & 0 & 0 & 0 & 0 & 0 & 0\\
0 & 0 & 1 & 0 & 0 & 1 & 0\\
0 & 1 & 0 & 0 & 0 & 0 & 0\\
0 & 1 & 1 & 0 & 0 & 1 & 0\\
1 & 0 & 0 & 0 & 1 & 1 & 1\\
1 & 0 & 1 & 0 & 1 & 1 & 1\\
1 & 1 & 0 & 1 & 0 & 1 & 1\\
1 & 1 & 1 & 1 & 0 & 1 & 1\\
\end{matrix}\\
f(x,y) = (f(0,0,0)*\overline{x}*\overline{y}*\overline{z})+\\((f(0,0,1)*\overline{x}*\overline{y}*z)+\\
(f(0,1,0)*\overline{x}*y*\overline{z})+\\
(f(0,1,1)*\overline{x}*y*z)+\\
(f(1,0,0)*x*\overline{y}*\overline{z})+\\
(f(1,0,1)*x*\overline{y}*z)+\\
(f(1,1,0)*x*y*\overline{z})+\\
(f(1,1,1)*x*y*z)\\
= (x*\overline{y}*\overline{z})+(x*\overline{y}*z)+(x*y*\overline{z})+(x*y*z)
$$



## CNV = conjunctieve normaalvorm

is het product van maximale uitdrukkingen 

- functie heeft juist 1 CNV 
- functies met gelijke uitkomsten hebben dezelfde conjunctieve normaalvorm



method two via uitvoertabel
$$
f(x_1,x_2,\dots,x_n)=f(1,1,\dots,1)x_1+x_2+\dots+x_n\\*f(0,1,\dots,1)\overline{x}_1+x_2+\dots,x_n\\*f(0,0,\dots,0)\overline{x}_1+\overline{x}_2+\dots+\overline{x}_n
$$


- write down a result table 
- with each result there is one corresponding maximal expression
- als de inputwaarde van variable Xn een 0 is dan schrijven we gewoon term X als het 1 is schrijven we negatie(X)

voorbeelden :
$$
f(x,y,z) = x*(\overline{y}+z) \\
\begin{matrix}
x & y & z & \overline{y} & \overline{y}+z & result\\
0 & 0 & 0 & 1 & 1 & 0\\
0 & 0 & 1 & 1 & 1 & 0\\
0 & 1 & 0 & 0 & 0 & 0\\
0 & 1 & 1 & 0 & 1 & 0\\
1 & 0 & 0 & 1 & 1 & 1\\
1 & 0 & 1 & 1 & 1 & 1\\
1 & 1 & 0 & 0 & 0 & 0\\
1 & 1 & 1 & 0 & 1 & 1\\
\end{matrix}\\
f(x,y) = (f(0,0,0)+x+y+z)*\\
(f(0,0,1)+x+y+\overline{z})*\\
(f(0,1,0)+x+\overline{y}+z)*\\
(f(0,1,1)+x+\overline{y}+\overline{z})*\\
(f(1,0,0)+\overline{x}+y+z)*\\
(f(1,0,1)+\overline{x}+y+\overline{z})*\\
(f(1,1,0)+\overline{x}+\overline{y}+z)*\\
(f(1,1,1)+\overline{x}+\overline{y}+\overline{z})\\
= (x+y+z)*\\
(x+y+\overline{z})*\\
(x+\overline{y}+z)*\\
(x+\overline{y}+\overline{z})*\\
(\overline{x}+\overline{y}+z)\\
$$

---

$$
f(x,y,z) = x*y+x*\overline{y}*(x+z) \\
\begin{matrix}
x & y & z & x*y & x*\overline{y}*(x+z)  & result\\
0 & 0 & 0 & 0 & 0 & 0\\
0 & 0 & 1 & 0 & 0 & 0\\
0 & 1 & 0 & 0 & 0 & 0\\
0 & 1 & 1 & 0 & 0 & 0\\
1 & 0 & 0 & 0 & 1 & 1\\
1 & 0 & 1 & 0 & 1 & 1\\
1 & 1 & 0 & 1 & 0 & 1\\
1 & 1 & 1 & 1 & 0 & 1\\
\end{matrix}\\
f(x,y) = (f(0,0,0)+x+y+z)*\\
(f(0,0,1)+x+y+\overline{z})*\\
(f(0,1,0)+x+\overline{y}+z)*\\
(f(0,1,1)+x+\overline{y}+\overline{z})*\\
(f(1,0,0)+\overline{x}+y+z)*\\
(f(1,0,1)+\overline{x}+y+\overline{z})*\\
(f(1,1,0)+\overline{x}+\overline{y}+z)*\\
(f(1,1,1)+\overline{x}+\overline{y}+\overline{z})\\
= (x+y+z)*(x+y+\overline{z})*(x+\overline{y}+z)*(x+\overline{y}+\overline{z})\\
$$



## vereensvoudigen boolese uitdrukkingen

Welke axioma’s en eigenschappen er moeten toegepast worden, om deuitdrukking te vereenvoudigen, daar zijn geen vaste regels voor. Hetbeste resultaat vindt men viatrial and error

## oefeningen

1. bepaal de DNV en de CNV van f(x,y,z)

$$
1 = f(1,1,1) = f(1,0,1) = f(1,1,0) = f(0,0,0)\\
\space\\
DNV = f(1,1,1)*x*y*z + f(1,0,1)*x*\overline{y}*z + \\
f(1,1,0)*x*y*\overline{z} + f(0,0,0)*\overline{x}*\overline{y}*\overline{z}\\
= x*y*z + x*\overline{y}*z + \\
x*y*\overline{z} + \overline{x}*\overline{y}*\overline{z}\\
\space\\
CNV = f(0,0,1)+x+y+\overline{z} * f(1,0,0)+\overline{x}+y+z *\\
f(0,1,0)+x+\overline{y}+z * f(0,1,1)+x+\overline{y}+\overline{z}\\
 = (x+y+\overline{z}) * (\overline{x}+y+z) * (x+\overline{y}+z) * (x+\overline{y}+\overline{z})\\
\space\\
$$

$$
1 = f(0,1,1) = f(0,1,0) = f(0,0,0)\\
\space\\
DNV = f(0,1,1)*\overline{x}*y*z + 
f(0,1,0)*\overline{x}*y*\overline{z} + 
f(0,0,0)*\overline{x}*\overline{y}*\overline{z}\\
= \overline{x}*y*z + \overline{x}*y*\overline{z} + \overline{x}*\overline{y}*\overline{z}\\
\space\\
CNV = f(0,0,1)+x+y+\overline{z} * 
f(1,0,0)+\overline{x}+y+z * 
f(1,1,0)+\overline{x}+\overline{y}+z *\\ 
f(1,1,1)+\overline{x}+\overline{y}+\overline{z} * 
f(1,0,1)+\overline{x}+y+\overline{z}\\
= x+y+\overline{z} * 
\overline{x}+y+z * 
\overline{x}+\overline{y}+z *\\ 
\overline{x}+\overline{y}+\overline{z} * 
\overline{x}+y+\overline{z}\\
\space\\
$$

2. bepaal de DNV en de CNV van f(x,y,z,u)

$$
1 = f(1,1,1,1) = f(1,0,0,1) = f(1,0,1,0)\\
0 = f(0,0,0,0) = f(0,0,0,1) = f(0,0,1,0) = f(0,0,1,1)\\
= f(0,1,0,0) = f(0,1,0,1) = f(0,1,1,0) = f(0,1,1,1) = f(1,0,0,0)\\
= f(1,0,1,1) = f(1,1,0,0) = f(1,1,0,1) = f(1,1,1,0)\\
\space\\
DNV = (x*y*z*u)+(x*\overline{y}*\overline{z}*u)+(x*\overline{y}*z*\overline{u})
\space\\
CNV = (x+y+z+u) * \\
(x+y+z+\overline{u}) * \\
(x+y+\overline{z}+u) * \\
(x+y+\overline{z}+\overline{u}) * \\
(x+\overline{y}+z+u) * \\
(x+\overline{y}+z+\overline{u}) * \\
(x+\overline{y}+\overline{z}+u)  * \\
(x+\overline{y}+\overline{z}+\overline{u}) * \\
(\overline{x}+y+z+u) * \\
(\overline{x}+y+\overline{z}+\overline{u}) * \\
(\overline{x}+\overline{y}+z+u) * \\
(\overline{x}+\overline{y}+z+\overline{u}) * \\
(\overline{x}+\overline{y}+\overline{z}+u)\\
\space\\
$$


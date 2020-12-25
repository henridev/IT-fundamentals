# 9: Eindige velden


## I. Definities en eigenschappen

---

**`Veld`** = het veld **F** is een set van twee **constante** elementen **0** en **1**. waarop met twee **operatoren** worden toegepast **+** en **.** (eingenlijk ook - en / aangezien we met + en . deze operaties ook kunnen uitvoeren )

---

def : **`eindig veld`** = een veld waarvoor de verzameling van elementen eindig is. # elementen = **orde** van het veld.

Z  is the set of all integers. Z2 is the set of all integers modulo 2. That is, 0,1. Arithmetic operations in Z2 are performed modulo 2.

---

$$
\textcolor{red}{\text{ stelling } } \\ \\\space\\
\text{er bestaat een veld van de orde Q }\\ 
\iff \\
\text{Q de macht van een priemgetal p is waarbij  we kunnen stellen } (q=p^h,  h \in \natnums) \\
\space\\
\rightarrow \text{twee velden van orde Q met } (q=p^h) \text{ zijn isomorf}
$$

def : **`galois veld van de orde Q GF(𝑞) or GF(p^h)`** =  een veld van orde Q 

> The most crucial property of a finite field is that it has p^h elements where p is a prime number and h is whatever you choose. A finite field with 11 elements can be defined as GF(11^1). A finite field with 256 elements would be written as GF(2^8). You can’t have a finite field with 12 elements since you’d have to write it as 2^2 * 3 which breaks the convention of p^h.

---

$$
\text { eigenschappen van eindige en oneindige velden }\\\space\\
\text{stel we hebben } a, b, c \in F: \\

\space\\

\textcolor{green}{\text{ eigenschap 1 } } \\
F \text{ is gesloten voor } + \And\space * \\ 
\text{any operation performed with elements from the set returns an element contained in the original set}\\
a + b \in F \And\space a * b \in F \\
\space\\

\textcolor{green}{\text{ eigenschap 2 / 3 / 4 } } \\
\rightarrow \text{ commutatief } \\ 
a + b = b + a \And a * b = b * a\\
\space\\
\rightarrow \text{ associatief } \\ 
(a + b) + c = a + (b + c) \And (a * b) * c = a * (b * c)\\
\space\\
\rightarrow \text{ distributief } \\ 
a * (b + c) = (a * b) + (a * c) \\
\space\\


\textcolor{green}{\text{ eigenschap 5 / 6 / 7 / 8 } } \\
\rightarrow \text{ neutraal element voor optelling en multiplicatie } \\ 
a * 1 = a \And a + 0 = a \\
\space\\
\rightarrow \text{ invers element voor optelling } -a \in F \text{ zodat} \\ 
a + (-a) = 0 \\
\space\\
\rightarrow \text{ invers element voor multiplicatie } a \in F \text{ met } a\not ={0} \text{ bestaat er een element } a^{-1} \text{ zodat} \\ 
a * a^{-1} = 1 \\
\space\\

\textcolor{green}{\text{ eigenschap 9 / 10 } } \\
\rightarrow \text{voor alle } a \in F \text{ geld dat in een willekeurig veld F het element 0 opslorpend is voor * }\\
a*0=0\\
\space\\
\rightarrow \text{voor alle } a, b \in F \text{ een veld F heeft geen nuldelers }\\
a*b=0 \iff a=0 \vee b=0\\
$$






## II. eindig veld ℤ𝑚

$$
\textcolor{blue}{\text{ definitie } } \\
Z_{m} = \{0,1,\dotsb,m-1\}
(m \in \natnums_{0}) \text{(natural numbers including zero)}
$$

$$
\textcolor{red}{\text{ probleem } } \\
\text{zijn er operatoren } + \And * \text{ zodat } Z_m,+,* \text{ een veld is ?}
$$

### modulo bewerking 

> we can see Zm as the set of least residus for m ex Z2 = {0,1} | Z6 = {0,1,2,3,4,5}

def: 
$$
a,b \in Z \text{ a is congruent met b voor modulo m } \iff \text{ de deling van a en van b door m dezelfde rest oplevert}\\
\space\\
\text{in symbolen } a \cong b \text{ (mod m) } 
\iff a = m*k+b \text{ met } m \in \natnums_0, k \in \mathbb{Z} \\
\space\\
\text { example }\\\space\\
7 \% 4 = 3\\
11 \% 4 = 3\\
7 \cong 11 \text{ (for mod 4)}\iff 7 = 4 * 1 + 11 \\
\space\\
\text { eigenschappen }\\\space\\
\text{stel } a \cong a' \text{ (mod m)} \space\And\space b \cong b' \text{ (mod m)} \\
\rightarrow a+b \cong a' + b' \text{ (mod m)} \\
\rightarrow a*b \cong a' * b' \text{ (mod m)} \\
\space\\
\text { example }\\\space\\
5 \% 3 = 2\\
8 \% 3 = 2\\
7 \% 3= 1\\
4 \% 3 = 1\\
12 (5 + 7)\cong12 (8 + 4) \text{ (for mod 3)} \\
35 (5 * 7)\cong32 (8 * 4) \text{ (for mod 3)} \\
\space\\
$$

### de structuur ℤ𝑚,+,*

$$
\text{definitie}\\
\space\\
\text{met } a,b \in \mathbb{Z}_m\\
\text{we kunnen operatoren + en * als volgt definieren}\\
\rightarrow a+b \cong a+b \text{ (mod m)}\\
\rightarrow a*b \cong a*b \text{ (mod m)}\\
\text{e}
\space\\
\text{stelling}\\
\space\\
\text{de structuur } \mathbb{Z}_m,+,* \text{ is een veld } \iff \text{ m een priemgetal is}\\
\space\\
\text{example}\\
\space\\

GF(5) = \{ 0,1,2,3,4 \}\\
(0 * 4) \% 5 = 0\\
(2 * 4) \% 5 = 3\\
(3 * 4) \% 5 = 2\\
(3 + 4) \% 5 = 2\\
(1 + 4) \% 5 = 0\\
(1 + 2) \% 5 = 3\\

GF(6) = \{ 0,1,2,3,4,5 \}\\
(0 * 4) \% 5 = 0\\
(2 * 4) \% 5 = 3\\
(3 * 4) \% 5 = 2\\
(3 + 4) \% 5 = 2\\
(1 + 4) \% 5 = 0\\
(1 + 2) \% 5 = 3\\
$$


## III. voorbeelden


$$
\text{set of all integers modulo 2}
\\\space\\
GF(2) = \mathbb{Z}_2 = \{0,1\} \\
\space\\
\begin{matrix}
+ & 0 & 1\\
0 & 0 & 1\\
1 & 1 & 0
\end{matrix} 
\space\space\space\space\space\space
\begin{matrix}
* & 0 & 1\\
0 & 0 & 0\\
1 & 0 & 1
\end{matrix}
$$

$$
\text{set of all integers modulo 3}
\\\space\\
GF(3) = \mathbb{Z}_3 = \{0,1,2\} \\
\space\\
\begin{matrix}
+ & 0 & 1 & 2\\
0 & 0 & 1 & 2\\
1 & 1 & 2 & 0\\
2 & 2 & 0 & 1\\
\end{matrix} 
\space\space\space\space\space\space
\begin{matrix}
* & 0 & 1 & 2\\
0 & 0 & 0 & 0\\
1 & 0 & 1 & 2\\
2 & 0 & 2 & 1\\
\end{matrix}
$$


$$
\textcolor{red}{\text{ niet voor ex louter illustratief } } \\
GF(4) = \{0,1,a,b\} \\
\text{GF(4) is an expansion of GF(2)} \\
\space\\
\begin{matrix}
+ & 0 & 1 & a & b\\
0 & 0 & 1 & a & b\\
1 & 1 & 0 & b & a\\
a & a & b & 0 & 1\\
b & b & a & 1 & 0\\
\end{matrix} 
\space\space\space\space\space\space
\begin{matrix}
* & 0 & 1 & a & b\\
0 & 0 & 0 & 0 & 0\\
1 & 0 & 1 & a & b\\
a & 0 & a & b & 1\\
b & 0 & b & 1 & a\\
\end{matrix}\\
\begin{matrix}
a & -a \\
0 & 0 \\
1 & 3 \\
2 & 2 \\
3 & 1 \\
\end{matrix} 
\space\space\space\space\space\space
\begin{matrix}
a & a^{-1} \\
0 & / \\
1 & 1 \\
2 & 3 \\
3 & 2 \\
\end{matrix} \\
$$


$$
GF(5) = \{0,1,2,3,4\} \\

\space\\
\begin{matrix}
+ & 0 & 1 & 2 & 3 & 4\\
0 & 0 & 1 & 2 & 3 & 4\\
1 & 1 & 2 & 3 & 4 & 0\\
2 & 2 & 3 & 4 & 0 & 1\\
3 & 3 & 4 & 0 & 1 & 2\\
4 & 4 & 0 & 1 & 2 & 3\\
\end{matrix} 
\space\space\space\space\space\space
\begin{matrix}
* & 0 & 1 & 2 & 3 & 4\\
0 & 0 & 0 & 0 & 0 & 0\\
1 & 0 & 1 & 2 & 3 & 4\\
2 & 0 & 2 & 4 & 1 & 3\\
3 & 0 & 3 & 1 & 4 & 2\\
4 & 0 & 4 & 3 & 2 & 1\\
\end{matrix}
$$

$$
GF(11) = \{0,1,2,3,4,5,6,7,8,9,10\} \\

\space\\
\begin{matrix}
a & -a \\
0 & 0 \\
1 & 10 \\
2 & 9 \\
3 & 8 \\
4 & 7 \\
5 & 6 \\
6 & 5 \\
7 & 4 \\
8 & 3 \\
9 & 2 \\
10 & 1 \\
\end{matrix} 
\space\space\space\space\space\space
\begin{matrix}
a & a^{-1} \\
0 & / \\
1 & 1 \\
2 & 6 \\
3 & 4 \\
4 & 3 \\
5 & 9 \\
6 & 2 \\
7 & 8\\
8 & 7 \\
9 & 5 \\
10 & 10 \\
\end{matrix} \\
\text{mogelijkheden voor *}\\
\text{11  . 22  . 33 . 44 . 55 . 66 . 77 . 88 . 99 | 12 . 23 . 34 . 45 . 56 . 67 . 78 . 89 . 100}
$$


## IV. rekennen in ℤ*p*



bij negatief getal tel je een veelvoud van modulo op bij het negatieve getal totdat het positief is en dan neem je de reguliere modulo


$$
-8 \% 3 \\
-8 \rightarrow -8 * (3*3) = 1 \\
1 \% 3 = 1
$$


bij een getal tot negatieve eerste macht moeten we eigenscahp inverse van multiplicatie volgen. 
$$
a*b \space\%\space p = 1 \rightarrow a^{-1} = b \\
\space\\
3*2^{-1} \space\%\space 5 \\
a^{-1} = 2^{-1} \rightarrow a = 2 \\
a^{-1} * a = 1 \text{ eigenschap inverse multiplicatie} \\
\text{ als we dus } a^{-1} \text{ vervangen met b} \\
b * 1 \space\%\space 5 = 1 \rightarrow b = 3 \\
\text{ als gevolg kunnen we de originele bewerking verder uitwerken} \\
3 * 3 \space\%\space 5 = 9 \space\%\space 5 = 4
$$
bij grote getallen bepaal je eerst rest na deling door modulo
$$
(117*6^{-1}+1004) \space\%\space 7 \\
\space\\
117 = (16 * 7) + 5 \space\dots\space  1004 = (143 * 7) + 3 \\
\space\\
(5*6^{-1}+3) \space\%\space 7 \\
\space\\
b * 6 \space\%\space 7 = 1 \rightarrow b = 6 \rightarrow a^{-1} = 6\\ \\
\space\\
(5*6+3) \space\%\space 7 = 5 \\
\space\\
$$




## V. vergelijkingen in ℤ*p*

$$
\mathbb{Z}_{17} : x + 5 \cong 35 \\
35 \space\%\space 17 \cong 1 \\
x + 5  \cong 1 \\
13 + 5 \cong 1
$$


$$
\mathbb{Z}_{5} : 23x + 13 \cong 0 \space\%\space 5 \\
\text{veelvouden van 5 verminderen}\\
3x + 3 \cong 0 \rightarrow 3x \cong -3 \rightarrow 3x \cong -3 + 5  \rightarrow 3x \cong 2\\ 
\text{werk factor 3 weg}\\
x + 1 \cong 2 * 3^{-1} \rightarrow x \cong 2 * 3^{-1}\\
\text{bepaal } 3^{-1}\\
3 * b = 1 \rightarrow b = 2 \rightarrow 3^{-1} = 2 \\
x \cong 2 * 2 \rightarrow x \cong 4
$$


## VI. oefeningen

$$
\text{Noteer alle inverse elementen voor de optelling en de vermenigvuldiging in:}\\

\space\\
\textcolor{green}{\text{ vraag 1 } } \\
\space\\

\mathbb{Z}_7 \space \mathbb{Z}_{13} \space \mathbb{Z}_{17} \\
\begin{matrix}
a & -a \\
0 & 0 \\
1 & 6 \\
2 & 5 \\
3 & 4 \\
4 & 3 \\
5 & 2 \\
6 & 1 \\
\end{matrix} 
\space\space\space\space\space\space
\begin{matrix}
a & a^{-1} \\
0 & / \\
1 & 1 \\
2 & 4 \\
3 & 5 \\
4 & 2 \\
5 & 3 \\
6 & 6 \\
\end{matrix} 
\space\\\space\space\\\\
\begin{matrix}
a & -a \\
0 & 0 \\
1 & 12 \\
2 & 11 \\
3 & 10 \\
4 & 9 \\
5 & 8 \\
6 & 7 \\
7 & 6 \\
8 & 5 \\
9 & 4 \\
10 & 2 \\
12 & 1 \\
\end{matrix} 
\space\space\space\space\space\space
\begin{matrix}
a & a^{-1} \\
0 & / \\
1 & 1 \\
2 & 7 \\
3 & 9 \\
4 & 10 \\
5 & 8 \\
6 & 11 \\
7 & 2 \\
8 & 5 \\
9 & 3 \\
10 & 4 \\
12 & 9 \\
\end{matrix}
\space\\\space\space\\\\
\begin{matrix}
a & -a \\
0 & 0 \\
1 & 15 \\
2 & 14 \\
3 & 13 \\
4 & 12 \\
5 & 11 \\
6 & 10 \\
7 & 9 \\
8 & 8 \\
9 & 7 \\
10 & 6 \\
12 & 5 \\
13 & 4 \\
14 & 3 \\
15 & 2 \\
16 & 1 \\
\end{matrix} 
\space\space\space\space\space\space
\begin{matrix}
a & a^{-1} \\
0 & / \\
1 & 1 \\
2 & 9 \\
3 & 6 \\
4 & 13\\
5 & 7 \\
6 & 3 \\
7 & 5 \\
8 & 15 \\
9 & 2 \\
10 & 12 \\
12 & 10 \\
13 & 4 \\
14 & 10 \\
15 & 8 \\
16 & 16 \\
\end{matrix} \\
\space\\
$$

$$
\textcolor{green}{\text{ vraag 2 } } \\
\space\\

\text{Bereken in } \mathbb{Z}_7\\

\space\\
3×4+6\cong...\\
12+6 \rightarrow 5+6 \rightarrow 11 \\
3×4+6\cong4\\
\space\\

2^{−1} \cong ...\\
b * 2 \space\%\space 7 = 1 \rightarrow b = 11 \rightarrow 11\cong4\\
2^{−1} \cong 4\\
\space\\

-5 \cong ...\\ 
-5 * (1*7) \rightarrow 2\\
-5 \cong 2\\ 
\space\\

\text{Bereken in } \mathbb{Z}_{11}\\
\space\\

5×3+5\cong...\\
(5*3) \rightarrow 15 \rightarrow 4\\
5×3+5\cong9\\
\space\\

−4 \cong ...\\
-4 + (11*1) \rightarrow 7 \\
−4 \cong 7\\
\space\\

8^{−1} \cong ...\\
b * 8 \space\%\space 11 = 1 \rightarrow b = 7 \\
8^{−1} \cong 7\\
\space\\
\space\\

\text{Bereken in } \mathbb{Z}_5\\
\space\\

8002 × 333 ≡\\
2 * 3 \\
8002 × 333 ≡ 1\\
\space\\

24 × a = 108 ≡ ...\\
4 * a = 3 \rightarrow a = 12 \\
4 * a = 3 \rightarrow  a = 3 * 4^{-1} \\
4^{-1} \rightarrow  b * 4 \% 5 = 1 \rightarrow b = 4  \\
a = 2 \\
\space\\

\text{Bepaal } (122 × a + 34) \space\%\space 9\\
5 * a + 7 \space\%\space 9 \\
\rightarrow  b * 4 \% 5 = 1 \rightarrow b = 4  \\
\rightarrow  b * 4 \% 5 = 1 \rightarrow b = 4  \\
$$

$$
\space\\
\textcolor{green}{\text{ vraag 3 } } \\
\space\\



\text{los op in } \mathbb{Z}_5\\
\space\\

2x + 2 \cong  5\\
2x + 2 \cong  0\\
2x \cong -2\\
2x \cong  3\\
2^{-1}*2x \cong 2^{-1}*3 \\
\space\rightarrow (b*2)\space\%\space 5 \cong  1 
\space\rightarrow (3*2)\space\%\space 5 \cong  1
\space\rightarrow 2^{-1} \cong  3\\
x \cong 3*3 \\
x \cong 4 \\
\space\\

4x \cong 1\\
4^{-1}*4x \cong 4^{-1}*1\\\
x \cong 4^{-1}*1\\
\space\rightarrow (b*4)\space\%\space 5 = 1 
\space\rightarrow (4*4)\space\%\space 5 = 1
\space\rightarrow 16 \space\%\space 5 = 1
\space\rightarrow 4^{-1} = 4 \\
x \cong 4*1\\
x \cong 4 \\
\space\\

-14 + x \cong 0\\
\space\rightarrow -14 + (3*5) = 1 
1 + x \cong 0\\
x \cong -1\\
x \cong 4\\
\space\\

\text{los op in } \mathbb{Z}_{11}\\
\space\\


4 + x \cong 0\\
x \cong -4\\
x \cong 7\\
\space\\

3x + 5 \cong 0\\
3x \cong -5\\
3x \cong 6\\
3^{-1}*3x \cong 3^{-1}*6\\
\space\rightarrow (b*3)\space\%\space 11 = 1 
\space\rightarrow (4*3)\space\%\space 11 = 1 
\space\rightarrow 12\space\%\space 11 = 1 
\space\rightarrow 3^{-1} = 4 \\
x \cong 4*6\\
x \cong 2\\
\space\\

4x + 6 \cong 0\\
4x \cong -6\\
4x \cong 5\\
4^{-1}*4x \cong 4^{-1}*5\\
\space\rightarrow (b*4)\space\%\space 11 = 1 
\space\rightarrow (3*4)\space\%\space 11 = 1 
\space\rightarrow 12\space\%\space 11 = 1 
\space\rightarrow 4^{-1} = 3 \\
x \cong 15\\
x \cong 4\\
\space\\

\text{los op in } \mathbb{Z}_{17}\\
3x \cong 1\\
3^{-1}*3x \cong 3^{-1}*1\\
\space\rightarrow (b*3)\space\%\space 17 = 1 
\space\rightarrow (6*3)\space\%\space 17 = 1 
\space\rightarrow 18\space\%\space 17 = 1 
\space\rightarrow 3^{-1} = 6 \\
x \cong 6*1\\
x \cong 6\\
\space\\
$$


# 9: Eindige velden


## I. Definities en eigenschappen

**`Veld`** = het veld **F** is een verzameling van elementen met twee operatoren **+** en **.** met ook twee contante elementen **0** en **1**. Deze verzameling voldoet aan de volgende eigenschappen.

$$
\text { eigenschappen }\\\space\\
\text{stel we hebben } a, b, c \in F: \\
\space\\
\rightarrow F \text{ is gesloten voor } + \And\space * \\ 
a + b \in F \And\space a * b \in F \\
\space\\
\rightarrow \text{ commutatief } \\ 
a + b = b + a \And a * b = b * a\\
\space\\
\rightarrow \text{ associatief } \\ 
(a + b) + c = a + (b + c) \And (a * b) * c = a * (b * c)\\
\space\\
\rightarrow \text{ distributief } \\ 
a * (b + c) = (a * b) + (a * c) \\
\space\\
\rightarrow \text{ neutraal element } \\ 
a * 1 = a \And a + 0 = a \\
\space\\
\rightarrow \text{ invers element voor + bestaat een element } -a \in F \text{ zodat} \\ 
a + (-a) = 0 \\
\space\\
\rightarrow \text{ invers element voor * voor elk een element } a \in F \text{ met } a\not ={0} \text{ bestaat er een element } a^{-1} \text{ zodat} \\ 
a * a^{-1} = 1 \\
\space\\
\rightarrow \text{voor alle } a \in F \text{ geld dat in een willekeurig veld F het element 0 opslorpend is voor * }\\
a*0=0\\
\space\\
\rightarrow \text{voor alle } a, b \in F \text{ een veld F heeft geen nuldelers}\\
a*b=0 \iff a=0 \And b=0\\
$$

def : **`eindig veld`** = een veld waarvoor de verzameling van elementen eindig is. # elementen = **orde** van het veld.

$$
stelling \\\space\\
\text{er bestaat een veld van de orde Q } \iff \text{Q de macht van een priemgetal p is waarbij  we kunnen stellen } (q=p^h,  h \in \natnums) \\
\space\\
\rightarrow \text{twee velden van orde Q met } (q=p^h) \text{ zijn isomorf}
$$

def : **`galois veld van de orde Q GF(𝑞)`** = een veld van orde Q 

## II. eindig veld Z_m

def :

$$
Z_{m} = \{0,1,\dotsb,m-1\}
(m \in \natnums_{0}) \text{(natural numbers including zero)}
$$

Q:
$$
\text{zijn er operatoren } + \And * \text{ zodat } Z_m,+,* \text{ een veld is ?}
$$

### modulo bewerking 

def: 
$$
a,b \in Z \text{ a is congruent met b voor modulo m } \iff \text{ de deling van a en van b door m dezelfde rest oplevert}\\
\space\\
\text{in symbolen } a \cong b \text{ (mod m) } 
\iff a = m*k+b \text{ met } m \in \natnums_0, k \in \mathbb{Z} \\
\space\\
\text { example }\\\space\\
23 \% 4 = 3\\
27 \% 4 = 3\\
20 \cong 27 \text{ (for mod 4)}\iff 23 = 4 * -1 + 27 \\
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

## III. voorbeelden

## IV. rekennen in Z_p

## V. vergelijkingen in Z_p

## VI. oefeningen


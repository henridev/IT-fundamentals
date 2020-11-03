## 	opfrisser wiskunde 

- getallenverzamelingen 

<img src="https://1.bp.blogspot.com/-qbvhLl9GMGs/WhLLFEnhwHI/AAAAAAAAJ9U/L2czeeXoGec80y9vM89nIk0GRvg0bgfeQCLcBGAs/s1600/Types%2Bof%2Bnumber.jpg" style="margin:0 auto; zoom: 0.6; object-position: 10px -50px; object-fit: cover;   width: 700px; height: 500px;"/>
$$
\mathbb{N} \text{ - natuurlijke} \\
\mathbb{Z} \text{ - gehele}\\
\mathbb{Q} \text{ - rationele}\\
\mathbb{R} \text{ - reele}
$$

### eigenschappen optelling en vermenigvuldiging

bewerkingen op reele getallen

* optellen

  * commutatief (eg. 1 + 2 = 2 +1)
  * associatief (eg. (1+2)+3 = 1+(2+3))
  * elk element x heeft symmetrisch element -x voor x+(-x)=0

* vermenigvuldigen

  * commutatief

  * associatief

  * elk element x heeft invers element x^1 voor x*x^-1=1

    

$$
\text {1 - bewerking * is distributief tov + } \\ a*(b+c) = (a*b)+(a*c) \\
\dots\\
\text {2 - reel getal a delen door b is equivalent met a vermenigvuldigen met de inverse van b} \\
\frac{a}{b} = a*\frac{1}{b}=a*b^{-1} \\
$$

### definities machten

$$
\\ a \in \mathbb{R+} \text{ voor alle } p \in \mathbb{N} \text{ en } q \in \mathbb{N}\\ 

a^{\frac{1}{q}} = \sqrt[q]{a} = w <=> w^q = a \\
a^{\frac{p}{q}} = \sqrt[q]{a^p} = \sqrt[q]{a}^p \\
a^{-\frac{p}{q}} = \frac{1}{a^{\frac{p}{q}}} \\
$$



### eigenschappen machten


$$
a,b \in \mathbb{R+} \text{ voor alle } r,s \in \mathbb{Q} \\
a^r * a^s = {a^{(r+s)}} \\
{\frac{a^r}{a^s}} = {a^{(r-s)}} \\
(a^r)^s = {a^{(r*s)}} \\
a^r * b^r = ({a*b})^r \\
\frac{a^r}{b^r} = (\frac{a}{b})^r
$$


### definities logaritmen

$$
\\ a \in \mathbb{R+} \text{ and not 1 and } b \in \mathbb{R+}\\ 
\dots\\
\text{logaritme met grondtal a van argument b}\\
\\log_a b = x <=> a^x = b\\
\dots\\
\text{brigse logaritme altijd met grondtal 10}\\
\\log b = log_{10} b = x <=> 10^x = b\\
\text{neperiaans of natuurlijke log met grondtal e}\\
\\ln b = log_e b = x <=> e^x = b\\
$$





### eigenschappen logaritmen

$$
a,b \in \mathbb{R+} \text{ but not 1 } \\
\\log_a (x*y) = log_a (x) + log_a (y) \\
\\log_a (\frac{x}{y}) = log_a (x) - log_a (y) \\
\\log_a (x^p) = p * log_a (x) \text{met p } \in \mathbb{Q} \\
\\log_a (a) = 1 \\
\\log_a (x) = \frac{log_b(x)}{log_b(a)} \\
$$

examples : 

![image-20200920105941465](C:\Users\henri\AppData\Roaming\Typora\typora-user-images\image-20200920105941465.png)

![image-20200920111024053](C:\Users\henri\AppData\Roaming\Typora\typora-user-images\image-20200920111024053.png)

![image-20200920112635413](C:\Users\henri\AppData\Roaming\Typora\typora-user-images\image-20200920112635413.png)

![image-20200920113346827](C:\Users\henri\AppData\Roaming\Typora\typora-user-images\image-20200920113346827.png)

### veeltermen

$$
\text {definitie - een uitdrukking in vorm }  ax^n \text{ met } a \in \mathbb{R}, b \in \mathbb{N} \\
v_n =\sum_{i=0}^{n}a_ix^i = a_0 + a_1^x + ... + a_nx^n \\
a_nx^n \text{ hoogste graadsterm } \\
a_n \text{ hoogste graadscoefficient } \\
\dots \\
\text{ eerste graadsterm } v_1 = ax + b \\
\text{ tweede graadsterm } v_2 = ax^2 + bx + c \\
\dots \\
\text{ lineaire vergelijking } c = ax + b \text{ rechterkant is constante linkerkant is eerstegraads veelterm}\\
\text{ kwadratische vergelijking } c = ax^2 + bx + c \text{ rechterkant is constante linkerkant is tweedegraads veelterm}\\
\dots \\
\text{oplossen 2de graadsvergelijking met discriminant } D = b^2 - 4ac \\
\text{waarde van de discriminant geeft aan hoeveel wortels er zijn}\\
\text{ D = 0 ? juist 1 oplossing ? D > 0 ? twee oplossingen : geen oplossing}\\
x_{1,2} = \frac{-b \pm \sqrt{D}}{2a}\\
\dots \\
\text{ eens we wortels hebben kunnen we als volgt in factoren ontbinden} \\
ax^2 + bx + c = a(x-x_1)(x-x_2)
$$

![image-20200928053323991](C:\Users\henri\AppData\Roaming\Typora\typora-user-images\image-20200928053323991.png)

![image-20200928053330730](C:\Users\henri\AppData\Roaming\Typora\typora-user-images\image-20200928053330730.png)





## proof and mathematical reasoning



### symbols

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1602482793/Screenshot_2020-10-12_080517_arsgfp.png"/>

### definition of proof 

two big groups of proofs 

- direct proof = assume a hypothesis and logicaly deduce a conclussion
- indirect proof = assume a hypothesis together with a negation of a conclussion to reach a contradiction 


$$
A \Rightarrow B = \text{A is sufficient for B and B is necessary for A} \\
A \Leftarrow B = \text{A is necassary for B and B is sufficient for A} \\
A \Leftrightarrow B = \text{A is both necessary and sufficient for B}
$$

### direct proof

- series of statements each one supporting the next 
- makes use of axioms 
- makes use of previously established statements of other theorems 

Math
				
					
				
				
						
				
			
			


​				
​				
					$$
				xxxxxxxxxx A \Rightarrow B = \text{A is sufficient for B and B is necessary for A} \\A \Leftarrow B = \text{A is necassary for B and B is sufficient for A} \\A \Leftrightarrow B = \text{A is both necessary and sufficient for B}
				$$
### indirect proof






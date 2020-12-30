# 8: Codes

[TOC]

## I. inleiding

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1609262148/code-it-fundamentals_eqy72c.png"/>


## II. Foutdetecterende codes



<img src= "https://res.cloudinary.com/dri8yyakb/image/upload/v1609312222/code-it-fundamentals-Page-2_p5swb3.png" />

> CRC checksum altijd polynoom.length - 1

voorbeeld 4-bit CRC

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1609312355/code-it-fundamentals-Page-3_1_soy8tz.png" />



## III. oefeningen op Foutdetecterende codes

oefeningen 1 : CRC bij bericht verzending

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1609313334/code-it-fundamentals-Page-4_emqowo.png"/>

oefeningen 2 : CRC bij bericht ontvangst

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1609315028/code-it-fundamentals-Page-5_j9z3at.png"/>



oefening 3: Bereken de CRC checksum van de onderstaande bitreeksen met de polynoom 110101

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1609319432/code-it-fundamentals-Page-7_e87drv.png"/>



oefening 4 : Je ontvangt onderstaande bitreeksen van een zender die een CRC checksum achter de originele gegevens meestuurt. De zender gebruikt de polynoom 10111. Geef aan of de ontvangen bitreeksen correct of fout zijn.



<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1609316992/code-it-fundamentals-Page-6_zhxbme.png"/>

## IV. foutverbeterende codes

### Hammingcode

> voor achterliggende info zie [vid-1](https://www.youtube.com/watch?v=X8jsijhllIA&amp;feature=emb_logo ) [vid-2](https://www.youtube.com/watch?v=b3NxrZOu_CE&feature=emb_logo)

- neem een binaire code van bvb 8 bits
- nummer code van 1 tot 8
- voeg een pariteit bit toe tussen de databits op posities die machten van 2 zijn 
- pas volledig even pariteit toe
- zet kruisje 2 tot nde macht vertekende van pariteit locatie

| 1    | 1    | 0    | 0    | 1    | 1    | 1    | 0    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| d1   | d2   | d3   | d4   | d5   | d6   | d7   | d8   |

|      |      | 1    |      | 1    | 0    | 0    |      | 1    | 1    | 1    | 0    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| p1   | p2   | d1   | p3   | d2   | d3   | d4   | p4   | d5   | d6   | d7   | d8   |

|      |      |      | 1    |      | 1    | 0    | 0    |      | 1    | 1    | 1    | 0    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|      | p1   | p2   | d1   | p3   | d2   | d3   | d4   | p4   | d5   | d6   | d7   | d8   |
| p1   | x    |      | x    |      | x    |      | x    |      | x    |      | x    |      |
| p2   |      | x    | x    |      | x    | x    |      | x    | x    |      | x    | x    |
| p3   |      |      |      | x    | x    | x    | x    |      |      |      |      | x    |
| p4   |      |      |      |      |      |      |      | x    | x    | x    | x    | x    |

|      |      |      | 1    |      | 1    | 0    | 0    |      | 1    | 1    | 1    | 0    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|      | p1   | p2   | d1   | p3   | d2   | d3   | d4   | p4   | d5   | d6   | d7   | d8   |
| p1   | ?  0 |      | 1    |      | 1    |      | 0    |      | 1    |      | 1    |      |
| p2   |      | ? 0  | 1    |      | 1    | 0    |      |      | 1    | 1    |      |      |
| p3   |      |      |      | ? 1  | 1    | 0    | 0    |      |      |      |      | 0    |
| p4   |      |      |      |      |      |      |      | ? 1  | 1    | 1    | 1    | 0    |

|      | 0    | 0    | 1    | 1    | 1    | 0    | 0    |      | 1    | 1    | 1    | 0    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|      | p1   | p2   | d1   | p3   | d2   | d3   | d4   | p4   | d5   | d6   | d7   | d8   |
| p1   | ?  0 |      | 1    |      | 1    |      | 0    |      | 1    |      | 1    |      |
| p2   |      | ? 0  | 1    |      | 1    | 0    |      |      | 1    | 1    |      |      |
| p3   |      |      |      | ? 1  | 1    | 0    | 0    |      |      |      |      | 0    |
| p4   |      |      |      |      |      |      |      | ? 1  | 1    | 1    | 1    | 0    |

te verzenden is  => 001110011110

---

noteer posities van pariteitsbits met oneven aantal 1 

|        | 0    | 0    | 0     | 1    | 1    | 0    | 0    | 1    | 1    | 1    | 1    | 0    |
| ------ | ---- | ---- | ----- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|        | p1   | p2   | d1    | p3   | d2   | d3   | d4   | p4   | d5   | d6   | d7   | d8   |
| p1 (1) | 0    |      | **0** |      | 1    |      | 0    |      | 1    |      | 1    |      |
| p2 (2) |      | 0    | **0** |      | 1    | 0    |      |      | 1    | 1    |      |      |
| p3     |      |      |       | 1    | 1    | 0    | 0    |      |      |      |      | 0    |
| p4     |      |      |       |      |      |      |      | 1    | 1    | 1    | 1    | 0    |

- 0  0  0  1  1  0  0  1  1  1  1  0 => ontvangen code 
- p1 en p2 hebben oneven aantal 1tjes => tel hun posities op => 1 + 2 = 3 => de 3 bit in de code is verkeerd
- de correcte code is dus 0  0  1  1  1  0  0  1  1  1  1  0

## V. oefeningen op foutverbeterende codes 

| 1    | 1    | 0    | 0    | 1    | 1    | 1    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| d1   | d2   | d3   | d4   | d5   | d6   | d7   |

|      |      | 1    |      | 1    | 0    | 0    |      | 1    | 1    | 1    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| p1   | p2   | d1   | p3   | d2   | d3   | d4   | p4   | d5   | d6   | d7   |

|      |      |      | 1    |      | 1    | 0    | 0    |      | 1    | 1    | 1    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|      | p1   | p2   | d1   | p3   | d2   | d3   | d4   | p4   | d5   | d6   | d7   |
| p1   | ?    |      | 1    |      | 1    |      | 0    |      | 1    |      | 1    |
| p2   |      | ?    | 1    |      | 1    | 0    |      |      | 1    | 1    |      |
| p3   |      |      |      | ?    | 1    | 0    | 0    |      |      |      |      |
| p4   |      |      |      |      |      |      |      | ?    | 1    | 1    | 1    |

|        |      |      | 1    |      | 1    | 0    | 0    |      | 1    | 1    | 1    |
| ------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|        | p1   | p2   | d1   | p3   | d2   | d3   | d4   | p4   | d5   | d6   | d7   |
| p1     | 0    |      | 1    |      | 1    |      | 0    |      | 1    |      | 1    |
| p2     |      | 0    | 1    |      | 1    | 0    |      |      | 1    | 1    |      |
| p3     |      |      |      | 1    | 1    | 0    | 0    |      |      |      |      |
| p4     |      |      |      |      |      |      |      | 1    | 1    | 1    |      |
| result | 0    | 0    | 1    | 1    | 1    | 0    | 0    | 1    | 1    | 1    | 1    |



---



| 0    | 0    | 0    | 1    | 1    | 0    | 0    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| d1   | d2   | d3   | d4   | d5   | d6   | d7   |

|      |      | 0    |      | 0    | 0    | 1    |      | 1    | 0    | 0    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| p1   | p2   | d1   | p3   | d2   | d3   | d4   | p4   | d5   | d6   | d7   |

|      |      |      | 0    |      | 0    | 0    | 1    |      | 1    | 0    | 0    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|      | p1   | p2   | d1   | p3   | d2   | d3   | d4   | p4   | d5   | d6   | d7   |
| p1   | ?    |      | 0    |      | 0    |      | 1    |      | 1    |      | 0    |
| p2   |      | ?    | 0    |      | 0    | 0    |      |      | 1    | 0    |      |
| p3   |      |      |      | ?    | 0    | 0    | 1    |      |      |      |      |
| p4   |      |      |      |      |      |      |      | ?    | 1    | 0    | 0    |

|        |      |      | 0    |      | 0    | 0    | 1    |      | 1    | 0    | 0    |
| ------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|        | p1   | p2   | d1   | p3   | d2   | d3   | d4   | p4   | d5   | d6   | d7   |
| p1     | 0    |      | 0    |      | 0    |      | 1    |      | 1    |      | 0    |
| p2     |      | 1    | 0    |      | 0    | 0    |      |      | 1    | 0    |      |
| p3     |      |      |      | 1    | 0    | 0    | 1    |      |      |      |      |
| p4     |      |      |      |      |      |      |      | 1    | 1    | 0    | 0    |
| result | 0    | 1    | 0    | 1    | 0    | 0    | 1    | 1    | 1    | 0    | 0    |



---



| 1    | 0    | 0    | 0    | 1    | 1    | 1    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| d1   | d2   | d3   | d4   | d5   | d6   | d7   |

|      |      | 1    |      | 0    | 0    | 0    |      | 1    | 1    | 1    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| p1   | p2   | d1   | p3   | d2   | d3   | d4   | p4   | d5   | d6   | d7   |

|      |      |      | 1    |      | 0    | 0    | 0    |      | 1    | 1    | 1    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|      | p1   | p2   | d1   | p3   | d2   | d3   | d4   | p4   | d5   | d6   | d7   |
| p1   | ?    |      | 1    |      | 0    |      | 0    |      | 1    |      | 1    |
| p2   |      | ?    | 1    |      | 0    | 0    |      |      | 1    | 1    |      |
| p3   |      |      |      | ?    | 0    | 0    | 0    |      |      |      |      |
| p4   |      |      |      |      |      |      |      | ?    | 1    | 1    | 1    |

|        |      |      | 1    |      | 0    | 0    | 0    |      | 1    | 1    | 1    |
| ------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|        | p1   | p2   | d1   | p3   | d2   | d3   | d4   | p4   | d5   | d6   | d7   |
| p1     | 1    |      | 1    |      | 0    |      | 0    |      | 1    |      | 1    |
| p2     |      | 1    | 1    |      | 0    | 0    |      |      | 1    | 1    |      |
| p3     |      |      |      | 0    | 0    | 0    | 0    |      |      |      |      |
| p4     |      |      |      |      |      |      |      | 1    | 1    | 1    | 1    |
| result | 1    | 1    | 1    | 0    | 0    | 0    | 0    | 1    | 1    | 1    | 1    |



---



|      | 0    | 1    | 1    | 0    | 0    | 1    | 1    | 1    | 0        | 1    | 1    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | -------- | ---- | ---- |
|      | p1   | p2   | d1   | p3   | d2   | d3   | d4   | p4   | d5       | d6   | d7   |
| p1   | 0    |      | 1    |      | 0    |      | 0    |      | <u>0</u> |      | 1    |
| p2   |      | 1    | 1    |      | 0    | 1    |      |      | <u>0</u> | 1    |      |
| p3   |      |      |      | 0    | 0    | 1    | 1    |      |          |      |      |
| p4   |      |      |      |      |      |      |      | 1    | <u>0</u> | 1    | 1    |

p1 + p3 + p4 => 1 + 8 => 9de bit is verkeerd =>1011111



## VI. CRC correctie  

twee types algoritme 

- **non zero padding** (simpel)
- **zero padding**


$$
\text{ definities }\\
\space\\
\text{datawoord | message polynomial = } m(x)  \\
\text{polynoom met een graad r = } p(x) \\

\space\\
\text{ vertaal een polynoom naar een binaire uitdrukking }\\
\text{ polynoomsleutel = } x^5+x^3+1 \\
\text{ gehele polynoom = } 1x^5+0x^4+1x^3+0x^2+0x^1+1x^0\\
\text{ polynoom woord = } 101001\\

\space\\
\text{ aangezien de hoogstegraadsterm in de polynoom 5 is noemen we de procedure}\\
\text{5-bit CRC}
$$


### non zero padding 

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1609323172/code-it-fundamentals-Page-8_s02bos.png"/>

### zero padding

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1609325559/code-it-fundamentals-Page-9_sjsdh4.png"/>

### verschil

PZ is sterker dan NPZ in het geval van meerdere bitfouten. 



hebben we de CRC-polynoom p(x), dan kunnen we die zodanig ontwerpen zodat geen enkele polynoom


$$
x^{k_1}+x^{k_2}
$$
erdoor deelbaar is, tenzij de exponent groot is (groter dan maximale berichtlengte waarmee) de CRC polynoom wordt meegeleverd. 


$$
\text{voor bvb een polynoom van graad 16 zal dit nooit gebeuren als}\\
k_1,k_2 < 2^{16}-1 = 65535
$$


[explanation](https://math.stackexchange.com/questions/464829/why-should-we-append-zeros-during-crc-calculation)
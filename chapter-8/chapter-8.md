# 8: Codes

[TOC]

## I. inleiding

![image-20201112091039132](C:\Users\henri\AppData\Roaming\Typora\typora-user-images\image-20201112091039132.png)



altijd mogelijk dat tussen 3 en 4 iets fout gaat :

- natuurlijke ruis
- toevallige ruis
- opzettelijke ruis

we kunnen deze **bitfouten** detecteren en of corrigeren via **codeertheorie** waarbij informatie aan het bericht wordt toagevoegd om te kunnen achterhalen of bitfouten zijn opgetreden 

dit kan op 2 manieren

- foutdetectie 
- foutcorrectie (na detectie)
  - **Backward error correction** = gegevens worden opgevraagd bij zender in geval van fouten 
  - **Forward error correction** = algoritme dat correcte bits kan afleiden uit de foutieve reeks (vb. hammingcode)

om aan te geven hoe goed deze codes zijn gebruiken we het begrip **performantie**
$$
\frac{\text{aantal bitfouten die kunnen worden gedetecteerd}}{\text{extra informatie die moet worden toegevoegd aan het bericht}}
$$


## II. Foutdetecterende codes

### herhaling

|  begrip  |   uitleg   |
| ---- | ---- |
| algoritme | oorspronkelijke bitreeks x keer herhalen |
| af te spreken | - lengte oorspronkelijke bits<br />- n (aantal herhalingen) |
| performantie | zeer laag door veel herhalen |

vb: 

- n=2 / length = 4
- send : 1010|1010
- receive: 1010|1110 -> er was zeker storing herhaling komt niet overeen

### (on)even pariteit 

| begrip                           | uitleg                                                       |
| -------------------------------- | ------------------------------------------------------------ |
| algoritme                        | voeg 1 **pariteitsbit** toe zodat<br />- binaire code **oneven aantal bits** heeft = **oneven pariteit**<br />- binaire code **even aantal bits** heeft = **even pariteit** |
| pariteitsbit **oneven** pariteit | - # 1bits is oneven => PB = 0<br />- # 1bits is even => PB = 1<br />**zodanig dat #1 bits altijd oneven is** |
| pariteitsbit **even** pariteit   | - # 1bits is oneven => PB = 1<br />- # 1bits is even => PB = 0<br />**zodanig dat #1 bits altijd even is** |
| af te spreken                    | - lengte oorspronkelijke bits<br />- oneven of even<br />- plaats pariteitsbit voor of achteraan |
| performantie                     | laag<br />- herkend alle oneven aantal bitfouten<br />- herkend NIET alle even aantal bitfouten<br />- weinig extra bits is echter positief |

vb: 

- even / length = 4 / achteraan
- send : 1010|0
- receive: 1110|0 -> pariteitsbit zou 1 moeten zijn als er degelijk 3 1'tjes waren dit klopt dus niet



### controlegetal

#### rest als controlegetal

| begrip    | uitleg                                            |
| --------- | ------------------------------------------------- |
| algoritme | rest van deling (**modulo**) is het controlegetal |

$$
\text{stel we hebben een banknr } BE05\space3631\space9038\space54\space|\space75 \\
\text{controlegetal is } 3631903854 \mod{grootste priem < 100 = 97} = 75 \\
\text{controlegetal is als gevolg } 75 \\ 
\text{zonder rest zou het controlegetal = } 97 
$$



#### cyclical redundancy check (examen)

gebruik een **soort deling** , waarbij de rest van de deling als **checksum meegestuurd** wordt 

<img src="https://www.elprocus.com/wp-content/uploads/2015/06/Cyclic-Redundancy-Check.jpg"/>

| begrip        | uitleg                                                       |
| ------------- | ------------------------------------------------------------ |
| algoritme     | - polynoom links onder oorspronkelijke bitreeks<br />- bit boven meest linkse bit polynoom == 0 ? null : bitwise XOR <br />- polynoom opnieuw onder resultaat 1 bit meer naar rechts terug stap 1 <br />- stop wanneer resultaat korter is dan polynoom |
| voordelen     | - krachtiger dan pariteit<br />- makkelijker in hardware te implementeren |
| af te spreken | - lengte oorspronkelijke bitreeks<br />- polynoom<br />- checksum plaats |
| performantie  | - weinig extra bits (1 minder dan polynoom)<br />- n-bit CRC zql in elke bitreeks **single error burst** kunnen detecteren |

<img src="https://en.bitcoinwiki.org/upload/en/images/f/ff/Cyclic_redundancy_check.PNG">





## III. oefeningen op foutdetecterende codes

| 1101101 \| 10011 | 111010010\|10011 | **100111001011**\|100101 |
| ---------------- | ---------------- | ------------------------ |
| 10011            | 10011            | 100101                   |
| 100001           | 11100010         | 10001011                 |
| 10011            | 10011            | 100101                   |
| **0111**         | 1111010          | **11111**                |
|                  | 10011            |                          |
|                  | 110110           |                          |
|                  | 10011            |                          |
|                  | 10000            |                          |
|                  | 10011            |                          |
|                  | **0011**         |                          |

| 11001001101010\|100101 - 01010 checksum | 1011011010100011\|101011 - 00011 checksum |
| --------------------------------------- | ----------------------------------------- |
| 11001001101010                          | 1011011010100011                          |
| 100101                                  | 101011                                    |
| 1010101101010                           | 0001101010100011                          |
| 100101                                  | 101011                                    |
| 11111101010                             | 0111100100011                             |
| 100101                                  | 101011                                    |
| 1101001010                              | 010111100011                              |
| 100101                                  | 101011                                    |
| 100011010                               | 00010000011                               |
| 100101                                  | 101011                                    |
| 110010                                  | 00101111                                  |
| 100101                                  | 101011                                    |
| **010101**                              | **00100**                                 |



## IV. foutverbeterende codes

### Hammingcode



- neem een binaire code van bvb 8 bits
- nummer code van 1 tot 8
- voeg een pariteit bit toe tussen de databit op posities die machten van 2 zijn 
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

te verzenden is  => 001110011110



---

noteer posities van pariteitsbits met oneven aantal 1 

|      | 0    | 0    | 0     | 1    | 1    | 0    | 0    | 1    | 1    | 1    | 1    | 0    |
| ---- | ---- | ---- | ----- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|      | p1   | p2   | d1    | p3   | d2   | d3   | d4   | p4   | d5   | d6   | d7   | d8   |
| p1   | 0    |      | **0** |      | 1    |      | 0    |      | 1    |      | 1    |      |
| p2   |      | 0    | **0** |      | 1    | 0    |      |      | 1    | 1    |      |      |
| p3   |      |      |       | 1    | 1    | 0    | 0    |      |      |      |      | 0    |
| p4   |      |      |       |      |      |      |      | 1    | 1    | 1    | 1    | 0    |

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
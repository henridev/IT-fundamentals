---
title: "Getallensystemen"
author: "Jens Buysse"
date: "11-9-2020"
output:
  html_document: default
  pdf_document: default
---

```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE)
library('DescTools')
library(binaryLogic)
```
# Oefeningen uit de les op bord
- $(54321)_{10}$
- $(110110101)_2$
- $(7654321)_8$
- $(FFA321C)_{16}$

1. $(54321)_{10}$ omzetten in binaire voortelling

- $2^{15}= 32768$ daarom dus $54321-32768 = 21553 \rightarrow 1$
- $2^{14} = 16384$ daarom dus $21553 - 16384 = 5169 \rightarrow 1$
- $2^{13} = 8192 > 5169 \rightarrow 0$
- $2^{12} = 4096 \leq 5169$ daarom dus $5169 - 4086 = 1073 \rightarrow 1$
- $2^{11} = 2048 > 1073$
- $2^{10} = 1024 \leq 1073$ daarom dus $1073 - 1024 = 49 \rightarrow 1$
- $2^{9} = 512 > 49 \rightarrow 0$
- $2^{8} = 256 > 49 \rightarrow 0$
- $2^{7} = 128 > 49 \rightarrow 0$
- $2^{6} = 64 > 49 \rightarrow 0$
- $2^{5} = 32 \leq 49$ daarom dus  $49-32 = 17 \rightarrow 1$
- $2^4 = 16 \leq 17$ daarom dus $17-16=1 \rightarrow 1$
- $2^3 = 8 > 1 \rightarrow 0$
- $2^2 = > \rightarrow 0$
- $2^1 = > 1 \rightarrow 0$
- $2^0 = 1 \leq 1$ daarom dus $1-1 = 0 \rightarrow 1$

We bekomen dus $(54321)_{10} = (1101010000110001)_2$

2. $(54321)_{10}$ omzetten in octale voorstelling

- $\frac{54321}{8} =$ $`r floor(54321/8)`$, rest na deling is $54321-8\times6790 = 1$
- $\frac{6790}{8} =$ `r floor(6790/8)`, rest na deling is $6790 - 8\times848 = 6$
- $\frac{848}{8} =$ `r floor(848/8)`, rest na deling is $848 - 8*106 = 0$
- $\frac{106}{8} =$ `r floor(106/8)`, rest na deling is $106 - 8*13 = 2$
- $\frac{13}{8} =$ `r floor(13/8)`, rest na deling is $13 - 8*1 = 5$
- $\frac{1}{8} =$ `r floor(1/8)`, rest na deling is $1$

We bekomen dus $(54321)_{10} = (152061)_8$

3. $(54321)_{10}$ omzetten in hexadecimale voorstelling

- $\frac{54321}{16} =$ $`r floor(54321/16)`$, rest na deling is $54321-16\times 3395 = 1$
- $\frac{3395}{16} =$ $`r floor(3395/16)`$, rest na deling is $3395-16\times 212 = 3$
- $\frac{212}{16} =$ $`r floor(212/16)`$, rest na deling is $212-16\times 13 = 4$
- $\frac{13}{16} =$ $`r floor(13/16)`$, rest na deling is $13-16\times 13 = d$

We bekomen dus $(54321)_{10} = (d431)_{16}$


### Uitwerking via R
Via de library DescTools (die hierboven geladen wordt) kan je eenvoudig weg de commando's 
- DecToBin
- DecToOct
- DecToHex

Geruiken om de conversies automatisch te doen. Let op, dit kan je niet gebruiken tijdens het examen. 

```{r }
#binair naar Decimaal
dec <- 54321
bin <- DecToBin(dec)
oct <- DecToOct(dec)
hex <- DecToHex(dec)
bin
oct
hex
```

3. $(110110101)_2$ in decimale vorm

- $2^8 + 2^7 + 2^5 + 2^4 + 2^2 + 2^0$
- $= (437)_{10}$

4. $(110110101)_2$ in octale vorm vorm

- $110.110.101$ (opdelen per drie bits)
- 665

5. $(110110101)_2$ in hexedeciamel vorm 

- $0001.1011.0101$ (opdelen per vier bits)
- $1b5$

6. $(7654321)_8$ in decimale voorstelling

- `r 1*8^0 + 2*8^1 +3*8^2 + 4*8^3 + 5*8^4 + 6*8^5 + 7*8^6`

7. $(7654321)_8$ in binaire voorstelling

- $(7)_8 = (111)_2$
- $(6)_8 = (110)_2$
- $(5)_8 = (101)_2$
- $(4)_8 = (100)_2$
- $(3)_8 = (011)_2$
- $(2)_8 = (010)_2$
- $(1)°8 = (001)_2$

- Concateneren: 111110101100011010001

```{r }
#binair naar Decimaal
bin <- 110110101
dec <- BinToDec(bin)
hex <- DecToHex(dec)
oct <- DecToOct(dec)
dec
bin
oct
hex
```


# Oefeningen op conversies
In volgende oefeningen gaan we eerst in het lang en breed manueel uitleggen hoe je de getallenconversies uitvoert, waarna we de oplossingen ook gaan gerereren via de library **DescTools**. Deze library zet de conversies om voor jou. Gebruik dit als een hulpmiddel om oefenigen te verifiëren, aangezien je deze tool niet kunt gebruiken op het examen. 

## Oefening 1
Zet volgende getallen om in zowel, hexadecimale, octale als decimale vorm.
$(100110010011)_2$ 


  - Decimaal: $1.2^0 + 1.2^1 + 1.2^4 + 1.2^7 + 1.2^8 + 1.2^11 = 1 + 2 + 16 + 128 + 256 + 2048 = 2451$
  - Hexadeciaal: groeper per vier bits : 1001 1001 0011 en dus 993
  - Octaal: groepeer per drie bits: 100 110 010 011 en dus bekomen we 4623


Dit kan ook via R-commando's

```{r }
#binair naar Decimaal
dec <- BinToDec(100110010011)
#Decimaal naar Hexadecimaal
hex <- DecToHex(dec)
#Decimaal naar Octoaal
oct <- DecToOct(dec)

dec
hex
oct
```
## Oefening 2

- Zet $(1001110011110010)_2$ om in hexadecimaal en octaal

- Hexadecimaal: $(1001.1100.1111.0010)_2 = (9CF2)_{16}$
- Octaal : $(001.001.110.011.110.010)_2 = (116362)_8$
- Decimaal: $2^1+2^4+2^5+2^6+2^7+2^10+2^11+2^12+2^15 = 40178$

```{r }
BinToAll <-  function(bin){
  dec <- BinToDec(bin)
  hex <- DecToHex(dec)
  oct <- DecToOct(dec)
  print("Decimaal:")
  print(dec)
  print("Hexadecimaal:")
  print(hex)
  print("Octaal:")
  print(oct)
}

value <- 1001110011110010
BinToAll(value)

```
## Oefening 4
$(101010111100)_2$ In hexadecimale, octale en decimale vorm.

```{r }
value <- 101010111100
BinToAll(value)
```
## Oefening 4
$(1FD)_{16} = (0001.1111.1101)_2$
```{r }
hex <- "1fd"
dec <- HexToDec(hex)
dec
bin <- DecToBin(dec)
bin
oct <- DecToOct(dec)
oct
```



## Oefening 6
$(5307)_8 = (101.011.000.111)_2$
```{r}
bin <- 101011000111
BinToAll(bin)
```


## Oefening 8
$(2A5C)_{16} = (0010.1010.0101.1100)_2 = (010.101.001.011.100)_2 = (25134)_8$

## Oefening 9
$(243)_{8} = (010.100.011)_2 = (1010.0011)_2 = (A3)_{16}$


# Optellingen

- $(1011)_2 + (10101)_2 = (100000)_2$
- $(110,11)_2 + (10,101)_2 = (1001,011)_2$
- $(23,25)_{10} + (40,5)_{10} = (63,75)_{10} = (111111.11)_2$
- $(100)_{10} + (28)_{10} = (128)_{10} = (10000000)_2$
- $(97)_{10} + (115)_{10} = (212)_{10} = (11010100)_2$
- $(147)_{10} + (35)_{10} = (182)_{10} = (10110110)_2$

## Fractionele getallen

- $(11,5625)_{10} = (1011,1001)_2$
- $(126,25)_{10} = (1111110,01)_2 = (0111.1110,01)_2 = (7E,4)_{16}$

## Oefeningen op negatieve getallen
We gebruiken volgende notatie:

### Notatie

- Excess-N : $()_{e127}$
- Met teken : $()_{2abs}$
- 2-complement: $()_{2'}$

### Oplossingen

- $10 = (00001010)_{2abs} = (10001001)_{e127} = (00001010)_{2'}$
- $-13 = (10001101)_{2abs} = (01110010)_{e127} = (11110011)_{2'}$
- $43 = (00101011)_{2abs} = (10101010)_{e127} = (00101011)_{2'}$
- $-52 = (10110100)_{2abs} = (01001011)_{e127} = (11001100)_{2'}$
- $87 = (01010111)_{2abs} = (11010110)_{e127} = (01010111)_{2'}$
- $-87 = (11010111)_{2abs} = (00101000)_{e127} = (10101001)_{2'}$

# Oefeningen op Overflow
We gebruiken hier de package `binaryLogic` om de twee complement versie te berekenen. 


\[ (-22)_{10} – (12)_{10} = (-22)_{10} + (-12)_{10} = (-34)_{10} \]

- $(-22) = -(00010110)_{2} = (11101010)_{2'}$
- $(-12) = -(00001100)_{2} = (11110100)_{2'}$
- $(11101010)_{2'}+(11110100)_{2'} = 1(11011110)_{2'}$
- Er treedt overflow op, maar de som is wel correct.

\[ (11)_{10} – (5)_{10} = (11)_{10} + (-5)_{10} = (6)_{10} \]

- $11 = (0 0 0 0 1 0 1 1)_{2'}$
- $-5 = (1 1 1 1 1 0 1 1)_{2'}$ 
- $11-5= 6 = (0 0 0 0 0 1 1 0)_{2'}$


\[ (-13)_{10} – (15)_{10}  \]

- $-13 = (1 1 1 1 0 0 1 1)_{2'}$
- $-15 = (1 1 1 1 0 0 0 1)_{2'}$
- $-13 -15 = (1 1 1 0 0 1 0 0)_{2'}$


\[ (100)_{10} – (64)_{10} = (100)_{10} + (-64)_{10} = (36)_{10} \]

-$(100)_{10} = (01100100)_{2'}$
-$(-64)_{10} = (11000000)_{2'}$
-$(100)_{10} + -(64)_{10}= 1(00100100)$

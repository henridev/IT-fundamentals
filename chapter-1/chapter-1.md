# hoofdstuk 1 - getallensystemen of talstelsels

## inhoud

- Positionele systemen
  - Inleiding
  - Tiendelige getallen
  - Binaire getallen
  - Octale getallen
  - Hexadecimale getallen
- Conversies tussen talstelsels
  - Binaire combinaties
  - Conversie decimaal binair
  - Conversies talstelsels met als basis een macht van 2
  - Oefeningen op conversies
- Bewerkingen in het binair stelsel
  - Optellen in het binair stelsel
  - Oefeningen op optellen in het binair stelsel
  - Andere bewerkingen
  - Negatieve getallen
  - Oefeningen op negatieve getallen
  - Overflow
  - Oefeningen op overflow
- Floating-point
  - Kommagetallen voorstellen
  - Floating-point voorstelling
  - Floating-point in de computer
  - Decimale waarde van een IEEE 754 binary32 getal
  - IEEE754 binary32 getalwaarde van een decimaal getal
  - Oefeningen op floating-point

## I. Positionele systeem

**cijfer** = symbool gebruikt om getallen voor te stellen

**getal** = aaneeschakeling van cijfers die een bepaalde waarde aantoont

> positie in het getal bepaald de betekenis van het cijfer (met hoeveel we het moeten vermenigvuldigen)

$$
110 = 1*{100} + 1*{10}
$$

**positionleel talsstelsel** = talstelsel waarbij getallen door een reeks symbolen worden voorgesteld. de plaats van dit symbool bepaald de betekenis daarbij

het bestaat uit :

- grondtal A
- verzameling cijfers waarbij aantal cijfers in de verzameling = A

bvb. binair - we hebben grondtal 2 en het aantal symbolen ter beschikking is ook 2 namelijk [0,1]

### A. Tiendelige talstelsel

- verzameling: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
- grondtal: 10
- eg. 1302 = 1000 + 300 + 2

de waarde van de cijfers wordt bepaald door hun positie in het getal

| **10³** | **10²** | 10  | 10  |
| ------- | ------- | --- | --- |
| 1000    | 100     | 10  | 1   |
| 1       | 3       | 0   | 2   |
| 1000    | 300     | 0   | 2   |

<img width="500px" src="https://images.slideplayer.com/26/8523914/slides/slide_4.jpg"/>

### B. binaire talstelsel

- verzameling: {0, 1}
- grondtal: 2
- eg: 1302 = 1024 + 0 + 256 + 0 + 0 + 0 + 16 + 0 + 4 +2 + 0

<div class="container">

| 2^10 | 2^9 | 2^8 | 2^7 | 2^6 | 2^5 | 2^4 | 2^3 | 2^2 | 2^1 | 2^0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1    | 0   | 1   | 0   | 0   | 0   | 1   | 0   | 1   | 1   | 0   |

toepassing: IpV4 - 32 bit address :

- 4294967296 possible combinations
- 11000000 10101000 00001010 00000001 - split in 4 groups of 8 bits or 1 byte
- 192.168.10.1 - in decimal group form

terms :

- **nible** = 4 bits
- **msb** = bit that represents highest value
- **lsb** = bit that represents lowest value

<div class="container">

**afwijkingen tussen decimale veelvouden en binaire veelvouden**

| **[SI-voorvoegsels](http://nl.wikipedia.org/wiki/SI-prefix)** | -              | Binaire voorvoegsels | -             | Afwijking |
| ------------------------------------------------------------- | -------------- | -------------------- | ------------- | --------- |
| Symbool (naam)                                                | Waarde         | Symbool (naam)       | Waarde        | -         |
| kB kilobyte                                                   | 1000^1 = 10^3  | kB kibibyte          | 1024^1 = 2^10 | 2,4%      |
| MB megabyte                                                   | 1000^2 = 10^6  | MiB mebibyte         | 1024^2 = 2^20 | 4,9%      |
| GB gigabyte                                                   | 1000^3 = 10^9  | GiB gibibyte         | 1024^3 = 2^30 | 7,4%      |
| TB terabyte                                                   | 1000^4 = 10^12 | TiB tebibyte         | 1024^4 =2^40  | 10,0%     |
| PB petabyte                                                   | 1000^5 = 10^15 | PiB pebibyte         | 1024^5 =2^50  | 12,6%     |
| EB exabyte                                                    | 1000^6 = 10^18 | EiB exbibyte         | 1024^6 =2^60  | 15,3%     |
| ZB zettabyte                                                  | 1000^7 = 10^21 | ZiB zebibyte         | 1024^7 =2^70  | 18,1%     |
| YB yottabyte                                                  | 1000^8 = 10^24 | YiB yobibyte         | 1024^8 =2^80  | 20,9%     |

eg. een hardeschijf van 3.64tb wou eigenlijk 3.64tib moeten zijn wat overeenkomt met een verschil van bijna 10%

### C. octale talstelsel

- verzameling: {0, 1 ,2 ,3 ,4 ,5 ,6 ,7}
- grondtal: 8
- Om onderscheid te maken met de tiendelige getallen worden octale getallen in IT-omgevingen vooraf gegaan door de prefix **0** (nul).

toepassing: linux bestandpermissies :

$$
\text{bit voorstelling: } (rwx)_{owner}*(rwx)_{group}*(rwx)_{all} \\
\text{read / write / execute}\\
\text{in bits: } (111)_{owner}(101)_{group}(100)_{all} \\
\text{owner full access / group no write access / all only read access}\\
\text{octaal } 754
$$

<b>omzetten van binaire naar octale - groepeer per 3 bits (2^3 = 8)</b>

$$
 (111010)_2 = (111|010)_2 = (72)_8
$$

### D. hexadecimale talstelsel

- verzameling: {0, 1 ,2 ,3 ,4 ,5 ,6 ,7, 8, 9, A=10, B=11, C=12, D=13, E=14, F=15}
- grondtal: 16
- Om onderscheid te maken met de tiendelige getallen worden hexadecimale getallen in IT-omgevingen vooraf gegaan door de prefix **0x** (nul).

$$
(1302)_{10} = (0101 0001 0110)_2 = 0x516 = (16^2)_5 + (16^1)_1 + 6
$$

**omzetten van binaire naar hexa - groepeer per 4 bits (2^4 = 16)**

toepassing ipv6 :

$$
\text{128 bits - weergave in 32 hexadecimals in groepen van 4}\\
(2001:0DB8:ACAD:0001:0000:0000:0000:0002)_{16}
$$

toepassing mac :

$$
\text{48 bits - weergave in 12 hexadecimals in groepen van 2 tot 4} \\
00:0C:6E:C1:22:4A\\
000C–6EC1–224A
$$

## II. Conversie tussen talstelsels

### A. binaire combinaties

$$
\text{N = aantal bits} \\
\text{grondtal = 2} \\
\text{x = possible combinations} \\

\space\\
x=2^n \\
\space\\

\text{ count bits om x verschillende getallen voor te stellen? } \\
\text{ count addressline om geheugenplaats te adresseren ? }

\space\\
\space\\
\text{remember : }\\
\space\\
2^{10} = 1024 = 1kilo \\
a^{n+m} = a^n * a^m \space and \space a^{n-m} = \frac{a^n}{a^m}
$$

| 2^10 | 2^9 | 2^8 | 2^7 | 2^6 | 2^5 | 2^4 | 2^3 | 2^2 | 2^1 | 2^0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1024 | 512 | 256 | 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |

---

**cijfers voor komma**

$$
\text{binairy to decimal conversion : } \\
\space\\
(1010)_2 = 1*2^3+0*2^2+1*2^1+0*2^0 = 8 + 2 = 10 \\
\space\\
\text{decimal to binary conversion : } \\
\space\\
(862)_{10} = 1 * 2^9 + 1 * 2^8 + 1 * 2^6 + 1 * 2^4 + 1 * 2^3 + 1 * 2^2 = 512 + 256 + 64 + 16 + 8 + 6 \\
862 - 512 = 350 => 350 - 256 = 94 => 94 - 64 = 30 => 30 - 16 = 14 => 14 - 8 = 6 => 6 - 6 = 0 \\
(1101011110)_2 \\
\text {find highest power 2 to fit in number --> substract that value --> rinse and repeat }
$$

**cijfers na de komma**

| 2^-1 | 2^-2 | 2^-3  | 2^-4   | 2^-5    |
| ---- | ---- | ----- | ------ | ------- |
| 0,5  | 0,25 | 0,125 | 0,0625 | 0,03125 |

$$
\text{binary to decimal conversion : } \\
\space\\
(0.011)_2 = 0*2^{-1}+1*2^{-2}+1*2^{-3} = 0.375 \\
\space\\
\text{decimal to binary conversion : } \\
\space\\
(0.875)_{10} = 1 * 2^{-1} + 1 * 2^{-2} + 1 * 2^{-3} \\
0.875 - 0.5 = 0.375 => 0.375 - 0.250 = 0.175 => 0.175 - 0.175 = 0 \\
(1101011110)_2 \\
\text {find highest power 2 to fit in number --> substract that value --> rinse and repeat }
$$

---

### B. methodes wanneer conversies na komma te moeilijk worden

- **opeenvolgende deling** = bin to dec
- **opeenvolgdende vermenigvuldiging** = dec to bin

<span class="exam-question">opeenvolgende deling : stop wanneer 0 voor komma gebruikt :</span>

1. neem lsb deel door grondtal en tel volgende lsb op
2. neem resultaat deel door grondtal dan tel volgende lsb erbij op
3. stop als 0 voor komma gebruikt

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601533636/Screenshot_2020-10-01_082648_lcrk2x.png">

<span class="exam-question">opeenvolgende vermenigvuldiging : stop wanneer er geen cijfers na komma meer zijn omwille van vermenigvuldiging (gebruik telkens cijfer voor komma voor de binary later)</span>

1. neem volledige number vermenigvuldig met grondtal het cijfer voor komma van het result is cijfer gebruikt
2. neem resultaat vermenigvuldig met grondtal het cijfer voor komma van het result is cijfer gebruikt
3. neem resultaat vermenigvuldig met grondtal het cijfer voor komma van het result is cijfer gebruikt if geen cijfers na komma na de vermenigvuldigingen stop else to step 2

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601533921/Screenshot_2020-10-01_083141_e9sgpe.png">

### c. conversie talstelsels met met als grondtal een macht van 2

- als het grondtal een macht van 2 is kan 1 symbool van het talstelsel altijd in vast #bits worden uitgedrukt
  - octaal = 8 = 2^3
  - hexa = 16 = 2^4
- convert from talstelsel to binary
  - convert each symbol to bit representation
- convert from binary to talstelsel
  - group the binary symbols
  - add zeros front or back

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601534372/Screenshot_2020-10-01_083922_nqazwg.png">

ipv4 toepassing:

2 delen van ipv4 zijn **netwerkdeel** en **hostdeel** > vertelt respectievelijk tot welk netwerk je behoort en welk apparaat je bent binnen dat netwerk

- **netwerkadress** = address waarbij alle bits van hostdeel op nul staan
- **broadcastadress** = address waarbij alle bits van hostdeel op een staan
- **adresrange** = een IP-adres range waaruit een apparaat een ip wordt toegekend binnen een bepaald netwerk. = interval tussen het netwerkadres en het broadcastadres van een netwerk.

* eg: ip-address is 192.168.78.64
* 192.168.78 = netwerkdeel
* 64 = hostdeel
* netwerkadress = 192.168.78.0
* broadcastadress = 192.168.78.128
* range tussen 192.168.78.0 - 192.168.78.128

## III. bewerkingen in binaire stelsel

### A. Optellen

<img style="background: white" src="https://grace.bluegrass.kctcs.edu/~kdunn0001/files/Arithmetic_Operations_and_Circuits/paste_image1.png">

### B. andere bewerkingen

- complementing : ones and zeros switch => operator **¬** => ¬[00011010] = [11100101]

- bitwise AND : bit by bit see if and is true => operator **Λ** => [1010] Λ [1100] = [1000]

- bitwise OR : bit by bit see if or is true => operator **V** => [1010] V [1100] = [1110]

- bitwise XOR : bit by bit see if xor is true => [1010] xor [1100] = [0110]

### C. negatieve getallen

> decimaal

- plaats - voorop
- bewerking verschil kunnen we zien als som van een positief en negatief getal

> binair

- probleem getallen worden in groepen van 8 / 16 / 32 / 64 bit opgeslagen aka **computerwoord**
- voorstellen negatieve getallen moet binnen computerwoord gebeuren
- **teken** moet binnen woord bijgehouden worden

3 methodes :

- teken + absolute waarde
- excess-N
- 2nd complement method

#### teken + absolute waarde

$$
\text{most left bit is the signbit (1 negative)}\\
\text{with 8 bit number [10001100] = -12 and [00010110] = 22} \\
\\
\space
\\
\text{we can't just add positive and negative number to do substractions}\\
(A+(-B)=/=A-B) \\
22+-12\\
00010110+10100010=(-34)
$$

drawbacks :

- subtracting has to be implemented in different way inside hardware = EXPENSIVE
- operations can only be executed after the sign bits are extracted and analysed
- 0 has two representations [00000000] = [10000000]

#### excess-n

$$
\text{N optellen bij getal (N = 2 tot de x bit getal - 1)} \\
\text{N bij 8-bit getal = 127} \\
1_{10} = 128 = [10000000] \\
0_{10} = 127 = [01111111] \\
-127_{10} = 0 = [00000000] \\
-1_{10} = 126 = [01111110] \\
128_{10} = 255 = [11111111] \\
$$

pros : zero only represented in one way

drawbacks

- subtractions still not easier eg. -127 + (-127) = -127
- numbers are not represented in regular binary notation

#### 2nd complements

positive numbers = regular binary (positive number always 0 as msb)

negative numbers

- write binary form of the absolute
- invert all bits
- negative number always 1 as msb

$$
(0)_{10} \rightarrow [00000000] \\
(1)_{10} \rightarrow [00000001] \\
(-1)_{10} \rightarrow [1111111] \\
(-10)_{10} \rightarrow [11110110] \\
$$

**pros : we can (A-B) via (A+(-B))**

### d. overflow

- when adding two second complements this can cause errors because the results can be out of bound **overflow**

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601822523/Screenshot_2020-10-04_164055_zaqbct.png">

when do we have overflow?

- XOR following conditions
  - **carry naar het tekenbit** = the bit before msb carries over bit to the msb
  - **carry naar buiten** = carry over from the msb to nowhere aka outside assigned space

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601823518/Screenshot_2020-10-04_165824_snr5a8.png">

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601823650/Screenshot_2020-10-04_165824_u5xnuc.png">

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601823672/Screenshot_2020-10-04_165824_dmt6ik.png">

## IV. floating points

### A. kommagetallen voorstellen

decimale en binaire kommagetallen kunnen gelijkaardig worden voorgesteld :

$$
0,011 = 0,11 . 10^{-1} = 1,1 . 10^{-2} = 11 . 10^{-3} \\
- 0,011 = 0,11 . 2^{-1} = 1,1 . 2^{-2} = 11 . 2^{-3}
$$

### B. floating point voorstelling

- cijfers na komma is variabel bij decimale (we moeten bijhouden waar komma staat)
- 2 getallen voor kommagetal
- waarde
  - waar kommagetal moet staan ==> **exponent**
- ook bij binaire variabel aantal cijfers na de komma
- extra voordeel : bij kommagetal is MSB altijd 1

  - hierdoor kunnen we kiezen te werken met een **genormaliseerde vorm**
    : we verschuiven de komma tot voor de MSB die 1 is
  - dan hebben we nodig

    - getal die **mantisse** bepaalt = deel na de komma
    - getal die **exponent** bepaalt

$$
[101.1101] = (1.011101)_2 * 2^2 ---> \text{mantisse .011101 exponent 2}
$$

we moeten weten #bits mantisse vs #bits exponent :

wij gebruiken binary32 voorstelling :

<img src="data:image/png;base64,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"/>

- sign bit
- exponent als excess N voorgesteld with N = 127
- last 23 bits mantisse

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601869886/Screenshot_2020-10-05_055044_yyqigs.png">

---

oefeningen floating points

- Bepaal voor volgende hexadecimale getallen de decimale waarde van hun floating-point voorstelling met enkelvoudige precisie:
  - (CE100000)16 = 1 10011100 00100000000000000000000
  - (43C00000)16 = 0 10000111 10000000000000000000000
  - (3FC00000)16 = 0 01111111 10000000000000000000000
  - (42F48000)16 = 0 10000101 11101001000000000000000

$$
\text{step 1 is negative? } \rightarrow (1)_{2} = - \\
\text{step 2 exponent} \rightarrow (10011100)_{2} = (155)_{10}\\
155-127=28 \\
\text{step 3 mantisse} \rightarrow 00100000000000000000000  \\
1,0010... = (1.125)_{10} \\
\text{step 4 number is} \rightarrow  -1.125*2^{28}=-301989888\\

\space
\\

\text{step 1 is negative? } \rightarrow (0)_{2} = + \\
\text{step 2 exponent} \rightarrow (10000111)_{2} = (135)_{10}\\
135-127=8 \\
\text{step 3 mantisse} \rightarrow 10000000000000000000000   \\
1,10... = (1.5)_{10} \\
\text{step 4 number is} \rightarrow  1.5*2^{8}=384 \\

\space
\\

\text{step 1 is negative? } \rightarrow (0)_{2} = + \\
\text{step 2 exponent} \rightarrow (01111111)_{2} = (127)_{10}\\
127-127=0 \\
\text{step 3 mantisse} \rightarrow 10000000000000000000000   \\
1,10... = (1.5)_{10} \\
\text{step 4 number is} \rightarrow  1.5*2^{0}=1.5 \\

\space
\\

\text{step 1 is negative? } \rightarrow (0)_{2} = + \\
\text{step 2 exponent} \rightarrow (10000101)_{2} = (133)_{10}\\
133-127=6 \\
\text{step 3 mantisse} \rightarrow 11101001000000000000000    \\
1,111010010... = (1.91015625)_{10} \rightarrow \space \frac{233}{256} \text{ via opeenvolgende deling} \\
\text{step 4 number is} \rightarrow  1.91015625*2^{6}=122.25 \\

\space
\\
$$

- Bepaal voor volgende decimale waarden hun floating-point voorstelling met enkelvoudige precisie, in hexadecimale vorm:

  - (149,25)10 =

  - (-1)10 =
  - (538,625)10 =
  - (-5/32)10 =

$$
\text{step 1 conversion to binary} \rightarrow (149,25)_{10} = (10010010,01)_{2} \\
\text{step 2 normalisation} \rightarrow (1,001001001*2^7)_{2} \\
\text{step 3 excess n} \rightarrow (127 + 7 = 134)_{10} = 10001000 \\
\text{step 4 ieee754 form} \rightarrow  0|10001000|10001000000000000000000 \\
\text{step 5 to hex} \rightarrow 0X44440000\\

\space
\\

\text{step 1 conversion to binary} \rightarrow (-1)_{10} = (-1)_{2} \\
\text{step 2 normalisation} \rightarrow (-1*2^0)_{2} \\
\text{step 3 excess n} \rightarrow (127 + 0 = 127)_{10} = 01111111 \\
\text{step 4 ieee754 form} \rightarrow  1|01111111|00000000000000000000000 \\
\text{step 5 to hex} \rightarrow 0XBF800000\\

\space
\\

\text{step 1 conversion to binary} \rightarrow (538,625)_{10} = (1000011010,101)_{2} \\
\text{step 2 normalisation} \rightarrow (1,000011010101*2^9)_{2} \\
\text{step 3 excess n} \rightarrow (127 + 9 = 136)_{10} = 10001000 \\
\text{step 4 ieee754 form} \rightarrow  0|10001000|00001101010100000000000\\
\text{step 5 to hex} \rightarrow 0X4406A800\\

\space
\\

\text{step 1 conversion to binary} \rightarrow (-5/32)_{10} = (0,00101)_{2} \\
\frac{1}{2}|\frac{1}{4}|\frac{1}{8}|\frac{1}{16}|\frac{1}{32} \rightarrow \frac{1}{8} = \frac{4}{32} \rightarrow \frac{1}{8} + \frac{1}{32} = \frac{5}{32}\\
\text{step 2 normalisation} \rightarrow (1,01*2^-3)_{2} \\
\text{step 3 excess n} \rightarrow (127 - 3 = 124)_{10} = 01111100 \\
\text{step 4 ieee754 form} \rightarrow  1|01111100|01000000000000000000000 \\
\text{step 5 to hex} \rightarrow 0XBE200000\\
$$

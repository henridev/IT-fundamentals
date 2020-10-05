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
</style>

# hoofdstuk 1 - getallensystemen of talstelsels

<details>
  <summary>inhoud</summary>

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

</details>

<details>
  <summary>Positionele systeem</summary>

- **cijfer** = symbool gebruikt om getallen voor te stellen
- **getal** = aaneeschakeling van cijfers die een bepaalde waarde aantoont

==> positie in het getal bepaald de betekenis van het cijfer (met hoeveel we het moeten vermenigvuldigen)

- eg. 110 = 1 _ 100 + 1 _ 10
- eg. 101 = 1 \* 100 + 1

**positionleel talsstelsel** = talstelsel waarbij getallen door een reeks symbolen worden voorgesteld. de plaats van dit symbool bepaald de betekenis daarbij

het bestaat uit :

- grondtal A
- verzameling cijfers waarbij aantal cijfers in de verzameling = A

**<u>I. Tiendelige talstelsel</u>**

- verzameling: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
- grondtal: 10
- eg. 1302 = 1000 + 300 + 2

| **10³** | **10²** | 10  | 10  |
| ------- | ------- | --- | --- |
| 1000    | 100     | 10  | 1   |
| 1       | 3       | 0   | 2   |
| 1000    | 300     | 0   | 2   |

<img src="https://images.slideplayer.com/26/8523914/slides/slide_4.jpg"/>

**<u>II. binaire talstelsel</u>**

- verzameling: {0, 1}
- grondtal: 2
- eg: 1302 = 1024 + 0 + 256 + 0 + 0 + 0 + 16 + 0 + 4 +2 + 0

| 2^10 | 2^9 | 2^8 | 2^7 | 2^6 | 2^5 | 2^4 | 2^3 | 2^2 | 2^1 | 2^0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1    | 0   | 1   | 0   | 0   | 0   | 1   | 0   | 1   | 1   | 0   |

toepassing: IpV4 - 32 bit address :

- 11000000 10101000 00001010 00000001 - split in 4 groups of 8 bits or 1 byte
- 192.168.10.1 - in decimal group form

terms :

- **nible** = 4 bits
- **msb** = bit that represents highest value
- **lsb** = bit that represents lowest value

<b>afwijkingen tussen decimale veelvouden en binaire veelvouden</b>

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

- eg. een hardeschijf van 3.64tb wou eigenlijk 3.64tib moeten zijn wat overeenkomt met een verschil van bijna 10%

**<u>III. octale talstelsel</u>**

- verzameling: {0, 1 ,2 ,3 ,4 ,5 ,6 ,7}
- grondtal: 8
- Om onderscheid te maken met de tiendelige getallen worden octale getallen in IT-omgevingen vooraf gegaan door de prefix **0** (nul).

toepassing: linux bestandpermissies :

- bit voorstelling: (rwx)\_owner*(rwx)\_group*(rwx)all
  - read / write / execute
- (111)owner(101)group(100)all
  - owner full access / group no write access / all only read access
- octaal ==> 754 - filename

<b>omzetten van binaire naar octale - groepeer per 3 bits (2^3 = 8)</b>

- eg (111010)\_2 = (111 010)\_2 = (72)\_8

**<u>IV. hexadecimale talstelsel</u>**

- verzameling: {0, 1 ,2 ,3 ,4 ,5 ,6 ,7, 8, 9, A=10, B=11, C=12, D=13, E=14, F=15}
- grondtal: 16
- Om onderscheid te maken met de tiendelige getallen worden hexadecimale getallen in IT-omgevingen vooraf gegaan door de prefix **0x** (nul).
- eg. (1302)\_10 = (0101 0001 0110)\_2 = 0x516 = (16^2) _ 5 + (16^1) _ 1 + 6

<b>omzetten van binaire naar hexa - groepeer per 4 bits (2^4 = 16)</b>

toepassing ipv6 :

- 128 bits - weergave in 32 hexadecimals in groepen van 4
- (2001:0DB8:ACAD:0001:0000:0000:0000:0002)\_16

toepassing mac :

- 48 bits - weergave in 12 hexadecimals in groepen van 2 tot 4
  - 00:0C:6E:C1:22:4A
  - 000C – 6EC1 – 224A

</details>

<detailss>
  <summary>Conversie tussen talstelsels</summary>

**<u>I. binaire combinaties</u>**

$$
\text{N = aantal bits | grondtal =2 | x = possible combinations} \\

\space\\
x=2^n \\
\space\\

\text{ count bits om x verschillende getallen voor te stellen? } \\
\text{ count addresslin om geheugenplaats te adresseren ? }

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
(862)_10 = 1 * 2^9 + 1 * 2^8 + 1 * 2^6 + 1 * 2^4 + 1 * 2^3 + 1 * 2^2 = 512 + 256 + 64 + 16 + 8 + 6 \\
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

**methodes wanneer conversies na komma te moeilijk worden**

- **opeenvolgende deling** = bin to dec
- **opeenvolgdende vermenigvuldiging** = dec to bin

<span class="exam-question">opeenvolgende deling : stop wanneer 0 voor komma gebruikt :</span>

1. neem lsb deel door grondtal en tel volgende lsb op
2. neem resultaat deel door grondtal dan tel volgende lsb erbij op
3. neem resultaat deel door grondtal dan tel volgende lsb erbij op if 0 voor komma stop else back to step 2

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601533636/Screenshot_2020-10-01_082648_lcrk2x.png">

<span class="exam-question">opeenvolgende vermenigvuldiging : stop wanneer er geen cijfers na komma meer zijn omwille van vermenigvuldiging (gebruik telkens cijfer voor komma voor de binary later)</span>

1. neem volledige number vermenigvuldig met grondtal het cijfer voor komma van het result is cijfer gebruikt
2. neem resultaat vermenigvuldig met grondtal het cijfer voor komma van het result is cijfer gebruikt
3. neem resultaat vermenigvuldig met grondtal het cijfer voor komma van het result is cijfer gebruikt if geen cijfers na komma na de vermenigvuldigingen stop else to step 2

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601533921/Screenshot_2020-10-01_083141_e9sgpe.png">

**<u>II. conversie talstelsels met met als basis een macht van 2</u>**

- als het grondtal een macht van 2 is kan 1 symbool van het talstelsel altijd in vast #bits worden uitgedrukt
  - octaal = 8 = 2^3
  - hexa = 16 = 2^4
- convert from talstelsel to binary
  - convert each symbol to bit representation
- convert to talstelsel from binary
  - group the binary symbols
  - add zeros front or back

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601534372/Screenshot_2020-10-01_083922_nqazwg.png">

ipv4 toepassing:

- 32 bits
- netwerkdeel = apparaat behoort tot netwerk x
- hostdeel = binnen dit netwerk apparaat x
- netwerkadress = address waarbij alle bits van hostdeel op nul staan
- broadcastadress = address waarbij alle bits van hostdeel op een staan
- adresrange = een IP-adres range waaruit een apparaat een ip wordt toegekend binnen een bepaald netwerk. = interval tussen het netwerkadres en het broadcastadres van een netwerk.
- dotted voorstelling = decimaal

* eg: ip-address is 192.168.15.100/24 | subnet mask is 255.255.255.0 (klasse c)
* network address = 192.168.15.0
* broadcat address = 192.168.15.255

</details>

<details>
  <summary>bewerkingen in binaire stelsel</summary>

**<u>I. Optellen</u>**

<img style="background: white" src="https://grace.bluegrass.kctcs.edu/~kdunn0001/files/Arithmetic_Operations_and_Circuits/paste_image1.png">

**<u>II. Andere bewerkingen</u>**

- complementing :

* ones and zeros switch
* operator **¬**
* eg: ¬[00011010] = [11100101]

- bitwise AND :

* operator **Λ**
* eg: [1010] Λ [1100] = [1000]

- bitwise OR :

* operator **V**
* eg: [1010] V [1100] = [1110]

- bitwise XOR :

* operator **xor**
* eg: [1010] xor [1100] = [0110]

**<u>III. Negatieve getallen</u>**

> decimaal

- plaats - voorop
- bewerking verschil kunnen we zien als als van een positief en negatief getal

> binair

- probleem getallen worden in groepen van 8 / 16 / 32 / 64 bit opgeslagen aka **computerwoord**
- voorstellen negatieve getallen moet binnen computerwoord gebeuren
- **teken** moet binnen woord bijgehouden worden

3 methodes :

- teken + absolute waarde
- excess-N
- 2nd complement method

> teken + absolute waarde

- most left bit is the signbit (1 negative)
- eg with 8 bit number [10001100] = -12 and [00010110] = 22
- drawbacks :
  - we can not just use addition to of positive and negative number to do substractions (A+(-B)=/=A-B) eg. 22+-12 results in 10100010 or (-34)
  - subtracting has to be implemented in different way inside hardware = EXPENSIVE
  - operations can only be executed after the sign bits are extracted and analysed
  - 0 has two representations [00000000] = [10000000]

> excess-n

- N optellen bij getal (N = 2 tot de x bit getal - 1)
- N bij 8-bit getal = 127
- examples
  - 1_10 = 128 = [10000000]
  - 0_10 = 127 = [01111111]
  - -127 = 0 = [00000000]
  - -1 = 126 = [01111110]
  - 128 = 255 = [11111111]
- pros
  - zero only represented in one way
- drawbacks
  - subtractions still not easier eg. -127 + (-127) = -127
  - numbers are not represented in regular binary notation

> 2nd complements

- positive numbers = regular binary
  - positive number always 0 as msb
- negative numbers
  - write binary form of the absolute
  - invert all bits
  - negative number always 1 as msb
  - eg. (-10)10 ==> [11110110] ([00001010] is 10 and converts to [11110101] + 1 (carries over) which results in [11110110] as result
- pros
  - we can (A-B) via (A+(-B))

**<u>IV. Overflow</u>**

- when adding two second complements this can cause errors because the results can be out of bound **overflow**
- eg -116 + (-60) = -176 --> 10110000 first bit is already one for absolute value

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601822523/Screenshot_2020-10-04_164055_zaqbct.png">

- when do we have overflow?

* XOR following conditions
  - **carry naar het tekenbit** = the bit before msb carries over bit to the msb
  - **carry naar buiten** = carry over from the msb to nowhere aka outside assigned space

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601823518/Screenshot_2020-10-04_165824_snr5a8.png">

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601823650/Screenshot_2020-10-04_165824_u5xnuc.png">

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601823672/Screenshot_2020-10-04_165824_dmt6ik.png">

</details>

<details>
  <summary>floating points</summary>

**<u>I. kommagetallen voorstellen</u>**

decimale en binaire kommagetallen kunnen gelijkaardig wroden voorgesteld :

- 0,011 = 0,11 . 10 -1 = 1,1 . 10 -2 = 11 . 10 -3
- 0,011 = 0,11 . 2 -1 = 1,1 . 2 -2 = 11 . 2 -3

**<u>II. floating point voorstelling</u>**

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
    - eg. [101.1101] = (1.011101)\_2 \* 2^2 ---> mantisse .011101 exponent 2

we moeten weten #bits mantisse vs #bits exponent :

wij gebruiken binary32 voorstelling :

<img src="https://lh3.googleusercontent.com/proxy/rkwWgBmcJqE0H1JmVnaYtRPjXo7hCqI5VIZ0CVI6UV-IDjgWYvOCEEAcVUg3JHS8lZCH3VKpSjGAMJFd8KiqLqD1ainFEZFeT7Pmap0EOaOxr4TTCfE5QANAqXkbMKRyhe8hFbVhNX15m2fsWQ">

- sign bit
- exponent als excess N voorgesteld with N = 127
- last 23 bits mantisse

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601869886/Screenshot_2020-10-05_055044_yyqigs.png">

    **<u>III. floating point in de computer</u>**
    **<u>IV. decimale waared ieee 754 binary 32 getal</u>**
    **<u>V. ieee754 binary32 getalwaarde van een decimaal getal</u>**

</details>

---

oefeningen floating points

- Bepaal voor volgende hexadecimale getallen de decimale waarde van hun floating-point voorstelling met enkelvoudige precisie:
  - (CE100000)16 =
  - (43C00000)16 =
  - (3FC00000)16 =
  - (42F48000)16 =
- Bepaal voor volgende decimale waarden hun floating-point voorstelling met enkelvoudige precisie, in hexadecimale vorm:
  - (149,25)10 =
  - (-1)10 =
  - (538,625)10 =
  - (-5/32)10 =

# hoofdstuk 1 - getallensystemen of talstelsels

- Positionele systemen
  - Inleiding
  - Tiendelige getallen
  - Binaire getallen
  - Octale getallen
  - Hexadecimale getalleN
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

## Positionele systemen

**cijfer** = symbool gebruikt om getallen voor te stellen

**getal** = aaneeschakeling van cijfers die een bepaalde waarde aantoont

de positie in het getal bepaald de betekenis van het cijfer (met hoeveel we het moeten vermenigvuldigen)

110 = 1 _ 100 + 1 _ 10

101 = 1 \* 100 + 1

**positionleel talsstelsel** = talstelsel waarbij getallen door een reeks symbolen worden voorgesteld. de plaats van dit symbool bepaald de betekenis daarbij

het bestaat uit

- grondtal A
- verzameling cijfers waarbij aantal cijfers in de verzameling = A

**<u>Tiendelige talstelsel</u>**

verzameling: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}

grondtal: 10

vb: 1302 = 1000 + 300 + 2

| **10³** | **10²** | 10  | 10  |
| ------- | ------- | --- | --- |
| 1000    | 100     | 10  | 1   |
| 1       | 3       | 0   | 2   |
| 1000    | 300     | 0   | 2   |

decimale veelvouden:
<img src="https://images.slideplayer.com/26/8523914/slides/slide_4.jpg">

**<u>binaire talstelsel</u>**

verzameling: {0, 1}

grondtal: 2

vb: 1302 = 1024 + 0 + 256 + 0 + 0 + 0 + 16 + 0 + 4 +2 + 0

| 2^10 | 2^9 | **2^8** | **2^7** | **2^6** | **2^5** | **2^4** | **2^3** | **2^2** | **2^1** | **2^0** |
| ---- | --- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 1    | 0   | 1       | 0       | 0       | 0       | 1       | 0       | 1       | 1       | 0       |

toepassing: IpV4 - 32 bit address

11000000 10101000 00001010 00000001 - split in 4 groups of 8 bits or 1 byte

192.168.10.1 - in decimal group form

**nible** = 4 bits

**msb** = bit that represents highest value

**lsb** = bit that represents lowest value

<u>afwijkingen tussen decimale veelvouden en binaire veelvouden</u>

| **[SI-voorvoegsels](http://nl.wikipedia.org/wiki/SI-prefix)** |                | Binaire voorvoegsels                                    |              | Afwijking |
| ------------------------------------------------------------- | -------------- | ------------------------------------------------------- | ------------ | --------- |
| Symbool (naam)                                                | Waarde         | Symbool (naam)                                          | Waarde       |           |
| kB ([kilobyte](http://nl.wikipedia.org/wiki/Kilobyte))        | 1000^1 = 10^3  | KiB ([kibibyte](http://nl.wikipedia.org/wiki/Kibibyte)) | 1024^1 =2^10 | 2,4%      |
| MB ([megabyte](http://nl.wikipedia.org/wiki/Megabyte))        | 1000^2 = 10^6  | MiB ([mebibyte](http://nl.wikipedia.org/wiki/Mebibyte)) | 1024^2 =2^20 | 4,9%      |
| GB ([gigabyte](http://nl.wikipedia.org/wiki/Gigabyte))        | 1000^3 = 10^9  | GiB ([gibibyte](http://nl.wikipedia.org/wiki/Gibibyte)) | 1024^3 =2^30 | 7,4%      |
| TB ([terabyte](http://nl.wikipedia.org/wiki/Terabyte))        | 1000^4 = 10^12 | TiB ([tebibyte](http://nl.wikipedia.org/wiki/Tebibyte)) | 1024^4 =2^40 | 10,0%     |
| PB ([petabyte](http://nl.wikipedia.org/wiki/Petabyte))        | 1000^5 = 10^15 | PiB ([pebibyte](http://nl.wikipedia.org/wiki/Pebibyte)) | 1024^5 =2^50 | 12,6%     |
| EB ([exabyte](http://nl.wikipedia.org/wiki/Exabyte))          | 1000^6 = 10^18 | EiB ([exbibyte](http://nl.wikipedia.org/wiki/Exbibyte)) | 1024^6 =2^60 | 15,3%     |
| ZB ([zettabyte](http://nl.wikipedia.org/wiki/Zettabyte))      | 1000^7 = 10^21 | ZiB ([zebibyte](http://nl.wikipedia.org/wiki/Zebibyte)) | 1024^7 =2^70 | 18,1%     |
| YB ([yottabyte](http://nl.wikipedia.org/wiki/Yottabyte))      | 1000^8 = 10^24 | YiB ([yobibyte](http://nl.wikipedia.org/wiki/Yobibyte)) | 1024^8 =2^80 | 20,9%     |

eg. een hardeschijf van 3.64tb wou eigenlijk 3.64tib moeten zijn wat overeenkomt met een verschil van bijna 10%

**<u>octale talstelsel</u>**

verzameling: {0, 1 ,2 ,3 ,4 ,5 ,6 ,7}

grondtal: 8

! Om onderscheid te maken met de tiendelige getallen worden octale getallen in IT-omgevingen vooraf gegaan door de prefix **0** (nul).

toepassing: linux bestandpermissies

- bit voorstelling: (rwx)\_owner*(rwx)\_group*(rwx)all
  - read / write / execute
- (111)owner(101)group(100)all
  - ovner full access / group no write access / all only read access
- octaal --> 754 - filename

<u>omzetten van binaire naar octale - groepeer per 3 bits (2^3 = 8)</u>

**<u>hexadecimale talstelsel</u>**

verzameling: {0, 1 ,2 ,3 ,4 ,5 ,6 ,7, 8, 9, A=10, B=11, C=12, D=13, E=14, F=15}

grondtal: 16

vb. 1302

(16^2) _ 5 + (16^1) _ 2 + 1 \* 0 = 0x516

! Om onderscheid te maken met de tiendelige getallen worden hexadecimale getallen in IT-omgevingen vooraf gegaan door de prefix **0x** (nul).

<u>omzetten van binaire naar hexa - groepeer per 4 bits (2^4 = 16)</u>

## Conversie tussen talstelsels

**<u>binaire combinaties</u>**

$$
\text{N = aantal bits | grondtal =2 | x = possible combinations} \\

\space\\
x=2^n \\
\space\\

\text{ count bits om x verschillende getallen voor te stellen? } \\
\text{ count addressliin om geheugenplaats te adresseren ? }

\space\\
\space\\
\text{remember}\\
2^{10} = 1024 = 1kilo \\
a^{n+m} = a^n * a^m \space and \space a^{n-m} = \frac{a^n}{a^m}
$$

| **2^10** | **2^9** | **2^8** | **2^7** | **2^6** | **2^5** | **2^4** | **2^3** | **2^2** | **2^1** | **2^0** |
| -------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 1024     | 512     | 256     | 128     | 64      | 32      | 16      | 8       | 4       | 2       | 1       |

---

convert decimal to binary :

find highest power 2 to fit in number --> substract that value --> rinse and repeat
(ex. (862)\_10 = (1101011110)\_2)

focus: cijfers na de komma

| 2^-1 | 2^-2 | 2^-3  | 2^-4   | 2^-5    |
| ---- | ---- | ----- | ------ | ------- |
| 0,5  | 0,25 | 0,125 | 0,0625 | 0,03125 |

(ex. (0.011)\_2 = (0.375)\_10)

---

methodes wanneer conversies na komma te moeilijk worden

- **opeenvolgende deling** = bin to dec
- **opeenvolgdende vermenigvuldiging** = dec to bin

> opeenvolgende deling : stop wanneer 0 voor komma gebruikt

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601533636/Screenshot_2020-10-01_082648_lcrk2x.png">

> opeenvolgende vermenigvuldiging : stop wanneer er geen cijfers na komma meer zijn omwille van vermenigvuldiging (gebruik telkens cijfer voor komma voor de binary later)

<img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601533921/Screenshot_2020-10-01_083141_e9sgpe.png">

**<u>conversie talstelsels met met als basis een macht van 2</u>**

- wnr we een macht van 2 als grondtal hebben kan 1 symbool van het talstelsel altijd in vast aantal bits worden uitgedrukt
  - octaal = 8 = 2^3
  - hexa = 16 = 2^4
- convert to bin
  - voeg 0 toe zodat we groepen krijgen
  - voor elke groep vind talstelsel notatie
- convert from bin
  _ convert into binary grouping add 0 where needed
  _ remove zeros
  <img src="https://res.cloudinary.com/dri8yyakb/image/upload/v1601534372/Screenshot_2020-10-01_083922_nqazwg.png">

## bewerkingen in binaire stelsel

## floating points

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 justify-center items-center">
        <h1 className="text-4xl font-serif text-center">Paulinka z Giecza</h1>
        <Image
          className="dark:invert"
          src="/p1.jpg"
          alt="Next.js logo"
          width={180}
          height={180}
          priority
        />

        <audio controls src="/piosenka.mp3"></audio>

        <Image
          src="/p2.jpg"
          alt="Next.js logo"
          width={180}
          height={180}
          priority
        />

      <h1 className="text-2xl">Tekst</h1>
      <p>
      (Refren)
Paulina z Giecza, legenda nie znika,
Księżniczka co życie w rapie przenika.
Z Olusiem, wspinaczem, trzyma się blisko,
Lilianę-Zdzichę nosi pod serduszkiem nisko.
</p><p>
(1. Zwrotka)
Zaczęło się w Gieczu, gdzie Polska powstała,
Paulina tam rządziła, historia nie kłamała.
Ale rzuciła koronę, poszła w nowy vibe,
Dietetyka, miłość – taki ma life!
</p><p>
Mężuś Oluś, wspinacz co się zowie,
Na każdej ścianie radę sobie powie.
Poznali się w kinie, popcorn ich połączył,
A Mati obok – „Ej, to ja też wkraczam w ten związek gorący!”
</p><p>
(Refren)
Paulina z Giecza, legenda nie znika,
Księżniczka co życie w rapie przenika.
Z Olusiem, wspinaczem, trzyma się blisko,
Lilianę-Zdzichę nosi pod serduszkiem nisko.
</p><p>
(2. Zwrotka)
Drużyna Skarbusi – mocny skład za plecami,
W trudnych chwilach zawsze są z nią sami.
Na Maderze razem czillowali,
Ale Porto Santo? No tam się nie popisali.
</p><p>
Felerny lot, lądowanie jak z bajki,
Pilot: „Oops, chyba zgubiłem wajchy!”
Ale Paulina, dama bez tremy,
Zamieniła problem w śmiechu sceny.
</p><p>
(Refren)
Paulina z Giecza, legenda nie znika,
Księżniczka co życie w rapie przenika.
Z Olusiem, wspinaczem, trzyma się blisko,
Lilianę-Zdzichę nosi pod serduszkiem nisko.
</p><p>
(3. Zwrotka)
Mati zawsze w tle, jak cień za plecami,
„Ej, kiedy w końcu pójdzie z innymi kolegami?”
Ale Paulina luz, cieszy się dniem,
„Mati, choćbyś chciał, nie wyprzedzisz mnie!”
</p><p>
Teraz czeka Liliana, Zdzicha zwana,
Już prawie księżniczka, a matka rozśpiewana.
Bo w brzuchu się dzieje, mała macha nogami,
Oluś i drużyna – wszyscy za nią całymi siłami!
</p><p>
(Refren)
Paulina z Giecza, legenda nie znika,
Księżniczka co życie w rapie przenika.
Z Olusiem, wspinaczem, trzyma się blisko,
Lilianę-Zdzichę nosi pod serduszkiem nisko.
</p><p>
(Outro)
Paulina z Giecza, legenda co żyje,
Choć korona spadła, życie się nie kryje.
Z mężem, z drużyną, z przyjaciół wsparciem,
Rap o niej leci – to jest nasze nawiązanie!
</p>
      </main>
    </div>
  );
}

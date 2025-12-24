# Algoritma JavaScript1

## Task 1

```mermaid
flowchart TD
idStart((Start))
idInput[/"Input: jariJari"/]
idKondisi1{"jariJari % 7 == 0"}
idKondisiTrue["phi = 22/7"]
idKondisiFalse["phi = 3.14"]
idLuasLingkaran["luasLingkaran = phi * jariJari * jariJari"]
idKelilingLingkaran["kelilingLingkaran = 2 * phi * jariJari"]
idOutput1[/Output: "Hasil Luas Lingkaran : "+luasLingkaran /]
idOutput2[/Output: "Hasil Keliling Lingkaran : "+kelilingLingkaran /]
idFinish(((Stop)))

idStart --> idInput --> idKondisi1
idKondisi1--True-->idKondisiTrue
idKondisi1--False-->idKondisiFalse
idKondisiTrue --> idLuasLingkaran
idKondisiFalse --> idLuasLingkaran
idLuasLingkaran --> idKelilingLingkaran --> idOutput1 --> idOutput2 --> idFinish
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(function() {
  zeigeStartBild("Begieb dich auf eine Reis zurück ins 14. Jahrhundert und stelle dein Wissen unterbeweis. Wenn du bereit bist drücke auf den Button und das Abenteuer beginnt!","Ich bin bereit.");
});

function start() {
  frage1();
}

function frage1() {
  output("Toll, dass du dich dem Abenteuer stellst!");
  input("Wie heißt du?", antwort1);
  
}
var name;
function antwort1(antwort) {
    name = antwort;
    frage2();
}

function frage2() {
  output("Hallo " + name + "! Stell’ dir vor, wir haben das Jahr 1348 und die Pest fängt gerade an, sich in Europa auszubreiten. Du kommst mit deiner Familie in Europa an, und versuchst deine Liebsten bestmöglich vor einer Infektion zu schützen. Ihr wollt euch hier sesshaft machen, doch es ist noch unklar, wo genau ihr eure neue Heimat wählt.");
  input("Wo würdest du zur Zeit der Pest am liebsten leben? In einer Hafenstadt, einer Handelsstadt, auf einem Schiff oder abgelegen in den Bergen?", antwort2);
}
  
function antwort2(antwort) {
  if (antwort == "Abgelegen in den Bergen") {
    frage3();
  } else if (antwort == "Hafenstadt") {
    frage12();
  } else if (antwort == "Handelsstadt") {
    frage20();
  } else if (antwort == "Schiff") {
      frage13();
  } else {
    clear();
    output("Ich verstehe dich nicht! Gebe bitte eine der drei Optionen ein: Hafenstadt, Handelsstadt, Abgelegen in den Bergen.");
  }  
}

function frage3() {
  output("Abgelegen in den Bergen also? Das war eine kluge Wahl! Solange die Nahrungsmittel nicht ausgingen, war das sicher der Beste Ort, um zu Leben. Umso abgeschotteter der Wohnort, umso schwerer fand die Pest einen Weg dorthin.");
  input("Bist du bereit weiter zu machen?", antwort3);
}
function antwort3(antwort) {
  if (antwort == "Ja") {
    frage4();
  } else if (antwort == "Nein") {
    frage39();
  } else {
    frage();
  }  
}

function frage4() {
  output("Du entscheidest dich, ein Haus in den Bergen, abseits von einem kleinen Dorf als neue Heimat zu wählen. Je abgelegener desto besser, hier wird die Pest hoffentlich nicht herfinden! Um deine Familie erhalten zu können, musst du natürlich auch etwas Geld verdienen, dazu suchst du dir am besten einen passenden Beruf!");
  input("Welchen Beruf würdest du zur Zeit der Pest wählen? Seemann, Totengräber, Geistlicher oder fahrender Händler?", antwort4);
}
function antwort4(antwort) {
  if (antwort == "Totengräber") {
    frage5();
  } else if (antwort == "Seemann") {
    frage13();
  } else if (antwort == "Geistlicher") {
    frage27();
  } else if (antwort == "Fahrender Händler") {
    frage28();
  } else {
    clear();
    output("Ich verstehe dich nicht! Gebe bitte eine der drei Optionen ein: Hafenstadt, Handelsstadt, Abgelegen in den Bergen");
  }  
}



function frage5() {
  output("Totengräber, " + name + "! Das war wahrscheinlich einer der sichersten Berufe der Zeit. Flöhe kamen auf den Verstorbenen nicht mehr vor. Wenn die Körpertemperatur nach dem Tod sinkt, gefällt es auch dem Floh nicht mehr und er sucht sich einen neuen Wirt. Wenn man sich auch von den infizierten Körperflüssigkeiten ferngehalten hat, konnte eigentlich bei der Arbeit nichts passieren. Nach einiger Zeit in deinem Beruf, bekommst du zu hören, dass sich die Pest mittlerweile auch in dem kleinen Dorf, abgelegen in den Bergen, neben deinem Haus ausgebreitet hat. Deine Familie fürchtet sich davor, ebenfalls angesteckt zu werden.");
  input("Wie könntest du dich vor einer Ansteckung der Pest schützen? Maske tragen, Abstand halten, Tiere streicheln, das eigene Gewand nicht wechseln?", antwort5);
}

function antwort5(antwort) {
  if (antwort == "Maske tragen") {
    frage6();
  } else if (antwort == "Abstand halten") {
    frage14();
  } else if (antwort == "Tiere streicheln") {
    frage29();
  } else if (antwort == "Gewand nicht wechseln") {
    frage31();
  } else {
    frage();
  }  
}

function frage6() {
  output("Du entscheidest dich eine Maske zu tragen. Gegen eine Infektion über den Floh, hilft eine Gesichtsmaske leider nicht. Gegen die Tröpfcheninfektion über einen anderen Menschen Hilft sie hingegen schon. Einige Wochen vergehen - Da die Pest mittlerweile die Kontrolle über die Gegend deines Wohnorts übernommen hat, willst du deine Familie darüber aufklären, an welche Orte der Umgebung sie sich begeben dürfen, und welche sie auf jeden Fall vermeiden sollten.");
  input("Welcher Ort ist sicher zur Zeit der Pest? Das Krankenhaus, die Kirche, das Wohnheim oder der Marktplatz?", antwort6);
}

function antwort6(antwort) {
  if (antwort == "Wohnheim") {
    frage7();
  } else if (antwort == "Krankenhaus") {
    frage15();
  } else if (antwort == "Kirche") {
    frage30();
  } else if (antwort == "Marktplatz") {
    frage32();
  } else {
    frage();
  }  
}

function frage7() {
  output("Super! Das eigene Haus war üblicherweise der sicherste Ort, solange man keinen Besuch empfing und niemand in der Familie krank war. Jedoch treffen keine guten Neuigkeiten ein – Trotz des Einhaltens deiner gesetzten Maßnahmen, zeigt eines deiner Familienmitglieder Symptome einer Pesterkrankung.");
  input("Was ist der beste Schritt um weitere Infektionen in deiner Familie zu vermeiden? Das infizierte Familienmitglied zurücklassen oder pflegen, einen Aderlass vornehmen oder solltest du beten?", antwort7);
}

function antwort7(antwort) {
  if (antwort == "zurücklassen") {
    frage8();
  } else if (antwort == "pflegen") {
    frage33();
  } else if (antwort == "Aderlass vornehmen") {
    frage34();
  } else if (antwort == "beten") {
    frage35();
  } else {
    frage();
  }  
}

function frage8() {
  output("Auch wenn es sicher schwerfällt, seine eigenen Familienmitglieder zurückzulassen, ist es die beste Möglichkeit um sich selbst und seine restliche Familie vor weiteren Infektionen zu schützen. Da die Familien auch schon im Mittelalter zusammengehalten haben, wurde diese Maßnahme nicht immer gesetzt und daraufhin war oft die ganze Familie von der Pest befallen. Du scheinst dich ziemlich gut mit der Pest auszukennen. Daher ist es nicht verwunderlich, dass als der örtliche Bischof alleine nicht mehr mit der Lage des Dorfes zurecht kommt, dich um Rat bittet, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern.");
  input("Welche Maßnahmen empfiehlst du dem Bischof? Bußprozessionen, Quarantäne oder das Ausräuchern der Häuser?", antwort8);
}

function antwort8(antwort) {
  if (antwort == "Quarantäne") {
    frage9();
  } else if (antwort == "Bußprozessionen") {
    frage17();
  } else if (antwort == "Außräuchern") {
    frage36();
  } else {
    frage();
  }  
}

function frage9() {
  output("Super! Die Quarantäne ist bis heute die effektivste Möglichkeit, um die Ausbreitung ansteckender Krankheiten einzudämmen. Um sich noch besser von der Pest schützen zu können, schlägt dir ein Bekannter vor, sich ein Haustier zu beschaffen, da Pestbakterien anscheinend Angst vor Tieren haben und diese meiden.");
  input("Welches Haustier wäre zur Zeit der Pest am besten? Einen Hund, eine Katze oder eine Ratte? Oder schlägst du den Ratschlag aus und holst dir Keines?", antwort9);
}

function antwort9(antwort) {
  if (antwort == "Keines") {
    frage10();
  } else if (antwort == "Ratte") {
    frage19();
  } else if (antwort == "Hund") {
    frage37();
  } else if (antwort == "Katze") {
    frage38();
  } else {
    frage();
  }  
}

function frage10() {
  output("Du hörst nicht auf denen Bekannten, schließlich hat während der Pest an den Hafen gezogen. Er scheint dir also nicht so gut informiert zu sein. Sich kein Haustier zu zulegen ist wahrscheinlich die beste Wahl - Ein Flohteppich weniger im Haushalt. Du hast die Pest fast überstanden!");
  input("Bist du bereit für eine allerletzte Frage?", antwort10);
}

function antwort10(antwort) {
  if (antwort == "Ja") {
    frage11();
  } else if (antwort == "Nein") {
    frage39();
  } else {
    frage();
  }  
}


function frage11() {
  output("Obwohl die Pest Menschen aus jeder Altersgruppe befallen hat, zeigten Menschen einer Altersgruppe wesentlich höhere Überlebenschancen als die anderen. Mal sehen, wie hoch deine Überlebenschancen gewesen wären?");
  input("Wie alt bist du?", antwort11);
}

function antwort11(antwort) {
  if (antwort <= 13) {
    output(antwort + "!? Deine Überlebenschancen wären nicht die besten. Das wegen des Alters noch schwache Immunsystem sowie die im Mittelalter übliche Unterernährung von Kindern sind beides Faktoren, die sich negativ auf die Überlebenschance von Kindern ausgewirkt haben");
  } else if (antwort <= 17) {
    output(antwort + "!? Deine Überlebenschancen wären leider nicht optimal. Das wegen des Alters noch schwache Immunsystem sowie die im Mittelalter übliche Unterernährung von Jugendlichen sind beides Faktoren, die sich negativ auf die Überlebenschance von Jugendlichen ausgewirkt haben.");
  } else if (antwort > 17) {
    output(antwort + ". Da hat du noch einmal Clück gehabt. Erwachsene hatten meistens ein stärkeres Immunsystem und bessere Abwehrkräfte als Kinder und Jugendlichen und haben die Pest daher eher überstande.");
  }
}

function frage12() {
  output("Mit einer Wohnung am Hafen hat man einen tollen Meerblick. Jedoch sind sie nicht der beste Wohnort zu Zeit der Pest. Du musst daher ab jetzt besonders auf der Hut sein, um dich nicht anzustecken! Um deine Familie erhalten zu können, musst du natürlich auch etwas Geld verdienen, dazu suchst du dir am besten einen passenden Beruf! Aber Achtung, nur weil deine Wohnung nah am Hafen liegt, solltest du nicht unbedingt einen maritinen Beruf ergreifen.");
  input("Welchen Beruf würdest du zur Zeit der Pest wählen? Seemann, Totengräber, Geistlicher oder fahrender Händler?", antwort4);
}

function frage13() {
  output("Da muss dir wohl etwas engangen sein. Seemann ist keine gute Wahl. Mit vielen anderen Männern unter schlechten Hygienebedingungen auf engem Raum zu leben, sowie unzählige Ratten machen das Arbeiten auf einem Schiff zu einer schlechten Wahl. Man lebte unter Bedingungen die optimal für eine Verbreitung der Pest ware. Nach einiger Zeit, bekommst du auch noch zu hören, dass sich die Pest mittlerweile weiter ausgebreitet hat. Deine Familie fürchtet sich davor, ebenfalls angesteckt zu werden.");
  input("Wie könntest du dich vor einer Ansteckung der Pest schützen? Maske tragen, Abstand halten, Tiere streicheln, das eigene Gewand nicht wechseln?", antwort5);
}

function frage14() {
  output("Sich von anderen Menschen fernhalten, wäre wahrscheinlich die beste Option gewesen,genau! So ging man Flöhen und kranken Personen aus dem Weg. Einige Wochen vergehen - Da die Pest mittlerweile die Kontrolle über die Gegend deines Wohnorts übernommen hat, willst du deine Familie darüber aufklären, an welche Orte der Umgebung sie sich begeben dürfen, und welche sie auf jeden Fall vermeiden sollten.");
  input("Welcher Ort ist sicher zur Zeit der Pest? Das Krankenhaus, die Kirche, das Wohnheim oder der Marktplatz?", antwort6);
}

function frage15() {
  output("Obwohl man sich Krankenhäuser heutzutage als sehr saubere und sichere Orte vorstellt, war die Situation im Mittelalter genau umgekehrt. Viele Infizierte wurden in Krankenhäusern behandelt und durch die schlechten Hygienebedingungen wurden sie zu einem Infektions-Hotspot. Es wäre also keine gute Idee, sich in ein Haus voll Pestkranker zu begeben. Daher ist es kaum verwunderlich, dass eines deiner Familienmitglieder Symptome einer Pesterkrankung zeigt. Was ist der beste Schritt um weitere Infektionen in deiner Familie zu vermeiden?");
  input("Was ist der beste Schritt um weitere Infektionen in deiner Familie zu vermeiden? Das infizierte Familienmitglied zurücklassen oder pflegen, einen Aderlass vornehmen oder solltest du beten?", antwort15);
}

function antwort15(antwort) {
  if (antwort == "zurücklassen") {
    frage8();
  } else if (antwort == "pflegen") {
    frage16();
  } else if (antwort == "Aderlass vornehmen") {
    frage34();
  } else if (antwort == "beten") {
    frage35();
  } else {
    frage();
  }  
}

function frage16() {
  output("Ohje, bald geht deine ganze Familie zu Grunde! Obwohl dies das Pflegen die familienfreundlichste Möglichkeit ist, führt sie hier leider nicht zum Ziel. Im Mittelalter gibt es noch keine guten Behandlungsmöglichkeiten, und es ist wahrscheinlicher, sich selbst mit der Pest anzustecken, als das angesteckte Familienmitglied von der Krankheit zu befreien. Leider bist du nicht der einzige, der nicht weiß, wie man mit der Pest umzugehen hat. Dennoch bittet dich der örtliche Bischof, welcher alleine nicht mit der Lage des Dorfes zurecht kommt, um Rat, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern.");
  input("Welche Maßnahmen empfiehlst du dem Bischof? Bußprozessionen, Quarantäne oder das Ausräuchern der Häuser?", antwort8);
}

function frage17() {
  output("Die damaligen Bischöfe versuchten die Ansteckungen tatsächlich durch Bußprozessionen zu verringern, die großen Menschenmengen, bei denen sie stattfanden, kamen leider nicht zu Vorteil. Da du scheinbar selbst nicht wircklich gut informaiert bist, erkundigst du dich bei einem Bekannten. Um sich noch besser von der Pest schützen zu können, schlägt er dir vor, sich ein Haustier zu beschaffen, da Pestbakterien anscheinend Angst vor Tieren haben und diese meiden. ");
  input("Welches Haustier wäre zur Zeit der Pest am besten? Einen Hund, eine Katze oder eine Ratte? Oder denkst du lieber noch einmal nach und holst dir Keines?", antwort17);
}

function antwort17(antwort) {
  if (antwort == "Keines") {
    frage18();
  } else if (antwort == "Ratte") {
    frage19();
  } else if (antwort == "Hund") {
    frage37();
  } else if (antwort == "Katze") {
    frage38();
  } else {
    frage();
  }  
}

function frage18() {
  output("Da hast du noch einmal die Kurve bekommen! Gut, dass du dir keinen weiteren Flohteppich in den Haushalt geholt hast. Du scheinst dich jedoch irgendwo mit der Pest angsteckt haben. Obwohl die Pest Menschen aus jeder Altersgruppe befallen hat, zeigten Menschen einer Altersgruppe wesentlich höhere Überlebenschancen als die anderen. Mal sehen, wie hoch deine Überlebenschancen gewesen wären?");
  input("Wie alt bist du?", antwort11);
}

function frage19() {
  output("Eine Ratte als Haustier zu nehmen wäre so, als würde man sich die Pest per Post nach Hause bestellen, deshalb lieber nicht! Leider ist es dazu gekommen, dass du dich mit der Pest infiziert hast. Obwohl die Pest Menschen aus jeder Altersgruppe befallen hat, zeigten Menschen einer Altersgruppe wesentlich höhere Überlebenschancen als die anderen. Mal sehen, wie hoch deine Überlebenschancen gewesen wären?");
  input("Wie alt bist du?", antwort11);
}

function frage20() {
  output("Da sich in Handelsstädten viele Menschen aus den verschiedensten Regionen aufhielten, gab es eine hohe Wahrscheinlichkeit, dass die Pest eingeschleppt wurde. Daher ist dies keine gute Wahl. Sei daher ab jetzt besonders vorsichtig! Um deine Familie erhalten zu können, musst du natürlich auch etwas Geld verdienen, dazu suchst du dir am besten einen passenden Beruf!");
  input("Welchen Beruf würdest du zur Zeit der Pest wählen? Seemann, Totengräber, Geistlicher oder fahrender Händler?", antwort20);
}

  function antwort20(antwort) {
    if (antwort == "Totengräber") {
      frage5();
    } else if (antwort == "Seemann") {
      frage13();
    } else if (antwort == "Geistlicher") {
      frage21();
    } else if (antwort == "Fahrender Händler") {
      frage28();
    } else {
      clear();
      output("Ich verstehe dich nicht! Gebe bitte eine der drei Optionen ein: Hafenstadt, Handelsstadt, Abgelegen in den Bergen");
    }  
  }

  function frage21() {
    output("Es schein, als hättest du nicht nur bei deinem Wohnort eine falsche Entscheidung getroffen. Geistliche hatten während der Zeit der Pest keine angenehme Arbeit. Menschenversammlungen in der Kirche waren Gang und Gebe. Kranken Menschen die Sterbesakramente zu geben stellte ebenfalls eine erhöhte Infektionsgefahr da. Nach einiger Zeit in deinem Beruf, bekommst du zu hören, dass sich die Pest mittlerweile auch in dem kleinen Dorf neben deinem Haus ausgebreitet hat. Deine Familie fürchtet sich davor, ebenfalls angesteckt zu werden.");
    input("Wie könntest du dich vor einer Ansteckung der Pest schützen? Maske tragen, Abstand halten, Tiere streicheln, das eigene Gewand nicht wechseln?", antwort21);
  }

  function antwort21(antwort) {
    if (antwort == "Maske tragen") {
      frage22();
    } else if (antwort == "Abstand halten") {
      frage();
    } else if (antwort == "Tiere streicheln") {
      frage();
    } else if (antwort == "Gewand nicht wechseln") {
      frage();
    } else {
      frage();
    }  
  }
  
  function frage22() {
    output("Du entscheidest dich eine Maske zu tragen. Gegen eine Infektion über den Floh, hilft eine Gesichtsmaske leider nicht. Gegen die Tröpfcheninfektion über einen anderen Menschen Hilft sie hingegen schon. Einige Wochen vergehen - Da die Pest mittlerweile die Kontrolle über die Gegend deines Wohnorts übernommen hat, willst du deine Familie darüber aufklären, an welche Orte der Umgebung sie sich begeben dürfen, und welche sie auf jeden Fall vermeiden sollten.");
    input("Welcher Ort ist sicher zur Zeit der Pest? Das Krankenhaus, die Kirche, das Wohnheim oder der Marktplatz?", antwort22);
  }
  
  function antwort22(antwort) {
    if (antwort == "Wohnheim") {
      frage23();
    } else if (antwort == "Krankenhaus") {
      frage();
    } else if (antwort == "Kirche") {
      frage40();
    } else if (antwort == "Marktplatz") {
      frage();
    } else {
      frage();
    }  
  }

  function frage23() {
    output("Super! Das eigene Haus war üblicherweise der sicherste Ort, solange man keinen Besuch empfing und niemand in der Familie krank war. Jedoch treffen keine guten Neuigkeiten ein – Trotz des Einhaltens deiner gesetzten Maßnahmen, zeigt eines deiner Familienmitglieder Symptome einer Pesterkrankung.");
    input("Was ist der beste Schritt um weitere Infektionen in deiner Familie zu vermeiden? Das infizierte Familienmitglied zurücklassen oder pflegen, einen Aderlass vornehmen oder solltest du beten?", antwort23);
  }
  
  function antwort23(antwort) {
    if (antwort == "zurücklassen") {
      frage24();
    } else if (antwort == "pflegen") {
      frage();
    } else if (antwort == "Aderlass vornehmen") {
      frage34();
    } else if (antwort == "beten") {
      frage();
    } else {
      frage();
    }  
  }

  function frage24() {
    output("Auch wenn es sicher schwerfällt, seine eigenen Familienmitglieder zurückzulassen, ist es die beste Möglichkeit um sich selbst und seine restliche Familie vor weiteren Infektionen zu schützen. Da die Familien auch schon im Mittelalter zusammengehalten haben, wurde diese Maßnahme nicht immer gesetzt und daraufhin war oft die ganze Familie von der Pest befallen. Du scheinst dich inzwischen ziemlich gut mit der Pest auszukennen. Daher ist es nicht verwunderlich, dass dich die Menschen deines Dorfes um Rat bitten, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern.");
    input("Welche Maßnahmen empfiehlst du den Bewohnern? Bußprozessionen, Quarantäne oder das Ausräuchern der Häuser?", antwort24);
  }
  
  function antwort24(antwort) {
    if (antwort == "Quarantäne") {
      frage9();
    } else if (antwort == "Bußprozessionen") {
      frage25();
    } else if (antwort == "Außräuchern") {
      frage();
    } else {
      frage();
    }  
  }

  function frage25() {
    output("Die damaligen Bischöfe versuchten die Ansteckungen tatsächlich durch Bußprozessionen zu verringern, die großen Menschenmengen, bei denen sie stattfanden, kamen leider nicht zu Vorteil. Daher ist es kaum verwunderlich, dass du als Geistlicher auch diesen Weg wählen würdest. Um sich noch besser von der Pest schützen zu können, schlägt dir ein Bekannter vor, sich ein Haustier zu beschaffen, da Pestbakterien anscheinend Angst vor Tieren haben und diese meiden. ");
    input("Welches Haustier wäre zur Zeit der Pest am besten? Einen Hund, eine Katze oder eine Ratte? Oder denkst du lieber noch einmal nach und holst dir Keines?", antwort25);
  }
  
  function antwort25(antwort) {
    if (antwort == "Keines") {
      frage18();
    } else if (antwort == "Ratte") {
      frage19();
    } else if (antwort == "Hund") {
      frage37();
    } else if (antwort == "Katze") {
      frage38();
    } else {
      frage();
    }  
  }

  function frage26() {
    output("Leider konnte man der Pest damals auch nicht entkommen. Gib nicht auf! Du entscheidest dich, ein Haus in den Bergen, abseits von einem kleinen Dorf als neue Heimat zu wählen. Je abgelegener desto besser, hier wird die Pest hoffentlich nicht herfinden! Um deine Familie erhalten zu können, musst du natürlich auch etwas Geld verdienen, dazu suchst du dir am besten einen passenden Beruf!");
    input("Welchen Beruf würdest du zur Zeit der Pest wählen? Seemann, Totengräber, Geistlicher oder fahrender Händler?", antwort26);
  }

  function antwort26(antwort) {
    if (antwort == "Totengräber") {
      frage5();
    } else if (antwort == "Seemann") {
      frage13();
    } else if (antwort == "Geistlicher") {
      frage27();
    } else if (antwort == "Fahrender Händler") {
      frage();
    } else {
      clear();
      output("Ich verstehe dich nicht! Gebe bitte eine der drei Optionen ein: Hafenstadt, Handelsstadt, Abgelegen in den Bergen");
    }  
  }

  function frage27() {
    output("Geistliche hatten während der Zeit der Pest keine angenehme Arbeit. Menschenversammlungen in der Kirche waren Gang und Gebe. Kranken Menschen die Sterbesakramente zu geben stellte ebenfalls eine erhöhte Infektionsgefahr da. Sei daher auf der Hut, um dich nicht zu infizieren! Nach einiger Zeit in deinem Beruf, bekommst du zu hören, dass sich die Pest mittlerweile auch in dem kleinen Dorf neben deinem Haus ausgebreitet hat. Deine Familie fürchtet sich davor, ebenfalls angesteckt zu werden.");
    input("Wie könntest du dich vor einer Ansteckung der Pest schützen? Maske tragen, Abstand halten, Tiere streicheln, das eigene Gewand nicht wechseln?", antwort21);
  }

  function frage28() {
    output("Fahrender Händler, " + name + "! Als Händler nicht an einen Ort gebunden zu sein, war sicher gut. Ob viele Händler überlebt haben, ist nicht bekannt. Nach einiger Zeit in deinem Beruf, bekommst du zu hören, dass sich die Pest mittlerweile auch in dem kleinen Dorf, abgelegen in den Bergen, neben deinem Haus ausgebreitet hat. Deine Familie fürchtet sich davor, ebenfalls angesteckt zu werden.");
    input("Wie könntest du dich vor einer Ansteckung der Pest schützen? Maske tragen, Abstand halten, Tiere streicheln, das eigene Gewand nicht wechseln?", antwort5);
  }

  function frage29() {
    output("Während der Pest sollte man sich auch vom süßesten Kätzchen fernhalten. Die Pestflöhe kamen zwar von den Ratten, konnten aber auch auf andere Lebewesen überspringen. Einige Wochen vergehen und du hast hoffentlich aus deinen Fehlern gelernt - Da die Pest mittlerweile die Kontrolle über die Gegend deines Wohnorts übernommen hat, willst du deine Familie darüber aufklären, an welche Orte der Umgebung sie sich begeben dürfen, und welche sie auf jeden Fall vermeiden sollten.");
    input("Welcher Ort ist sicher zur Zeit der Pest? Das Krankenhaus, die Kirche, das Wohnheim oder der Marktplatz?", antwort6);
  }
  
  function frage30() {
    output("Die Kirche ist kein guter Ort sich während der Pestpandemie aufzuhalten, " + name + ". Das Risiko, das einer der anderen Kirchgänger die Pest hat und ansteckend ist, ist viel zu hoch. Generell gilt: Menschenmassen sollten bestmöglich gemieden werden. Du versuchst daher in Zukunft solche Orte zu meiden. Jedoch gibt es dennoch keine guten Neuigkeiten – Trotz des Einhaltens deiner gesetzten Maßnahmen, zeigt eines deiner Familienmitglieder Symptome einer Pesterkrankung.");
    input("Was ist der beste Schritt um weitere Infektionen in deiner Familie zu vermeiden? Das infizierte Familienmitglied zurücklassen oder pflegen, einen Aderlass vornehmen oder solltest du beten?", antwort7);
  }
  
  function frage31() {
    output("Das eigene Gewand nicht zu wechseln, wäre eine fatale Entscheidung. Dann seid ihr ein Vergnügungspark für Flöhe. Und für die Pest. Einige Wochen vergehen und du hast hoffentlich aus deinen Fehlern gelernt - Da die Pest mittlerweile die Kontrolle über die Gegend deines Wohnorts übernommen hat, willst du deine Familie darüber aufklären, an welche Orte der Umgebung sie sich begeben dürfen, und welche sie auf jeden Fall vermeiden sollten.");
    input("Welcher Ort ist sicher zur Zeit der Pest? Das Krankenhaus, die Kirche, das Wohnheim oder der Marktplatz?", antwort6);
  }

  function frage32() {
    output("Der Marktplatz ist so wie alle anderen öffentlichen Plätze kein guter Ort, um sich währen der Pestpandemie aufzuhalten. Es besteht ein hohes Risiko, dass man von einem Passanten mit der Pest angesteckt wird. Du versuchst daher in Zukunft solche Orte zu meiden. Jedoch gibt es dennoch keine guten Neuigkeiten – Trotz des Einhaltens deiner gesetzten Maßnahmen, zeigt eines deiner Familienmitglieder Symptome einer Pesterkrankung.");
    input("Was ist der beste Schritt um weitere Infektionen in deiner Familie zu vermeiden? Das infizierte Familienmitglied zurücklassen oder pflegen, einen Aderlass vornehmen oder solltest du beten?", antwort7)
  }

  function frage33() {
    output("Obwohl dies wohl die familienfreundlichste Möglichkeit ist, führt sie hier leider nicht zum Ziel. Im Mittelalter gibt es noch keine guten Behandlungsmöglichkeiten, und es ist wahrscheinlicher, sich selbst mit der Pest anzustecken, als das angesteckte Familienmitglied von der Krankheit zu befreien. Du scheinst dich inzwischen ziemlich gut mit der Pest auszukennen. Daher ist es nicht verwunderlich, dass als der örtliche Bischof alleine nicht mehr mit der Lage des Dorfes zurecht kommt, dich um Rat bittet, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern.");
    input("Welche Maßnahmen empfiehlst du dem Bischof? Bußprozessionen, Quarantäne oder das Ausräuchern der Häuser?", antwort8);
  }

    function frage34() {
      output("Der Aderlass ist eine Behandlungsmethode, die während der Pestpandemie oft von Medizinern vorgenommen wurde. Heute weiß man, dass dies dem Erkrankten mehr geschadet als geholfen hat, deswegen ist davon definitiv abzurate! Du scheinst dich noch nicht gut genug mit der Pest auszukennen. Du scheinst jedoch eine der wenigen Personen im Dorf zu sein, denen es noch gut geht. Der örtliche Bischof kommt alleine nicht mit der Lage des Dorfes zurecht und bittet dich deshalb um Rat, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern.");
      input("Welche Maßnahmen empfiehlst du dem Bischof? Bußprozessionen, Quarantäne oder das Ausräuchern der Häuser?", antwort8);
    }

    function frage35() {
      output("Viele hielten damals den Ausbruch der Pest für eine Strafe Gottes. Auch wenn die Krankheit dadurch nicht gelindert wurde, wendeten sich die Menschen in Zeiten der Not an den Gott. Da der Wissensstand über Infektionskrankheiten im Mittelalter noch sehr gering war, hat den Glauben der Bevölkerung an das Übersinnliche noch weiter verstärkt. Der örtliche Bischof kommt alleine nicht mit der Lage des Dorfes zurecht und bittet dich deshalb um Rat, welche Maßnahmen vorzunehmen sind, um die weitere Ausbreitung der Pest im Dorf möglichst zu verhindern.");
      input("Welche Maßnahmen empfiehlst du dem Bischof? Bußprozessionen, Quarantäne oder das Ausräuchern der Häuser?", antwort8);
    }

    function frage36() {
      output("Das Ausräuchern von Häusern war eine Methode, die im Mittelalter oft praktiziert wurde. Ob sie tatsächlich etwas gebracht hat, ist nicht bekannt. Da du scheinbar selbst nicht wircklich gut informaiert bist, erkundigst du dich bei einem Bekannten. Um sich noch besser von der Pest schützen zu können, schlägt er dir vor, sich ein Haustier zu beschaffen, da Pestbakterien anscheinend Angst vor Tieren haben und diese meiden. ");
      input("Welches Haustier wäre zur Zeit der Pest am besten? Einen Hund, eine Katze oder eine Ratte? Oder denkst du lieber noch einmal nach und holst dir Keines?", antwort17);
    }

    function frage37() {
      output("Hunde fangen leicht pestbefallene Flöhe auf, die widerum Menschen anstecken können. Keine gute Idee. Bleib weiterhin achtsam! Du hast die Pest fast überstanden!");
      input("Bist du bereit für eine allerletzte Frage?", antwort10);
    }

    function frage38() {
      output("Katzen können zwar mit Flöhen befallene Ratten fangen, sie können aber auch selber Flöhe haben. Deshalb sollte man sich lieber keine Katze als Haustier nehmen. Bleib weiterhin achtsam! Du hast die Pest fast überstanden!");
      input("Bist du bereit für eine allerletzte Frage?", antwort10);
    }

    function frage39() {
      output("Leider konnte man der Pest damals auch nicht entkommen. Bleib weiterhin achtsam! Du hast die Pest fast überstanden!");
      input("Bist du bereit für eine allerletzte Frage?", antwort10);
    }

    function frage40() {
      output("Auch wenn du dich für den Beruf des Geistlichen entschieden hast, ist die Kirche kein guter Ort sich während der Pestpandemie aufzuhalten, " + name + ". Das Risiko, das einer der anderen Kirchgänger die Pest hat und ansteckend ist, ist viel zu hoch. Generell gilt: Menschenmassen sollten bestmöglich gemieden werden. Du versuchst daher in Zukunft solche Orte zu meiden. Jedoch gibt es dennoch keine guten Neuigkeiten – Trotz des Einhaltens deiner gesetzten Maßnahmen, zeigt eines deiner Familienmitglieder Symptome einer Pesterkrankung.");
      input("Was ist der beste Schritt um weitere Infektionen in deiner Familie zu vermeiden? Das infizierte Familienmitglied zurücklassen oder pflegen, einen Aderlass vornehmen oder solltest du beten?", antwort7);
    }

/*

function frage7() {
  clear();
  output("Wenn du es nicht gehört hast, dann ist das besser so für dich. Wo kommst du eigentlich her?");
  input("Wo kommst du her?", antwort7);
} */



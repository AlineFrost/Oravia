# Dictionary

This dictionary lists Oravia's 780 native words and thousands of expressions built from them.

<details markdown="1">
<summary><strong>How to use the dictionary</strong></summary>

**Two kinds of entries**

- *Native words* are single words with their own meaning, like *vidur* (bone) or *bortal* (door).
- *Suggested expressions* make up most of the entries, and it shows how to say a wide range of things with native words.

**Reading a native word**

The same word can work as a noun, verb, adjective or adverb, so a single entry may cover different usages. Entries may also show:

- the *cluster*: the first sounds, which tell you the topic (e.g., words starting with *mo* are about food and eating). This is indicated by the colorful bubble on the top side.
- the *structure*: (sub)cluster + root, e.g. *vidur* = *vi* (internal body) + *dur* (hardness). You may click on the syllables to see their entry in the building blocks page.
- an *example sentence*
- *related words* that share the same root

**Reading an expression**

- *An -s joins words into one concept.* Remove it to find each word: *vavaris vidur* (spine) = *vavari* (back) + *vidur* (bone). 
- *A hyphen* lets the first word color the second, usually an abstraction or verb: *ilofun-vardei* (to peek) = hesitant + see.
- *' marks an imported word*, like *'Italia* or *'pizza*. Animals and plants may also use their scientific name.
- *Semicolons separate options*. Notice also that the same English word may have multiple meanings. 

**If you can't find a word**

- *Try removing the endings.* -ar (completed), -is (not yet started) and -um (not) attach to words.
- *Look up each part* of an expression separately.

</details>
---

<!-- Mobile dictionary search fix -->
<style>
@media (max-width: 640px) {
  #oravia-dictionary .dict-controls {
    display: block;
    width: 100%;
  }

  #oravia-dictionary .dict-search-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 0.5rem;
    width: 100%;
    min-width: 0;
  }

  #oravia-dictionary #dict-mode {
    width: min(100%, 15rem);
    min-width: 0;
  }

  #oravia-dictionary #dict-search {
    display: block;
    width: 100%;
    min-width: 0;
    max-width: 100%;
    box-sizing: border-box;
    font-size: 16px;
  }

  #oravia-dictionary .dict-filter-row {
    margin-top: 0.5rem;
    flex-wrap: wrap;
  }
}
</style>

<div id="oravia-dictionary">Loading dictionary…</div>

<script src="/js/dictionary.js"></script>

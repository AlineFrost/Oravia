# Vocabulary system

Many people have been asking how Oravia differs from previous attempts at oligosynthetic or taxonomic languages.


## Important differences of Oravia's vocabulary with other approaches

- **Previous languages** trying a sound-syllable associations (or olygossyntatic) were generally interested in reflecting some kind of organizational or taxonomic truth. Oravia is no such thing, instead these associations are meant for mnemonics, to help people learn, deduce, and remember words (and many other advantages I talk about below).

- **These other approaches** were based on a creator's own intuitions of what things go together or how to combine meanings to form words. This resulted in rather arbitrary combinations or clusters. Oravia on the other hand has a unique empirical approach; I did not make up the clusters, rather, they were discovered through word embeddings.

- **These other approaches** had words that were too similar. For example, bofo- = colors, then bofoc = red and bofof = yellow. this is a big issue: words were confusable in memory and they were hard to distinguish in speech. Oravia on the other hand has words that may share the first syllable but are otherwise quite distinct from each other and avoid being one sound change away, as well as avoiding confusable pairs like l/r, m/n, etc.

## Furthermore

**1)** The closest analogy to Oravia's vocabulary is compounds in English (like "housework", "houseplant"), because they share first syllable and are composed of meaningful units. The research on perception of compounds is supportive that people process the units as meaningful and it does not make it more confusable.

**2)** Oravia was built with flexibility in mind, you can move the components around, you can change word clusters, you can create new words. First one learn the structure of the language, then they can play with it. I think this point is underappreciated because I think constructed languages should be expressive and fun, and there is so much you can do with Oravia (that you cannot do in any other language) to think and express yourself in ways you never knew possible, to use different styles, personalizations and creativity.

**3)** In line with English compounds as above, words are not arbitrary sounds. The syllables have meanings, and once you associate the meanings, it's not as easy to confuse.

**4)** It comes with a lot of other advantages, like:

  - **a)** With just knowing the 48 noun classes/clusters, you may be able to have a gist of what is going on.

  - **b)** It helps when you want to go up an abstraction level, or you forgot how to say something (maybe you just remember an associated word, maybe you just remember the beginning of the word, maybe you just remember how to say the category. In every one of these cases, you'd know the subcluster and can communicate).

  - **c)** It makes learning vocabulary more interesting.

  - **d)** With time, learning new words gets easier and easier.

  - **e)** It allows for less words to be memorized because for example the word "dog" has "animal" in it, it's not a separate word.

  - **f)** You don't need separate words to create register, you can use the same word components to vary formality.

  - **g)** You can essentially learn a lot of the vocabulary just by knowing the 259 building blocks.

  - **h)** It's much easier to scan a text for information or to parse sentences. For example, a li word is telling you when something happened, a no word is a function word like already, almost, and so on.

**5)** The syllables in large part have a natural language analog that further reinforces learning and memory. For example, *vi* means internal body and the language analog is Latin *viscera*.

**In sum**, Oravia's vocabulary approach is quite different from these other languages, it avoids issues present in previous attempts and it has many other advantages.


---

# Vocabulary size

How much can Oravia's small vocabulary of 800 words do?

## Estimating expressive range with Esperanto

I compared Oravia's vocabulary with scraping of more than 80,000 messages in Esperanto's telegram. I believe this dataset is ideal for many reasons, including a) Esperanto has less synonyms and redundancy than English, b) messages cover naturalistic expression, and c) it's really large and representative.

It turns out that Oravia's 800 words covers Esperanto's 2000 most used words (note: words here mean word families, same for English and French). To have an idea, in more than 80,000 messages, these 2000 words covered things that was mentioned more than ~10 times. So the ratio of Oravia and Esperanto is about 1:2.5. Let's give it 1:2 to be conservative.
 
Importantly, this difference in number of words to achieve similar coverage is not because Oravia has many broad words that cover lots of meanings vaguely. It's because Oravia has more flexibility regarding word role. That is, the same word with a different marker covers multiple words in Esperanto, while being nonetheless made clear by the marker. For example, eye and to look are the same word in Oravia (e.g., a vardei and i vardei), but two words in Esperanto.

Another note on comparing Oravia and Esperanto. Esperanto has a very productive system of 41 affixes that creates new meanings. For example, Esperanto can create a word like malsanulejo (hospital) by using the root "sanu" (healthy), and attaching -ejo (place), -ul (sick), and -mal (opposite). Oravia has a different approach, this same word would be built like vel (medical treatments) + dom (location), creation veldom. So instead of memorizing thousands of roots plus affixes you can attach to them, you get the few hundred building blocks that you can attach and recombine with almost unlimited freedom. 

## Estimating expressive range with English and CEFR levels

Continuing this line, let's compare Esperanto coverage with English. Esperanto has more regularity, productivity and less synonyms than English. For that reason, it's capable of the same expressive range with less words. Existing estimates had Esperanto to English ratio is 1:4 (), 1:2.3 with French (based on Reta Vortaro). I think the 1:4 estimate is likely to be an overestimate, so let's play conservative here and use 1:2.

So 800 Oravia words may be about equivalent to 2000 Esperanto words, and about equivalent to 4000 English words. This is about a B2 level of English (upper intermediate: complex texts, interaction fluency, clear and detailed writing, university admissions). This matches my experience translating texts to Oravia, as B2 level argumentation and expression can be done comfortably. 

Notice that this is before considering all the possibilities of Oravia in creating new meanings through recombination and compounds. Oravia can do a range of C level texts as well (academic-level argumentation) by using more word combinations and compounds. When you take this into consideration, one can express almost anything with the 800 carefully chosen words.

## The limitations

When it comes to more technical texts like a scientific paper on chemistry, Oravia's 800 words would struggle without heavy compounding. Three considerations are needed to calibrate this estimate. First, this is true of other auxlangs as well, even the ones with thousands of words. I would trust Esperanto on a technical paper, and not many others. Second, this is true of most natural languages as well. A big chunk of natural languages does not have words to express the kind of technical vocabulary used in scientific papers without importing. Third, Oravia's vocabulary can expand to cover it.

To address technical writing, I have an idea of releasing bonus packs of technical vocabulary. I will, however, wait on beta tester feedback first before proceeding with this (and no one is writing a chemistry scientific paper in Oravia any time soon!). The idea is to scrape technical writing (e.g., Esperanto Wikipedia and scientific journals) to investigate specialized vocabulary usage. Then, cluster these words, and add them as bonus packs. For example, 40 fields with about 30 words each. Might look something like this: Statistics: sample, standard deviation, median... Politics: parliament, libertarianism, federalism... Chemistry: bond, covalent, organic,... Neuroscience: cortex, fmri, synapse... And so on. Then, people learn the 800 core words, plus any extra packs depending on their own interests and what kind of technical writing they want to do, for a total of maybe 1000 words per person.

To sum up, if you want to write a scientific paper in Oravia without overusing compounds, this would be best done after the technical vocabulary packs. But for everything else, Oravia's small vocabulary of 800 words provide great range, precision and expression. It is ready to be used in everyday communication, media, literature, and much more. 



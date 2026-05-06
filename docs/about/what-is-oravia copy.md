# What is Oravia?

Oravia is a constructed language that aims to be flexible, easy, and empirically informed. The vocabulary is built around semantic clusters and sound-meaning patterns based on how people associate concepts.

---

## Semantic Clusters

The words in Oravia are organized into clusters. Clusters are groups of words that are associated together, and share the same initial sounds. This means that the whole vocabulary is organized based on sound-meaning associations.

**I did not make up the clusters**. This structure emerged from semantic similarity between words based on how people actually use them. More specifically, I used word embeddings on billions of uses throughout the internet. That's one of the reasons I say Oravia's approach is empirical. Instead of creating the structure myself based on my own intuition of how words go together, I went out there to collect widespread word associations in large language data. 
    
Let's see how it works. For example, take the word 'horse'. It is more specific than the word 'animal'. However, 'horse' and 'animal' are two different English words that you need to memorize. In Oravia, it's easier: the word 'horse' already has the sound 'animal' in it.
    
But it's not only that. One of the cool things about the clusters is that even if you only know the 48 groups, you may be able to have a grasp of what's going on.
    
For example, take a look at this sentence (let's focus on vocabulary and not grammar for now):
        
```
Miogar i tiva e fano
```
        
You have no idea what these words mean. But if you know that:
        
- **mi** is used for larger animals
- **ti** is used for doing bad things to someone
- **fa** is used for family members
        
You can see that:
        
```
Mi     i  ti   e  fa
↓         ↓        ↓
a large   harmed  a family
animal            member
```
    
Many clusters are further subdivided into 0-3 subclusters, which are indicated by the next letter. Subclusters are also super useful when you are communicating with people and forgot words. 
    
Let's suppose you want to say you went to shop for a bed, but you forgot how to say it. Maybe you just remember an associated word, like another piece of furniture. Maybe you just remember the beginning of the word "bed". Maybe you just remember how to say furniture. 
    
**In every one of these cases, you'd know the subcluster for furniture-related words is bon.** And if you just say bon, the meaning will be less specific, but you will probably be able to communicate. 
    
Or if you wanted to say you are feeling upset, but you forgot the word. You could say instead tos, and people will know you are talking about emotional suffering. And so on.
    
There are other little surprises in the vocabulary, but we will not cover everything here. I hope it makes learning more interesting!   

Clusters have many advantages. They create a structure for the language. They make words **easier to learn and remember** than arbitrary sounds. They create sound-meaning associations that become intuitive overtime. They make it natural to play around with words and personalize meanings. As you learn the vocabulary, these semantic associations become intuitive.   

---

## A Note on Methods

I used [word embeddings](https://en.wikipedia.org/wiki/Word_embedding) to cluster words based on semantic associations. The word embeddings came from tokens trained on internet data on billions of uses. These associations are not universal or free of limitations (they depend on who uses the internet, etc), but they are more widely shared than just using my own intuitions of what goes together. Based on this large language data that it was determined, for example, that “bear” is closely related to “dog”, and thus they are in the same cluster (mi). And, the word “snake” goes closer to “rodent” and not with “dog” and “bear”, so I created another cluster for animals like “snake” and “rodent” (mu). I created the names for the clusters (e.g., bigger animals and smaller animals), so you may have another interpretation of what they are about.

I used a variety of both natural and constructed languages as inspiration. For example, the idea of semantic clusters come from grammatical gender in languages like Swahili; the markers were inspired by particles in languages like Japanese; and the verb system was inspired by aspect in languages like Yucatec Maya. The prepositions are a tribute to Mini-Linga, and the numbers are a tribute to Kotava.

---


## Why Oravia? How is it different from other constructed languages?

This is not the first language I've created, but it's the first I am sharing. That's because I genuinely believe Oravia has something to offer.

### The Number of Words Trade-off
- languages with a normal vocabulary size of thousands of words take a long time to learn
- languages with very few words may end up with vague communication and long word strings to express simple concepts

**Oravia's approach:**
A vocabulary that is larger than the minimalistic approach to allow more specificity and nuance, and expression of most concepts with only 1-2 words. At the same time, with about 800 words it is still one of the smallest languages. 

Importantly, these words don't add as much cognitive load because of the syllable-meaning associations and the cluster semantic structure. Once you get a gist of the language, they are much easier and faster to learn than arbitrary sounds. That way, we get the benefit of having a larger vocabulary than minimalistic languages, with less load than the (already small) raw number may suggest.

*Example*
```
 be       i       wa   = boat  
  ↓       ↓       ↓ 
travel  vehicle  water

  m           i         o    tan = elephant  
  ↓           ↓         ↓     ↓
biology  large animal  wild  big 

  l          u       n    hem = summer  
  ↓          ↓       ↓     ↓
nature  climate  seasons  heat
```

*You learn the full words and over time, the sound-meaning associations become intuitive*


---

### The a Priori / a Posteriori Trade-off
- languages based on existing roots may benefit from learners recognizing some words, but they may be less accessible to learners from other backgrounds
- languages that use roots from multiple families end up with few recognizable words. This is because they take a small percentage from each single family, plus roots may be changed beyond recognition to fit the sound system 
- languages with completely made up words (a priori) may be more neutral, but they take longer to learn

**Oravia's approach:**
Oravia was first constructed a priori, which is more fair. At the same time, words are not arbitrary sounds: the syllable-meaning associations, the cluster semantic structure, and the small vocabulary facilitate learning.  
Oravia also has a posteriori characteristics: the word components were mapped into existing natural languages. For example, the root yun in Oravia is mist, which maps into Mandarin 云 yún (cloud, mist). These associations incorporate the advantages of learning etymology to mnemonics and memorization.

*Example*
```
M  → related to biology
   MO  → eating & drinking 
     MOA → fruits (apple, banana)
     MOU → drinks (drink, milk)
     MOL → food containers (cup, bowl)
   MA  → cooking & prepared food
     MAE → grains and tubers (corn, soy)
     MAL → bread & dairy (flour, cheese)
     MAS → seasoning (onion, pepper)
   MI  → larger animals
     MI (base) → domestic (chicken, dog)
     MIO → wild (elephant, bear)
   MU  → smaller animals
     MU (base) → land or water (insect, mouse)
     MUH → flying (bird, butterfly)
```

*I did not make up the semantic structure. 
Instead, it was an empirical approach based on how concepts are associated in large language data.*


---

### The Eurocentric Trade-off
- languages that base themselves on European vocabulary and grammar are easier to learn for a big chunk of the world population
- at the same time, they may be less accessible to learners from other backgrounds and that may shape what the language can do and express based on a Eurocentric standard

**Oravia's approach:**

A grammar that draws from different systems and can adapt to multiple native languages. A design that is simple, efficient and easy to learn across the board, created from the Global South and tested by people from diverse L1 backgrounds.

---

### The Intuition Trade-off
- creators' intuitions make languages unique, but may be misguided about what features are easy or work well

**Oravia's approach:**

Empirical approach: design based on research of how people learn and what makes languages easier. Sounds organized by semantic cluster based on word-embeddings trained on billions of internet tokens of how people associate concepts. Data from beta testers on what works and what doesn't. 

---

### The Phonology Trade-off
- standard sound systems ensure consistent pronunciation, but can make sounds hard to articulate or differentiate depending on speaker background  

**Oravia's approach:**

Words do not rely on easily confused sounds such as m/n, l/r, p/b for differentiation. Plus, this means that if a native language does not have one of the sounds (e.g., "l"), one can pronounce it as the other (e.g., "r") with no issues. Furthermore, the sound system allows other adaptations based on native language such as inserting a vowel after final consonants (e.g., morta or morita).

Words are composed from meaningful building blocks, and similar sounds often have similar meanings, reducing communicative confusion. Finally, choices were based on common cross-linguistic associations between sound and meaning.

*Example*
```
Can you guess which word means 'to cut' and which word means 'to slip'?  
(c is pronounced as cake)
 jasrec, jasel
 
Which word means 'pool' and which word means 'beak'?
  mutec, bouwa
```

---

### The Word Order Trade-off
- languages are designed with mandatory word order (usually SVO) that prioritizes speakers of certain backgrounds
- languages without a fixed word order often resort to complicated alternatives or end up with unclear syntax 

**Oravia's approach:**

Markers indicate the syntax role of each part of the sentence, so pieces can be moved around. This means that speakers can use whichever word order feels more natural to them (SOV, SVO, etc) and the sentence is just as clear. 

*Example*
```
a [subject] i [verb] e [direct complement] u [indirect complement]

a nim i anona e mocen u run

i anona a nim e mocen u run

e mocen i anona u run a nim

...

```

---

### The Regularity / Naturalness Trade-off
- many languages are designed to be easy and regular. As a consequence, they can frequently feel more rigid and lack personalization options

**Oravia's approach:**

The flexible grammar and cluster system intuitively make space for stylistic choices and rich expression. Furthermore, features embedded in the language (such as word decomposition, changing word cluster, register) make personalization and creativity natural. 

*Example*
```
boegor means to build

You can change the word to create different flavors of to build:
omgor = emphasizes the sound of building
angor = emphasizes the act itself
togor = emphasizes the physical exertion
ceigor = emphasizes the creativity involved
...
```

---

## The Philosophy

**Flexible** — Simple grammar that adapts to speakers  
**Empirical** — Design choices informed by data  
**International** — From the Global South, with a priori words and testing across L1 backgrounds  
**Easy** —  Words organized within a semantic structure  
**Clear** — Minimal forms with optional precision

---


## Why Learn Oravia?

It's free  
It's fun!  
Much easier to learn than natural languages  
May help you learn other languages afterwards  
Great exercise for memory, pattern recognition and cognitive flexibility  
Lets you think and express yourself in new ways  
Have a secret language among friends, couples or family members  
Be part of the constructed languages community  
Explore the interesting design ideas that go into creating a language   

And have I mentioned *it's fun?* :)

---

[Start Learning →](../course/lesson00.md){ .md-button .md-button--primary }
[Read Core Grammar →](core-grammar.md){ .md-button }
[Get Involved →](get-involved.md){ .md-button }
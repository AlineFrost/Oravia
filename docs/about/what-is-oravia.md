# What is Oravia?

Oravia is a constructed language that aims to be flexible, easy, and empirically informed. It has a core vocabulary of established words, organized into semantic clusters based on how people associate concepts. Roots also connect words across different clusters. You use the words directly, while the connections between them help you learn and remember them. The grammar is simple and flexible, with ways to add detail when you need it.

---

## How Oravia Organizes Its Vocabulary

The words in Oravia are organized into clusters. Clusters are groups of words that are associated together, and share the same initial sounds. This means that the whole vocabulary is organized based on sound-meaning associations.

**The clusters come from data**. This structure emerged from semantic similarity between words based on how people actually use them. More specifically, I used word embeddings on billions of uses throughout the internet. That's one of the reasons Oravia's approach is empirical: rather than relying on my own intuition of how words go together, I collected widespread word associations in large language data. 
    
Let's see how it works. Take the word 'horse'. In English, 'horse' and 'animal' don't share anything in their sounds. In Oravia, the word for horse starts with the same sounds as other larger animals. You still learn the word itself, but you also learn which family of words it belongs to.
    
### From categories to words and compounds

The connections go beyond a shared beginning. There are broad domains, more specific subclusters, and roots that appear in words from different categories. You can also combine whole words when you need a more specific expression.

| Form | Meaning |
|---|---|
| **V** | body-related (broad domain) |
| **VI** | internal body (cluster) |
| **DUR** | hardness (root) |
| **VI + DUR = vidur** | bone (established word) |
| **vavaris + vidur = vavaris vidur** | back + bone = spine (compound) |

**Vidur** is simply the word for *bone*. Its sounds also connect it to other body words, while **dur** connects it to words outside that category. 

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

These sounds give you a rough idea of the sentence even before you know the individual words. Knowing the full words then tells you which animal and family member are involved.
    
Many clusters are further divided into subclusters, indicated by the next letter. Subclusters are also super useful when you are communicating with people and have forgotten a word. 
    
Let's suppose you want to say you went to shop for a bed, but you forgot how to say it. Maybe you just remember an associated word, like another piece of furniture. Maybe you just remember the beginning of the word "bed". Maybe you just remember how to say furniture. 
    
**In every one of these cases, you'd know the subcluster for furniture-related words is bon.** And if you just say bon, the meaning will be less specific, but you will probably be able to communicate. 
    
Or if you wanted to say you are feeling upset, but you forgot the word. You could say instead toh, and people will know you are talking about emotional suffering. And so on.
    
There are other little surprises in the vocabulary, but we will not cover everything here. I hope it makes learning more interesting!   

The clusters give the whole vocabulary a structure. They can make words easier to learn and remember, help you recognize a general meaning when you come across an unfamiliar word, and give you a way around words you've forgotten. As you learn more vocabulary, these associations gradually become familiar. And you can play around with them, too.   


## How Oravia’s Grammar Works  

The grammar follows the essentials of Oravia: it's easy, expressive, and international.
It can communicate a wide range of meanings while having a very light load. A small unified set of principles generate most of the grammar. As you read through the various constructions, you see the same ideas over and over again. It has a lot of freedom, flexibility, and stylistic options that make it expressive and precise.

Nearly all auxlangs are essentially simplified Romance-Germanic: even when they broaden the vocabulary, the structure and logic are largely untouched, just replacing the words (easy way to see this: check the interlinear gloss). Oravia has a different grammatical system inspired by languages around the world. In the quest of building Oravia, I asked a simple question: how can something be expressed in the most elegant way, with the least load?

The guiding principle is: a simple way to express something, with low-load optional alternatives that adds precision or style when you want them. 

See the [10-Minute Grammar](core-grammar.md) and the [Comprehensive Grammar](../content/oravia-grammar.md) for more details.

---


## Why Oravia? What Makes It Different?

This is not the first language I've created, but it's the first I am sharing. That's because I genuinely believe Oravia has something to offer. I didn't want a language where you have to describe everything using a tiny list of basic ideas. But I also didn't want thousands of unrelated words to memorize. Finding a balance between those two was one of the main goals.

### How Many Words Do You Need?
- languages with a normal vocabulary size of thousands of words take a long time to learn
- languages with very few words may end up with vague communication and long word strings to express simple concepts

**Oravia's approach:**

Oravia has a larger vocabulary than very minimalist languages, so you can express most everyday ideas with one or two words instead of long strings of descriptions. The core vocabulary is still small, at about 780 words. These are established words with their own meanings.

The sound-meaning connections help keep that vocabulary manageable. Instead of learning completely unrelated forms, you start to notice the same clusters and roots across different words.    

*Example: associations inside established words*
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

### Where Do Oravia Words Come From?
- languages based on existing roots may benefit from learners recognizing some words, but they may be less accessible to learners from other backgrounds
- languages that use roots from multiple families end up with few recognizable words. This is because they take a small percentage from each single family, plus roots may be changed beyond recognition to fit the sound system 
- languages with completely made up words (a priori) may be more neutral, but they take longer to learn

**Oravia's approach:**
Oravia was first constructed a priori, which is more fair. At the same time, words are not arbitrary sounds: the syllable-meaning associations, the cluster semantic structure, and the small vocabulary facilitate learning.  
Oravia also has a posteriori characteristics: the word components were mapped into existing natural languages. For example, the root yun in Oravia is mist, which maps into Mandarin 云 yún (cloud, mist). These associations incorporate the advantages of learning etymology to mnemonics and memorization.

*Example: how a part of the vocabulary is organized into related groups*
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


---

### Drawing from Languages Around the World
- languages that base themselves on European vocabulary and grammar are easier to learn for a big chunk of the world population
- at the same time, they may be less accessible to learners from other backgrounds and that may shape what the language can do and express based on a Eurocentric standard

**Oravia's approach:**

A grammar that draws from different systems and can adapt to multiple native languages. A design that is simple, efficient and easy to learn across the board, created from the Global South and tested by people from diverse L1 backgrounds.

---

### Using Data Alongside Intuition
- creators' intuitions make languages unique, but may be misguided about what features are easy or work well

**Oravia's approach:**

I used research on language learning, word embeddings to help organize the vocabulary, and feedback from beta testers about what works and what doesn't.  

---

### Making Pronunciation Easier Across Languages
- standard sound systems ensure consistent pronunciation, but can make sounds hard to articulate or differentiate depending on speaker background  

**Oravia's approach:**

Oravia leaves unusual room for different accents. Easily confused sounds (like l/r or t/d) rarely tell two words apart, so if your language has only one of them, you can usually use it for both. Many sounds have a range, for example, h can be anything from English h to a soft rasp, and e and o can be open or closed. Two vowels together can be one syllable, two syllables, separated by a short stop, or joined with a glide (e.g., ia → ja, uo → wo). Syllables ending on consonant can take a short schwa (morta → morəta). None of these choices moves the stress. And if any sound is hard for you, you can use approximations chosen to keep words apart. For more details, see the [Pronunciation Guide](../content/pronunciation.md).

---

### Flexible Word Order
- languages are designed with mandatory word order (usually SVO) that prioritizes speakers of certain backgrounds
- languages without a fixed word order often resort to complicated alternatives or end up with unclear syntax 

**Oravia's approach:**

Small markers show what each part of the sentence is doing. Since these roles don't depend on word order, you can move whole phrases around without changing who does what. You can use SVO, SOV, or another order, depending on what feels more natural or what you want to emphasize. 

*Example*
```
a [subject] i [verb] e [direct complement] u [indirect complement]

a nim i anona e mocen u run

i anona a nim e mocen u run

e mocen i anona u run a nim

...

```

---

### Room for Personal Style
- many languages are designed to be easy and regular. As a consequence, they can frequently feel more rigid and lack personalization options

**Oravia's approach:**

I didn't want Oravia to be simple at the expense of expression. There are different ways to say things, change the emphasis, or play with words. For example, you can change the cluster of a word to bring out a different aspect of its meaning. 

*Example*
```
bogor means to build

You can change the word to create different flavors of to build:
omgor = emphasizes the sound of building
angor = emphasizes the act itself
togor = emphasizes the physical exertion
ceigor = emphasizes the creativity involved
...
```

---

## A Note on Methods

I used [word embeddings](https://en.wikipedia.org/wiki/Word_embedding) to cluster words based on semantic associations. The word embeddings came from tokens trained on internet data on billions of uses. These associations are more widely shared than my own intuitions of what goes together, though they still have limitations (they depend on who uses the internet, etc). Based on this large language data that it was determined, for example, that “bear” is closely related to “dog”, and thus they are in the same cluster (mi). And, the word “snake” goes closer to “rodent” and not with “dog” and “bear”, so I created another cluster for animals like “snake” and “rodent” (mu). I created the names for the clusters (e.g., bigger animals and smaller animals), so you may have another interpretation of what they are about.

I was inspired by different languages around the world. For example, the semantic clusters were inspired by Bantu noun classes, while word formation was inspired by Chinese languages. The grammatical markers were inspired by Japanese particles, and the verb aspect system by Yucatec Maya.


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
Much easier to learn   
May help you learn other languages afterwards  
Great exercise for memory, pattern recognition and cognitive flexibility  
Lets you think and express yourself in ways you never knew possible  
Have a secret language among friends, couples or family members  
Be part of the constructed languages community  
Explore the interesting design ideas that go into creating a language   

And have I mentioned *it's fun?* :)

---

[Start Learning →](../course/lesson00.md){ .md-button .md-button--primary }
[Read Core Grammar →](core-grammar.md){ .md-button }
[Get Involved →](get-involved.md){ .md-button }
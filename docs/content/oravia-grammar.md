<style>
.md-typeset details.gr-part,
.md-typeset details.gr-sec {
  border:none !important;box-shadow:none !important;background:transparent !important;
  padding:0 !important;margin:0.2rem 0 !important;border-radius:0 !important;
  font-size:inherit !important;color:inherit !important;
}
.md-typeset details.gr-part > summary {
  background:transparent !important;font-weight:700 !important;font-size:1rem !important;
  color:#3a6a9a !important;padding:0.45rem 0.25rem !important;
  border-bottom:1px solid #d3e8f7 !important;margin-bottom:0.4rem !important;cursor:pointer !important;
}
.md-typeset details.gr-sec > summary {
  background:transparent !important;font-weight:600 !important;font-size:0.95rem !important;
  color:#444 !important;padding:0.3rem 0.25rem !important;
  border-bottom:1px solid #efefef !important;cursor:pointer !important;
}
.md-typeset details.gr-part > summary::before,
.md-typeset details.gr-sec > summary::before {
  display:none !important;content:none !important;
  background-color:transparent !important;-webkit-mask-image:none !important;mask-image:none !important;
}
.md-typeset details.gr-sec { margin-left:0.75rem !important; }
.md-typeset details.gr-part .gr-content,
.md-typeset details.gr-sec .gr-content { padding:0.5rem 0 0.5rem 0.5rem; }
.md-typeset details.gr-sec .gr-content p { margin:0.4rem 0; }
.md-typeset details.gr-sec .gr-content h4 { margin-top:0.8rem;color:#5a8bb8; }
.md-typeset details.gr-sec .gr-content h5 { margin-top:0.6rem;color:#6b8e9e; }
.md-typeset details.gr-sec .gr-content pre {
  background:#f4f8fb;border-left:3px solid #81c4e8;padding:0.35rem 0.75rem;
  border-radius:4px;font-size:12px;white-space:pre;overflow-x:auto;margin:0.4rem 0;
  font-family:monospace;line-height:1.4;
}
</style>

# Grammar 

The grammar follows the essentials of Oravia: it's easy, expressive, and international.

**It can communicate a wide range of meanings while having a very light load**. A small unified set of principles generate most of the grammar. As you read through the various constructions, you see the same ideas over and over again.

It has a lot of freedom, flexibility, and stylistic options that make it expressive and precise (such as the emphasis marker o, words in any role, the gradation system, register, bi comments and evidentiality, conditional distinction, word formation, lor...).

Nearly all auxlangs are essentially simplified Romance-Germanic: even when they broaden the vocabulary, the structure and logic are largely untouched, just replacing the words (easy way to see this: check the interlinear gloss). Oravia has a **different grammatical system inspired by languages around the world**. For example, the cluster system draws from Bantu noun classes, the marker and zero-pronoun system from Japanese, and the verb aspect system from Yucatec Maya. In the quest of building Oravia, I asked a simple question: *how can something be expressed in the most elegant way, with the least load?*

This grammar document aims to be comprehensive, and as such has more advanced or niche constructions. Also, **a lot of these smaller rules are either optional or can be acquired by "osmosis"**. If you'd like to check the foundations of the grammar and start speaking, check the [Core Grammar](../about/core-grammar.md) or the [Core Course](../course/lesson00.md).

---

<details class="gr-part">
<summary><strong>0. Glossary of Common Terms</strong></summary>
<div class="gr-content">
<p><em>Vocabulary</em> - the bulk of the language, ~800 words, almost all composed of (sub)cluster + root (e.g., ANE + LEM = remain).</p>
<p><em>Cluster</em> - the first two letters and/or first syllable of a word, which indicates its noun class. There are 48 clusters. Not all words belong to a cluster but almost all do (e.g., AN = movement). The exceptions are typically pronouns, prepositions, and numbers. </p>
<p><em>Subcluster </em>- subdivision of a cluster, typically indicated by the third letter. Clusters have between 0-4 subclusters (e.g., ANE = static movement. There is also ANI = movement toward, and ANO = movement away).</p>
<p><em>Root</em> - typically the rest of the word after subtracting the (sub)cluster, creating cross-cluster associations (e.g., LEM = remain, like BEILEM = vehicle + remain = station).</p>
<p><em>Building Blocks</em> - all the clusters, subclusters and roots, which form the syllable-meaning associations of Oravia (e.g., ANE = static movement, LEM = remain, BEI = vehicle).</p>
<p><em>Marker</em> - they indicate the syntactic role of a word in a sentence by introducing blocks (e.g., [SUBJECT my mom and I] [VERB give freely] [DIRECT OBJECT homemade food] [INDIRECT OBJECT to people in need]). The markers are a (subject), i (verb), e (direct object), u (indirect object, to, for), o (emphasis).</p>
<p><em>Compounds</em> - two or more words indicating together a concept (e.g., sol yedis yaltans miau = striped-big-cat = tiger). The compound is opened by sol, which is optional, and every word except the last takes -s. </p>
<p><em>Hyphenated </em>- two words joined together for flavor or fine-grained meaning (e.g., ilofun-vardei = to hesitant-look).</p>
</div>
</details>

---

<details class="gr-part">
<summary><strong>Part I — Language Structure</strong></summary>
<div class="gr-content">
<details class="gr-sec">
<summary>1. Typological Overview</summary>
<div class="gr-content">
<p>Oravia is an analytic language. Words do not change shape to mark agreement, gender, number, or tense. The same word can function as a noun, verb, adjective, or adverb depending on context. All grammatical relationships are signaled by small marker words, not by modifying the words themselves.</p>
<p>Key features:</p>
<p>No articles (no &quot;the&quot; or &quot;a&quot;)</p>
<p>No grammatical gender</p>
<p>No plural forms (except for personal pronouns)</p>
<p>No obligatory tense marking, aspect is optional and always explicit</p>
<p>Flexible word order at the sentence level: markers determine role</p>
<p>Words are built from sounds that carry consistent meanings (syllable-meaning associations)</p>
</div>
</details>

<details class="gr-sec">
<summary>2. Phonology</summary>
<div class="gr-content">
<h4>2.1 Consonants</h4>
<p>The consonants are: B C D F G H J L M N P R S T V W Y</p>
<p>All pronounced as expected in English, with these specific values:</p>
<table>
<tr><th>Letter</th><th>IPA</th><th>Sounds like</th></tr>
<tr><td>c</td><td>/k/</td><td>cake (Oravia has no letter k)</td></tr>
<tr><td>h</td><td>/h/, /ʁ/, or /x/</td><td>variable, from English h to a soft rasp</td></tr>
<tr><td>j</td><td>/dʒ/</td><td>jello</td></tr>
<tr><td>r</td><td>/ɾ/</td><td>the tt in butter, like a flap</td></tr>
<tr><td>y</td><td>/j/</td><td>the y in yes</td></tr>
</table>
<p><strong>Similar-sounding pairs: </strong>The vocabulary is designed so that similar pairs never need to be disambiguated: l/r, m/n, p/b, t/d, c/g, f/v, w/v. There is no word that differs from another only by one of these pairs. In practice, you can use similar pronunciations without causing confusion.</p>
<p><strong>Consonant endings: </strong>Some syllables end in a consonant. If you find this hard to pronounce, insert a short unstressed i after it (morta or mor(i)ta are both fine).</p>
<h4>2.2 Vowels</h4>
<p>The vowels are: A E I O U</p>
<table>
<tr><th>Letter</th><th>IPA</th><th>Sounds like</th></tr>
<tr><td>a</td><td>/ɑ/</td><td>father</td></tr>
<tr><td>e</td><td>/ɛ/</td><td>cellar</td></tr>
<tr><td>i</td><td>/i/</td><td>creek</td></tr>
<tr><td>o</td><td>/ɔ/</td><td>door</td></tr>
<tr><td>u</td><td>/u/</td><td>flu</td></tr>
</table>
<p>Pronouncing E and O closed as in Spanish (/e/ and /o/) is also perfectly fine.</p>
<p><strong>Two vowels together: </strong>The preference is to pronounce adjacent vowels as one syllable (as in oRAvia), but two syllables is also acceptable. LIria (preferred) or liRIa (also fine).</p>
<h4>2.3 Stress</h4>
<p>Stress always falls on the penultimate syllable (second to last). The exception is when you have a suffix, which gets a secondary stress.</p>
<pre>coupa    → COU-pa
eledora  → e-le-DO-ra
lidastor → li-DAS-tor
mouje → MOU-je
moujeum (mouje+um) → MOU-je-UM</pre>
<h4>2.4 Audio Note</h4>
<p>Recordings may sound Romance-influenced because of my accent. Try to repeat for mutual intelligibility rather than to copy an exact accent. There is no &quot;right&quot; accent in Oravia.</p>
</div>
</details>

<details class="gr-sec">
<summary>3. Sentence Structure</summary>
<div class="gr-content">
<h4>3.1 Core Pattern</h4>
<p>The fundamental sentence uses four core markers:</p>
<pre>a [subject]   i [verb]   e [direct object]   u [indirect object]</pre>
<table>
<tr><th>Marker</th><th>Role</th><th>Example</th></tr>
<tr><td>a</td><td>subject — the doer or experiencer</td><td>a nim = I</td></tr>
<tr><td>i</td><td>verb</td><td>i mo = eat</td></tr>
<tr><td>e</td><td>direct object</td><td>e mocen = chocolate</td></tr>
<tr><td>u</td><td>indirect object (to / for)</td><td>u falni = to the baby</td></tr>
<tr><td>o</td><td>focus / emphasis</td><td>o nim! = it&#x27;s ME!</td></tr>
</table>
<p>A basic sentence:</p>
<pre>a nim   i mo   e mocen
  I     eat   chocolate</pre>
<p>Prepositions:</p>
<table>
<tr><th>Word</th><th>Meaning</th><th>Example</th></tr>
<tr><td>de</td><td>of / from</td><td>de nim faibor = of my spouse</td></tr>
<tr><td>en</td><td>time and space</td><td>en bo = at home</td></tr>
</table>
<h4>3.2 Word Order — Marker Blocks Move as Units</h4>
<h4></h4>
<p><strong>A marker and all the words it introduces form a block. The block moves as a unit; you never split the marker away from its phrase.</strong></p>
<p>Each marked phrase is a self-contained block that can move anywhere in the sentence. For example, this is what the block structure looks like:</p>
<p>[SUBJECT my mom and I] [VERB give freely] [DIRECT OBJECT homemade food] [INDIRECT OBJECT to people in need]</p>
<p>Now an example in Oravia:</p>
<pre>[en   yamirli   bo]
  ↑     ↑       ↑
 loc   old    house</pre>
<p>The entire block [en yamirli bo] can move to the beginning, middle, or end of the sentence. But en never splits from its phrase, and yamirli (old) always precedes bo (house).</p>
<p>     &quot;I searched in my old house for many years&quot;</p>
<pre>nim   i copei   en yamirli bo   en mir lidastor</pre>
<p>Four blocks: [nim] · [i copei] · [en yamirli bo] · [en mir lidastor]</p>
<p>All of these ordering examples are valid:</p>
<pre>[nim]¹ [i copei]² [en yamirli bo]³ [en mir lidastor]⁴
[en yamirli bo]³  [nim]¹  [i copei]²  [en mir lidastor]⁴
[en mir lidastor]⁴  [nim]¹  [i copei]²  [en yamirli bo]³
[nim]¹  [en yamirli bo]³  [i copei]²  [en mir lidastor]⁴</pre>
<p>These are NOT valid because they break a block:</p>
<pre>❌  [nim] en [i copei] nim yamirli bo     (en split from its block)
❌  [nim] [i copei] en nim bo yamirli     (yamirli after what it modifies)</pre>
<p>Modifiers used as adjectives always come before what they modify. A long noun phrase like de yamirli heivio haijor (of the old magic witch) reads left to right, with each word narrowing the concept of what follows.</p>
<p>For more clarity, keep modifiers right next to what they modify. This includes words or expressions used as adjectives, adverbs, possessives, relative clauses, and general embedded clauses.</p>
<p>Because of the markers and block structure, word order is flexible. Most commonly, at the beginning position you may find subjects (SOV / SVO) or sentence framing expressions (e.g., time adverbs, bi speaker comments §30). Other orders that follow the two above rules (the whole block moves together, and modifiers come next to what they modify) are equally accepted with explicit markers.</p>
<h4>3.3 Dropping Markers</h4>
<p>An unmarked first block defaults to the subject unless it's a recognizable framing expression. Because of this, the a marker is dropped most easily.</p>
<pre>a miau i bortal = miau i bortal = the cat enters
a miau e muvardur i copei = miau e muvardur i copei = the cat hunts the mouse</pre>
<p>Markers indicate where a block begins, demarcating boundaries. Thus, if the subject is not in the beginning, you must be careful when dropping the a marker: it may be hard to tell where the block begins.</p>
<pre>Noli i mo e mocen miau ❌  = now I eat the chocolate cat / now the cat eats chocolate (without the marker demarcating the block, it's unclear whether "cat" forms its own block or not).</pre>
<p>The e marker drops when the object is unambiguous. For example:</p>
<pre>i mo mocen = I eat chocolate (hardly anyone would think the chocolate is doing the eating!)</pre>
<p>The u marker is rarely dropped.</p>
</div>
</details>

<details class="gr-sec">
<summary>4. Pronouns</summary>
<div class="gr-content">
<h4>4.1 Personal Pronouns</h4>
<table>
<tr><th>Singular</th><th></th><th>Plural</th><th></th></tr>
<tr><td>nim</td><td>I / me</td><td>nima</td><td>we / us</td></tr>
<tr><td>run</td><td>you</td><td>runa</td><td>you all</td></tr>
<tr><td>hay</td><td>he / she / it (singular)</td><td>haya</td><td>they (plural)</td></tr>
</table>
<p>hay is fully gender-neutral. It covers he, she, it, and any singular third person. Some speakers may prefer to use demonstratives such as noi (this) to refer to objects or things. </p>
<h4>4.2 Possessive Pronouns</h4>
<p>Just use the personal pronoun before the noun, like any other modifier.</p>
<p>For non-pronoun possession, use de.</p>
<pre>nim roumir       → my book</pre>
<pre>roumir de Demi       → Demi&#x27;s book</pre>
<h4>4.3 Zero Pronouns</h4>
<p>Oravia omits possessives when ownership is obvious: body parts, family roles, clothing, body actions:</p>
<pre>varodu tounu      → head hurts (not: my head)
farejor i anifi     → mother is coming (not: my mother)
i siur e yesrel      → remove the jacket (not: your jacket)</pre>
<p>Many utterances don&#x27;t have a subject. An affirmative sentence without a subject defaults to &quot;I&quot;, and a question defaults to &quot;you&quot;, like this:</p>
<pre>i ilianum = [V] know-not = I don&#x27;t know 
ce i anye? = what [V] do? = what are you doing?</pre>
<p>In narratives or complex sentences, prefer to make the subject explicit.</p>
<p>Not all affirmative sentences without subjects default to &quot;I&quot;. Some verbs don&#x27;t have a volitional actor and are better understood as impersonal verbs. They may be used to mean &quot;I&quot;, but this is not the default meaning. See below a list of these verbs.</p>
<table>
<tr><th>Category</th><th>Verbs</th></tr>
<tr><td>Existence</td><td>dami</td></tr>
<tr><td>Events and happenings</td><td>dateli, eomfel</td></tr>
<tr><td>Seeming</td><td>nomie</td></tr>
<tr><td>Weather and ambient conditions</td><td>lupupi, luval, lufu, lusari, lumbo, lufiva, luyar, luyun, luhue, lubur, lumirwa, luswa, pohem, yolimel, yoyar</td></tr>
<tr><td>Time</td><td>limel, liyar, litam, lipardas, lidastor, liperi, litetan, litegai, litemi, ilteli, lunhem, lunu</td></tr>
</table>
<p>When time verbs are used as impersonal verbs, they mean time passing; see §48.</p>
<p>Evaluative words like elireva, dayar, dael, davir, danmir, oihi normally function as framing phrases (§49.2) or with bi for speaker comment (§30). In conditionals, questions, or embedded clauses, they may be used to mean "this claim / situation", and do not default to "I".</p>
<pre>bi elireva = it's true.
daehur i elireva, eta o i ilahai  = if it's true, tell me.</pre>
<h4>4.4 Active Subject</h4>
<p>In narratives and more complex sentences, when a subject is introduced, it becomes the subject until another one is made explicit. That is, if the subject changes, you must introduce it. This is true even if you would normally not use &quot;I&quot; or &quot;you&quot;. This is to prevent ambiguity:</p>
<pre>Hay i bortal, i apafene en bontame, su i mo. Notam, toumo. Notor, a nim i ilahai.
= they enter, [they] sit on the table, and [they] eat. Before, [they were] hungry. Then, I say.
Haya i ilian ca i anye = they know what [they] are doing
Haya i ilian ca nim i anye = they know what I am doing</pre>
<p>Subjects identified in embedded or subordinate clauses are only valid within that clause and do not become the main active subject. That is, the subject for the next sentences do not shift to the subject of the embedded clause:</p>
<pre>
Haya i ilian ca nim i anye. Notor, i anocari. = They know what I am doing. Then, [they] leave.</pre>
</div>
</details>

<details class="gr-sec">
<summary>5. Gender</summary>
<div class="gr-content">
<p>Oravia has no grammatical gender. hay is fully neutral. Gender can be specified optionally:</p>
<table>
<tr><th>Method</th><th>Female</th><th>Male</th></tr>
<tr><td>Suffix</td><td>-jor</td><td>-jal</td></tr>
<tr><td>Prefix word</td><td>faejor</td><td>faejal</td></tr>
</table>
<pre>hayjor = she         farejor = mother
faejor fano = daughter    faejal fano = son</pre>
<p>Gender is always optional: use it only when disambiguation is needed.  
You can also make any word into a gender word by adding it into the fae subcluster (fae + root). More information about coining words in the Guide to Craft and Style.</p>
</div>
</details>
<details class="gr-sec">
<summary>6. The Copula</summary>
<div class="gr-content">
<h4>6.1 The Structure</h4>
<p>The copula (to be) uses the double a pattern. There is no separate verb &quot;to be.&quot;</p>
<pre>a [subject]   a   [predicate]</pre>
<p>Examples:</p>
<pre>a nim a yalen           → I am tall
a haya a ti             → they are bad
a coupa a ancem hue     → the card is turned
a nim a roena dia      → I am a teacher
a bo a no leayo         → the house is like a garden</pre>
<p>If you want to say something like &quot;someone is at a location&quot;, you can use just the preposition:</p>
<pre>nim en gedom           → I am in the bank
nim [en] noi           → I am here</pre>
<p>When a word has both a literal and a metaphorical / adjective reading, context will help identify it. To force an adjective reading, use <em>ya</em> (adjective) before the modifier. To force a literal reading, use <em>bi reva</em> (it&#39;s accurate). For example:</p>
<pre>a falen a fare          → the child is parental, or in other contexts, the child is a parent
a falen a ya fare            → the child is parental
a falen a fare bi reva       → the child is a parent</pre>
<h4>6.2 The Reduced Copula</h4>
<p>Once a subject is active in discourse, you can use a reduced copula clause referring back to that subject. This is the full explicit copula:</p>
<pre>a Lina a roena dia. a hay a toului.   → Lina is a teacher. she is tired.</pre>
<p>But since Lina is already the active subject, you don&#39;t have to repeat the full copula again. You may say instead predicate + pronoun/subject, or even only predicate:</p>
<pre>a Lina a roena dia. toului hay.       → Lina is a teacher. she is tired.</pre>
<p>In that case you can say only <em>toului</em> as well. But to avoid ambiguity, using the subject again is recommended for complex sentences:</p>
<pre>a Lina i asensau, i anvu jetai bosvi. Notor, i vardei e elihei 
en sepopos joliri, su i ilahai u fano ca touros hay.

→ Lina wakes up, she goes to the bathroom. Then, she looks at
  herself in the mirror, and says to her child that she is tense.</pre>
<p>The reduced copula always refers to the currently active subject (it is Lina who is tense).</p>
<p>This is very useful to avoid repetition and clunkiness, especially when reading and writing.</p>
</div>
</details>
</div>
</details>

---

<details class="gr-part">
<summary><strong>Part II — The Verb System</strong></summary>
<div class="gr-content">
<details class="gr-sec">
<summary>7. Verbs</summary>
<div class="gr-content">
<h4>7.1 Lexical Flexibility</h4>
<p>Any word can be used as a verb by placing i before it:</p>
<pre>boemo (kitchen) → i boemo   = to cook
bonfene (bed)   → i bonfene = to lie down
bortal (door)   → i bortal  = to enter 
mogali (coffee) → i mogali  = to drink coffee</pre>
<p>More details about this on §48.</p>
<h4>7.2 Negation</h4>
<p>Add -um directly to the verb:</p>
<pre>nim i moum e moyi       → I don&#x27;t eat sugar
nim i doum i siyal      → I cannot find</pre>
<p>More information about negation under §13.</p>
<h4>7.3 Verb Stacking</h4>
<p>Use the short root of the first verb, then the full second verb:</p>
<pre>i [root]   i [full verb]</pre>
<table>
<tr><th>Short</th><th>Full</th><th>Meaning</th></tr>
<tr><td>do</td><td>ando</td><td>can</td></tr>
<tr><td>dai</td><td>anidai</td><td>want to</td></tr>
<tr><td>fou</td><td>anifou</td><td>need to</td></tr>
<tr><td>vil</td><td>novil</td><td>must (obligation)</td></tr>
<tr><td>tane</td><td>daetane</td><td>should (recommendation)</td></tr>
</table>
<pre>nim i do i mo       → I can eat
nim i vil i mo      → I must eat
nim i tane i mo     → I should eat</pre>
<p>This is the natural choice in speech. Full forms for the first verb (nim i anidai i bonfene) sound formal or deliberate.</p>
<h4>7.4 Must vs. Should</h4>
<pre>nim i vil i [verb]   → I must [verb]   — obligation
nim i tane i [verb]  → I should [verb] — recommendation</pre>
<p>To negate, add -um to the inner verb: <em>nim i vil i moum</em> = I have an obligation not to eat.</p>
<p>If you say instead: <em>nim i vilum i mo</em>, this means you have no obligation to eat.</p>
</div>
</details>

<details class="gr-sec">
<summary>8. Aspect and Habit </summary>
<div class="gr-content">
<h4>8.1 Aspect: -ar and -is</h4>
<p><strong>AR</strong> is used to mean something that has been <strong>completed</strong>. <strong>IS</strong> is used to mean something that has <strong>not yet started</strong>.</p>
<p>The rule is:</p>
<p>. Use the base form of the verb in general.</p>
<p>. When you want to specify if an action was completed, or if it was done before another action, you can use -ar.</p>
<p>. When you want to specify if an action will yet to start, or if it follows another action, you can use -is.</p>
<p>If you use -ar or -is when it's already clear from context, listeners will interpret a special emphasis on completion, or expect another action clause to follow. For this reason, prefer base verb when context and adverbs are doing their job: </p>
<pre>litamar, nim i mouje e mogali = yesterday, I drank coffee (verb in base form, natural)</pre>
<h5>On non-verbs</h5>
<p>Notice that -ar and -is are not only for verbs. You can use it in all kinds of words:</p>
<pre>faiborar = faibor + ar = ex
anseis   = anse + is  = prospective job</pre>
<p>And this includes LI words:</p>
<pre>litamar = litam + ar = the completed day, yesterday
litamis = litam + is = the day yet to start, tomorrow
lis = li + is = unspecified time yet to start, one day</pre>
<h5>Relative time</h5>
<p>Typically, our reference is the present, so the completed time and the time yet to start are in the past and in the future, respectively. However, when we use another reference that is not the present, the meaning diverges.</p>
<p>When we are talking about a narrative in the past, or sequencing two actions, the time is relative to these references:</p>
<pre>Litamar, nim i yespai cali hay anifi.
Yesterday, I was putting on my shoes when he arrived.
(both actions at the same time)

Litamar, nim i yespaiar cali hay anifi.
Yesterday, I had put on my shoes when he arrived.
(first action completed by the time of the second action)

Litamar, nim i yespai, hay anifis.
Yesterday, (when) I put on my shoes, he hadn't arrived yet.
(by the time of the first action, second action yet to start)</pre>
<p>Relative time also happens when the reference is the future:</p>
<pre>Litamis, nim i bospupi cali i mouje.
Tomorrow, I will shower while drinking.
(both actions at the same time)

Litamis, nim i bospupiar cali i mouje.
Tomorrow, I will have showered by the time I drink.
(first action completed by the time of the second action)

Litamis, nim i bospupi, i moujeis.
Tomorrow, I will shower, (later) I will drink.
(by the time of the first action, second action yet to start)</pre>
<h4>8.2 Ongoing and Habit</h4>
<p>When you use <strong>base verb form</strong>, it is a general action. It can also indicate something that is a) ongoing, or b) habitual. As is usually the case in Oravia, you can just use the base form, but you can also make further specifications if desired or needed. </p>
<p>To express ongoing actions, we use words like noli (now), anlaro (continue), and lilon (while). We also have continuative aspect (see §10).</p> 
<p>To express a habitual or recurring action, we can do that explicitly with lirul (habit). Lirular (-ar on lirul) marks a completed habit that no longer holds (&quot;used to&quot;):</p>
<pre>nim i mo e mogali lirul         → I habitually drink coffee
nim i mo e mogali lirular       → I used to drink coffee (but don&#x27;t anymore)
hay i boemo en bo nealui lirular → she used to cook at home half the time</pre>
<p>As is usually the case, you can change the word order. Time words like noli, lilon, lirul, and  lirular can come at the end of the clause like the examples above, in the beginning, or between blocks.</p> 
</div>
</details>

<details class="gr-sec">
<summary>9. Immediate Aspect — noli with -ar and -is</summary>
<div class="gr-content">
<p>Combining noli (now) with the aspect suffixes pins the action to the current moment specifically:</p>
<pre>-ar noli = just (completed right now):
nim i moar noli            → I just ate
hay i anocari noli          → she just left
 
-is noli = about to (starting right now):
nim i mois noli            → I&#x27;m about to eat
hay i anifis noli           → she&#x27;s about to leave</pre>
<p>Without noli, -ar and -is are relative to the narrative moment. With noli, they are anchored to right now. Think of it as the Oravia equivalent of &quot;just did&quot; and &quot;about to.&quot;</p>
</div>
</details>

<details class="gr-sec">
<summary>10. Continuative Aspect</summary>
<div class="gr-content">
<p>To express that an action started in the past and continues to the present (&quot;have been doing since / for&quot;), Oravia uses the bare verb (ongoing) with two possible time expressions:</p>
<h4>10.1 Since a point in time — de + time</h4>
<p>Use de (from/of) to mark the starting point. The bare verb signals the action is still ongoing:</p>
<pre>nim i mo e mogali de litamar
I have been drinking coffee since yesterday
 
nim i elemi en &#x27;San Antonio de lidastor teva
I have been living in San Antonio for six years
 
haya i damai de litam cali nim i anocariar
they have been arguing since the day I left</pre>
<h4>10.2 For a duration — en + span</h4>
<p>Use en (at/in) with a duration to express how long the action has been going on without specifying the start point:</p>
<pre>nim i mo e mogali en mir lidastor
I have been drinking coffee for many years
 
hay i copei en par lidastor
she has been searching for three years</pre>
<p>The bare verb in both constructions signals the action is still active. If the action has since ended, use -ar instead: nim i moar e mogali en tor lidastor = I drank coffee for two years (and no longer do).</p>
</div>
</details>

<details class="gr-sec">
<summary>11. Already, Not Yet, Still, No Longer</summary>
<div class="gr-content">
<p>These four expressions are extremely common in everyday speech. In Oravia they are built from two words (norven = already, anlaro = continue) with the negation suffix -um.</p>
<table>
<tr><th>Expression</th><th>Built from</th><th>Meaning</th></tr>
<tr><td>noder</td><td>norder</td><td>already</td></tr>
<tr><td>noderum</td><td>noder + -um</td><td>not yet (not already)</td></tr>
<tr><td>anlaro</td><td>anlaro</td><td>still (continues to)</td></tr>
<tr><td>anlaroum</td><td>anlaro + -um</td><td>no longer (does not continue)</td></tr>
</table>
<pre>i moar noder              → I already ate
noder hay i anocari            → she has already left
  
ni anlaro-mo              → I&#x27;m still eating
haya anlaro i elemi en bo    → they still live at home</pre>
</div>
</details>

<details class="gr-sec">
<summary>12. Dia and Hue</summary>
<div class="gr-content">
<h4>12.1 dia — Agent and Role</h4>
<p>dia creates agent nouns: &quot;the one who does X&quot; or &quot;the one whose role is X&quot;:</p>
<pre>anye dia        → maker, creator
boemo dia       → cook
be dia          → traveler
heivio dia      → witch / wizard</pre>
<p><em>To remember it: </em>dia contains a (actor) + i (verb), the actor-verb combination.</p>
<h4>12.2 hue — Recipient and Resultant State</h4>
<p>hue marks the thing in a state of having been acted upon:</p>
<pre>anye hue                → the made thing, a creation
a coupa a ancem hue     → the card is (in the state of being) turned</pre>
<p><em>To remember it: </em>hue contains u (indirect) + e (object), the receiver side.</p>
<h4>12.3 hue vs. -ar</h4>
<p>-ar narrates that an event happened. hue describes the resulting state:</p>
<pre>a coupa i ancemar       → the card turned (the event)
a coupa a ancem hue     → the card is turned (current state)</pre>
<h4>12.4 Modal modifiers plus hue</h4>
<p>Modals can also be used as modifiers, and when combined with hue, they can express different meanings. Take a look:</p>
<table>
<tr><th>Construction</th><th>Meaning</th><th>Examples</th></tr>
<tr><td>X hue</td><td>thing in the resulting state of X; the product or result of X</td><td>anye hue (made thing; creation), boemo hue (cooked thing; prepared food)</td></tr>
<tr><td>do X</td><td>able to do X (active)</td><td>do mo (that can eat), do vardei (able to see, sighted)</td></tr>
<tr><td>do X hue</td><td>capable of undergoing X (passive)</td><td>do mo hue (edible), do vardei hue (visible)</td></tr>
<tr><td>vil X</td><td>obligated to do X (active)</td><td>vil anye (one who must act), vil roesau (one who must study)</td></tr>
<tr><td>vil X hue</td><td>required to undergo X (passive)</td><td>vil anye hue (something that must be done), vil vardei hue (something that must be seen)</td></tr>
<tr><td>tane X</td><td>who should / is advised to do X (active)</td><td>tane vardei (one who should look), tane ilian (one who ought to know)</td></tr>
<tr><td>tane X hue</td><td>appropriate or worthwhile to undergo X (passive)</td><td>tane vardei hue (worth seeing), tane ilian hue (worth knowing)</td></tr>
</table>
</div>
</details>

<details class="gr-sec">
<summary>13. Negation</summary>
<div class="gr-content">
<h4>13.1 -um — no/not</h4>
<pre>nim i moum e moyi       → I don&#x27;t eat sugar (mo + um)</pre>
<h4>13.2 ho — Opposite</h4>
<p>ho before any word creates its opposite:</p>
<pre>a nim a ho yalen        → I am short (not-tall)
nim i ho bonfene        → I stand up (opposite of lie down)</pre>
<p>Compare: -um negates; ho inverts a quality:</p>
<pre>nim i moum e mocen      → I don&#x27;t eat chocolate (negation)
a mocen a ho yuba       → chocolate is unpleasant (opposite quality)</pre>
<p>The negation suffix tends to go last, like this:</p>
<pre>i moar → I ate
i moarum  → I didn&#x27;t eat</pre>
<p>In many cases, we may prefer to drop a suffix or rephrase rather than stack suffixes. </p>
<h4>13.3 Negation Scope</h4>
<p>Oravia has more specific scope negators for particular contexts. These are just examples not to be memorized, you can use any word in this function depending on what you want to say.</p>
<table>
<tr><th>Word</th><th>Meaning</th><th>Use</th></tr>
<tr><td>elirevaum</td><td>not true</td><td>factual correction of a whole proposition</td></tr>
<tr><td>oiyarum</td><td>not the emphasis</td><td>corrects what is being highlighted: &quot;it&#x27;s not THAT, it&#x27;s THIS&quot;</td></tr>
<tr><td>datelium</td><td>not the situation</td><td>the circumstances are different, it&#x27;s not the case</td></tr>
</table>
<p>For most purposes, elirevaum is the right choice. Use the others when you want to be precise about what aspect of a claim you are pushing back on.</p>
</div>
</details>
<details class="gr-sec">
<summary>14. Experience and Properties</summary>
<div class="gr-content">
<p>This section is about words that describe psychological or emotional states. For example, &quot;oihi&quot; means interest. If you use it as an adjective, does it mean interesting or interested? How about when you use &quot;tohvor&quot; as a verb, does it mean to fear or to frighten?</p>
<h4>14.1 The Main Pattern</h4>
<p>When learning other languages, one must typically learn the direction of verb by verb, or by classes of verb. For example, in English, we say &quot;I hate you&quot; but &quot;you interest me&quot;, &quot;I fear you&quot;, but &quot;you frighten me&quot;.</p>
<p>Oravia has a unified pattern for verbs of psychological and emotional states. The rule is as follows: when using emotions or experiences as bare verbs, the subject is the one experiencing the emotion. For example:</p>
<pre>nim i oihi e run       → I am interested in you
nim i tigim e run      → I hate you
nim i tohvor e run     → I fear you</pre>
<h4>14.2 Inverting the Subject with -saba</h4>
<p>If you want to express &quot;to frighten&quot; instead of &quot;to fear&quot;, we use the same word, but the sentence pattern changes. To invert it so that the subject is the one causing the psychological or emotional state in others, we use the verb with -saba (to cause, trigger).</p>
<pre>nim i oihi-saba e run     → I trigger interest in you
nim i tigim-saba e run    → I trigger hatred in you
nim i tohvor-saba e run   → I trigger fear in you (I frighten you)</pre>
<p>You may also use -saba with modifiers and adjectives. For details, see §23.5.</p>
<h4>14.3 Verb List</h4>
<p>See examples in the table below. Notice that in English the direction and complement change depending on the verb, which means that a unified rule leads to some unintuitive translations into English. Reminder of the general rule: when using emotional or psychological states as bare verbs, the subject is the one experiencing it. </p> <table>
<tr>
<th>Root</th>
<th>Experiencer pattern</th>
<th>Causative pattern</th>
<th>Property pattern</th>
</tr>

<tr>
<td>oihi</td>
<td>X i oihi e Y<br>(X is interested in Y)</td>
<td>X i oihi-saba e Y<br>(X interests or engages Y)</td>
<td>a X a oihi u Y<br>(X is interesting to Y)</td>
</tr>

<tr>
<td>oipoh</td>
<td>X i oipoh e Y<br>(X is excited by Y)</td>
<td>X i oipoh-saba e Y<br>(X excites Y)</td>
<td>a X a oipoh u Y<br>(X is exciting to Y)</td>
</tr>

<tr>
<td>oimin</td>
<td>X i oimin e Y<br>(X is amused by Y)</td>
<td>X i oimin-saba e Y<br>(X amuses Y)</td>
<td>a X a oimin u Y<br>(X is amusing to Y)</td>
</tr>

<tr>
<td>iloram</td>
<td>X i iloram e Y<br>(X is surprised by Y)</td>
<td>X i iloram-saba e Y<br>(X surprises Y)</td>
<td>a X a iloram u Y<br>(X is surprising to Y)</td>
</tr>

<tr>
<td>togei</td>
<td>X i togei e Y<br>(X is disgusted by Y)</td>
<td>X i togei-saba e Y<br>(X disgusts Y)</td>
<td>a X a togei u Y<br>(X is disgusting to Y)</td>
</tr>

<tr>
<td>tohbian</td>
<td>X i tohbian e Y<br>(X is confused by Y)</td>
<td>X i tohbian-saba e Y<br>(X confuses Y)</td>
<td>a X a tohbian u Y<br>(X is confusing to Y)</td>
</tr>

<tr>
<td>toului</td>
<td>X i toului e Y<br>(X is tired by Y)</td>
<td>X i toului-saba e Y<br>(X tires Y)</td>
<td>a X a toului u Y<br>(X is tiring to Y)</td>
</tr>

<tr>
<td>tostale</td>
<td>X i tostale e Y<br>(X is offended by Y)</td>
<td>X i tostale-saba e Y<br>(X offends Y)</td>
<td>a X a tostale u Y<br>(X is offensive to Y)</td>
</tr>

<tr>
<td>tohpu</td>
<td>X i tohpu e Y<br>(X is sad about Y)</td>
<td>X i tohpu-saba e Y<br>(X saddens Y)</td>
<td>a X a tohpu u Y<br>(X is saddening to Y)</td>
</tr>

<tr>
<td>tohnaru</td>
<td>X i tohnaru e Y<br>(X is angry at Y)</td>
<td>X i tohnaru-saba e Y<br>(X angers Y)</td>
<td>a X a tohnaru u Y<br>(X is infuriating to Y)</td>
</tr>

<tr>
<td>tohvor</td>
<td>X i tohvor e Y<br>(X fears Y)</td>
<td>X i tohvor-saba e Y<br>(X frightens Y)</td>
<td>a X a tohvor u Y<br>(X is frightening to Y)</td>
</tr>

<tr>
<td>iloto</td>
<td>X i iloto e Y<br>(X is worried about Y)</td>
<td>X i iloto-saba e Y<br>(X worries Y)</td>
<td>a X a iloto u Y<br>(X is worrying to Y)</td>
</tr>

<tr>
<td>dapas</td>
<td>X i dapas e Y<br>(X likes or prefers Y)</td>
<td>X i dapas-saba e Y<br>(X causes Y to like or prefer X)</td>
<td>a X a dapas u Y<br>(X is likeable to Y)</td>
</tr>

<tr>
<td>eleyel</td>
<td>X i eleyel e Y<br>(X loves Y)</td>
<td>X i eleyel-saba e Y<br>(X inspires love in Y)</td>
<td>a X a eleyel u Y<br>(X is lovable to Y)</td>
</tr>

<tr>
<td>tigim</td>
<td>X i tigim e Y<br>(X hates Y)</td>
<td>X i tigim-saba e Y<br>(X inspires hatred in Y)</td>
<td>a X a tigim u Y<br>(X is hateful to Y)</td>
</tr>

<tr>
<td>tohlel</td>
<td>X i tohlel e Y<br>(X misses Y)</td>
<td>X i tohlel-saba e Y<br>(X causes Y to miss X)</td>
<td>a X a tohlel u Y<br>(X is missed by Y)</td>
</tr>

<tr>
<td>tohsum</td>
<td>X i tohsum e Y<br>(X envies Y)</td>
<td>X i tohsum-saba e Y<br>(X provokes envy in Y)</td>
<td>a X a tohsum u Y<br>(X is enviable to Y)</td>
</tr>

<tr>
<td>tohdin</td>
<td>X i tohdin e Y<br>(X regrets Y)</td>
<td>X i tohdin-saba e Y<br>(X causes Y to regret X)</td>
<td>a X a tohdin u Y<br>(X is regrettable to Y)</td>
</tr>

<tr>
<td>eloliuto</td>
<td>X i eloliuto e Y<br>(X pities Y)</td>
<td>X i eloliuto-saba e Y<br>(X evokes pity in Y)</td>
<td>a X a eloliuto u Y<br>(X is pitiable to Y)</td>
</tr>

<tr>
<td>oila</td>
<td>X i oila e Y<br>(X enjoys Y)</td>
<td>X i oila-saba e Y<br>(X delights Y)</td>
<td>a X a oila u Y<br>(X is enjoyable to Y)</td>
</tr>
</table>
</div>
</details>
</div>
</details>

---

<details class="gr-part">
<summary><strong>Part III — Questions and Description</strong></summary>
<div class="gr-content">
<details class="gr-sec">
<summary>15. Questions</summary>
<div class="gr-content">
<h4>15.1 Yes/No Questions</h4>
<p>Raise intonation on the same sentence. No structural change needed:</p>
<pre>run i mo?       → Are you eating?
a hay en bo?    → Is she at home?</pre>
<p>If you want, you can add in the end of the sentence: &quot;dou ce?&quot; (or what?) or &quot;ia? / dasu?&quot; (yes? / right?). </p>
<p>To answer, you can say &quot;ia&quot; (yes), &quot;um&quot; (no), or use a sentence fragment (e.g., &quot;mo&quot;, &quot;boum&quot;).</p>
<h4>15.2 Question Words</h4>
<p>All question words are built from ce (what) plus a domain word. The pattern is open-ended, and new question words can be formed by combining ce with any relevant domain word.</p>
<table>
<tr><th>Word</th><th>Built from</th><th>Meaning</th></tr>
<tr><td>ce</td><td>—</td><td>what?</td></tr>
<tr><td>cei</td><td>ce + ei (person)</td><td>who?</td></tr>
<tr><td>cedom</td><td>ce + dom (place)</td><td>where?</td></tr>
<tr><td>celi</td><td>ce + li (time)</td><td>when?</td></tr>
<tr><td>ceora</td><td>ce + ora (idea)</td><td>why?</td></tr>
<tr><td>cenon</td><td>ce + non (way/manner)</td><td>how? (in what way?)</td></tr>
<tr><td>cene</td><td>ce + ne (gradation)</td><td>how [adjective]? (how tall? how intense?)</td></tr>
</table>
<pre>ce run i mo?              → What are you eating?
cei i mouje e moulu?      → Who is drinking milk?
cedom run i anvu?         → Where are you going?
cenon run i boemo?        → How do you cook?
cene yalen a run?         → How tall are you?</pre>
<h4>15.3 Connector Equivalents</h4>
<p>In non-question sentences, question words become connectors (instead of ce, use ca):</p>
<table>
<tr><th>Question</th><th>Connector</th><th>Meaning in statements</th></tr>
<tr><td>ce</td><td>ca</td><td>that / which</td></tr>
<tr><td>cei</td><td>caei</td><td>who</td></tr>
<tr><td>cedom</td><td>cadom</td><td>where</td></tr>
<tr><td>celi</td><td>cali</td><td>when</td></tr>
<tr><td>ceora</td><td>caora</td><td>because / the reason</td></tr>
<tr><td>cenon</td><td>canon</td><td>the way in which / how</td></tr>
<tr><td>cene</td><td>cane</td><td>to the degree that / as [adjective] as</td></tr>
</table>
<pre>nim i siyal ca a eledora a eodyel     → I noticed that fate was joining us
caora nim i anocariar, i doum i anivari  → because I left, I couldn&#x27;t return</pre>
<h4>15.4 The Multiple Meanings of &quot;How&quot;</h4>
<p>&quot;How&quot; in English covers several distinct concepts, each handled differently in Oravia:</p>
<h5>cenon / canon — manner (in what way)</h5>
<p>Asks or states the method or manner of doing something:</p>
<pre>cenon run i boemo?                   → How do you cook? (what method?)
hay i anye canon nim i ilaluan u hay  → she does it the way I told her</pre>
<h5></h5>
<h5>cene / cane — degree (how much, how tall, how intense)</h5>
<p>Built from ne (the gradation system), it asks about intensity or degree on the 0–10 scale:</p>
<pre>cene yalen a run?               → How tall are you?
cene tohpu a run?                    → How sad are you?</pre>
<p>You can create new question words by following the same logic: ce + gaolei (what + price, value), ce + coter (what + number, how many), etc.</p>
</div>
</details>

<details class="gr-sec">
<summary>16. Marker Disambiguation in Questions and Relative Clauses</summary>
<div class="gr-content">
<p>Oravia’s role markers can be placed directly before a question word or relative connector to specify what grammatical role the questioned or relativized element plays within its clause. It’s optional when context is clear, but invaluable when a sentence would otherwise be ambiguous.</p>
<h4>16.1 In Questions</h4>
<p>Without a marker, ce (what/who) is ambiguous about its role. Placing a marker before ce makes it explicit:</p>
<pre>e ce i mo?          → what is being eaten? (ce = direct object)
a ce i mo?          → who eats? (ce = subject)
u ce nim i ilaluan? → to whom am I speaking? (ce = indirect object)</pre>
<p>The marker immediately before ce signals the role of the unknown. </p>
<h4>16.2 In Relative Clauses</h4>
<p>The same principle applies to relative connectors. A marker before ca or caei specifies the role of the modified noun inside the embedded clause:</p>
<pre>i none e miau  a ca  i mo
I have the cat [SUBJ who]  eats
(the cat is the subject of eating)
 
i none e miau  e ca  i mo
I have the cat [OBJ that]  I eat
(the cat is the object: I eat it)
 
i none e miau  u ca  i ilaluan
I have the cat  [IO that]  I speak to
(the cat is the indirect object)</pre>
<p>Without the marker, the connector alone (ca, caei) leaves the role implicit and relies on context. With the marker, there is no ambiguity regardless of word order in the embedded clause.</p>
<p>The same principle applies to any connector:</p>
<pre>i vardei e ilhei  a caei  i ilaluan u run
I see the person  [SUBJ who]  spoke to you
 
i vardei e ilhei  e caei  run i ilaluan
I see the person  [OBJ who]  you spoke to</pre>
<p>The marker before the connector travels with it as a unit, just like any other marker block.</p>
</div>
</details>

<details class="gr-sec">
<summary>17. Indirect Questions</summary>
<div class="gr-content">
<h4>17.1 Whether / yes-no</h4>
<p>Ca introduces an embedded content clause, such as a fact or claim. If we don&#x27;t know whether something is true, we use &quot;ia dou&quot; (yes or...), which means &quot;whether&quot;.</p>
<h5>Examples</h5>
<table>
<tr><th>Verb</th><th>Meaning</th><th>Example</th></tr>
<tr><td>ilianum</td><td>not know</td><td>i ilianum ia dou hay i anocari  →  I don’t know whether she left</td></tr>
<tr><td>daelan</td><td>judge / evaluate</td><td>i daelan ia dou a selyino a norfih ciugai →  I’m evaluating whether the plan is sufficiently detailed</td></tr>
<tr><td>iliro</td><td>think / consider</td><td>i iliro ia dou a bociu a yuba  →  I wonder if the decoration is good</td></tr>
<tr><td>vardei</td><td>see / check</td><td>i vardei ia dou a bontame a noi →  I’m checking whether the table is here</td></tr>
<tr><td>siyal</td><td>find out</td><td>i siyal ia dou i do i roena →  I’m finding out whether I can teach</td></tr>
</table>
<h4>17.2 Thing vs. Fact</h4>
<p>Sometimes, a sentence like this can be ambiguous:</p>
<p><em>i ilianum ca </em><em>hay</em><em> i dapas</em><em>. (V know-not connector he V like)</em></p>
<p>Does this mean I do not know what it is that he likes, or I do not know the fact that he likes it?</p>
<p>To resolve this ambiguity, we can make the meaning explicit:</p>
<table>
<tr><th>Addition</th><th>Meaning</th><th>Example</th></tr>
<tr><td>ilwol</td><td>thing</td><td>i ilianum ilwol ca hay i dapas →  I don&#x27;t know the thing he likes</td></tr>
<tr><td>elireva</td><td>truth, fact</td><td>i ilianum elireva ca hay i dapas →  I don&#x27;t know the fact  that he likes it</td></tr>
</table>
<p>Notice that for other types of question words (cadom, caei, cali, etc) this ambiguity does not appear. For this reason, you can use them as indirect questions without concern. </p>
<p><em>i ilianum </em><em>cadom run (V know-not where you) = I don&#x27;t know where you are</em></p>
</div>
</details>

<details class="gr-sec">
<summary>18. Connectors and Conjunctions</summary>
<div class="gr-content">
<h4>18.1 Basic Connectors</h4>
<table>
<tr><th>Word</th><th>Meaning</th><th>Example</th></tr>
<tr><td>su</td><td>and / also / with</td><td>i mo e mocen su e moaria</td></tr>
<tr><td>dou</td><td>or</td><td>i mo e mocen dou e moaria</td></tr>
<tr><td>mai</td><td>but</td><td>i anidai mo, mai i doum</td></tr>
<tr><td>eta</td><td>therefore / so</td><td>i daium, eta i anifou i mo</td></tr>
</table>
<p>su is versatile, as it connects words within blocks or between. It can also be used between sentences and paragraphs. Some examples:</p>
<pre>i mo e mocen su moaria    → I eat chocolate and apple
i mo su mouje                  → I eat and drink
i anvu su run                  → I go with you</pre>
<h4>18.2 Temporal Connectors</h4>
<table>
<tr><th>Word</th><th>Meaning</th></tr>
<tr><td>notam</td><td>first / before (the earlier event)</td></tr>
<tr><td>notor</td><td>then / second (the later event)</td></tr>
<tr><td>cali</td><td>when</td></tr>
<tr><td>lar</td><td>once / at some point in the past</td></tr>
<tr><td>noli</td><td>now</td></tr>
<tr><td>noi</td><td>here / this</td></tr>
<tr><td>yadetu</td><td>finally</td></tr>
<tr><td>toram</td><td>suddenly</td></tr>
</table>
<p>notam and notor mark order, not calendar time:</p>
<pre>notam i mo, notor i bonfene     → first I eat, then I lie down
notam i mo, i bonfene                → first I eat, (then) I lie down
i mo, notor i bonfene                → (first) I eat, then I lie down</pre>
</div>
</details>

<details class="gr-sec">
<summary>19. Numbers</summary>
<div class="gr-content">
<h4>19.1 Cardinal Numbers</h4>
<table>
<tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>
<tr><td>tam</td><td>tor</td><td>par</td><td>bale</td><td>alui</td><td>teva</td><td>peri</td><td>auta</td><td>tenda</td><td>das</td></tr>
</table>
<h4>19.2 Numbers Beyond 10</h4>
<p>Larger unit first:</p>
<pre>das tam = 11    das par = 13    tor das = 20
par das = 30    par das bale = 34</pre>
<h4>19.3 Ordinals</h4>
<p>Add -ganter to any cardinal: tam ganter = first, tor ganter = second, par ganter = third</p>
<h4>19.4 Time Units</h4>
<table>
<tr><th>Word</th><th>Meaning</th><th>Built from</th></tr>
<tr><td>litam</td><td>day</td><td>li + tam (1)</td></tr>
<tr><td>liperi</td><td>week</td><td>li + peri (7)</td></tr>
<tr><td>lipardas</td><td>month</td><td>li + pardas (30)</td></tr>
<tr><td>lidastor</td><td>year</td><td>li + dastor (12)</td></tr>
</table>
<pre>litamar = yesterday    litamis = tomorrow
liperiar = last week   liperis = next week</pre>
<h4>19.5 Large Numbers — nen / pohnen</h4>
<p>pohnen (power), short form nen, base 10:</p>
<pre>nen tor = 100 (10^2)      
nen par = 1,000 (10^3)
nen teva = 1,000,000 (10^6)  
nen tenda = 1,000,000,000 (10^9)</pre>
<p>For example, one may say: </p>
<p>auta nen tor = 800      </p>
<p>tor nen teva = 2,000,000     </p>
<p>mir nen tenda = billions</p>
<h4>19.6 Atomic Numbers — pogai</h4>
<p>Chemical elements by pogai (atom) + atomic number:</p>
<pre>pogai auta = oxygen (8)    pogai tor das teva = iron (26)</pre>
<h4>19.7 Fractions</h4>
<p>Fractions use the pattern [numerator] de [denominator], literally &quot;X of Y.&quot; de is the same &quot;of/from&quot; already in the grammar.</p>
<pre>tam de tor    = 1 of 2 = half
tam de par    = 1 of 3 = a third
tam de alem   = 1 of 4 = a quarter
tam de das    = 1 of 10 = a tenth
tor de par    = 2 of 3 = two thirds</pre>
<p>In use:</p>
<pre>i mo e tam de tor                  → I ate half the food
hay i none e tam de bale de nen tor  → she has a quarter of 100
a tam de tor de lidastor i dami      → half a year remains (ligo is preferred here when talking about time, meaning &quot;half&quot;)</pre>
<p>The ne gradation system may also express a fraction, such as nealui = 5/10 = half, neteva = 6/10 etc. The difference is that ne is commonly used to indicate the intensity of the word they modify, and not the quantity.</p>
<h4>19.8 Percentages</h4>
<p>Percentages use the pattern de nen tor, literally &quot;of 100.&quot; This is the same pattern as other fractions.</p>
<pre>alui das de nen tor    = 50 of 100 = 50%
ce coter de nen tor?    = what number out of 100? = what percentage?</pre>
</div>
</details>

<details class="gr-sec">
<summary>20. Colors</summary>
<div class="gr-content">
<p>There are 7 basic color names, representing hues:</p>
<table>
<tr><th>Word</th><th>Meaning</th></tr>
<tr><td>yogali</td><td>brown</td></tr>
<tr><td>yopoh</td><td>red</td></tr>
<tr><td>yomel</td><td>black, dark</td></tr>
<tr><td>yosari</td><td>yellow</td></tr>
<tr><td>yoyar</td><td>white, light</td></tr>
<tr><td>yoyol</td><td>blue</td></tr>
<tr><td>yolei</td><td>green</td></tr>
</table>
<p>With the following system, we can express many different colors with this small vocabulary. There are three ways to create other color names.</p>
<h4>20.1 Combining Hues</h4>
<p>You can combine hues with a hyphen. For example, yopoh-sari (red-yellow) is orange.</p>
<h4>20.2 Luminosity</h4>
<p>Luminosity is indicated by yoyar (light) and yomel (dark). For example, yomel yoyol (dark blue) is navy blue. As you move to the center of the image below, the color turns darker (yomel), and as you move to the outer side, the color turns lighter (yoyar).</p>
<h4>20.3 Saturation</h4>
<p>Saturation is represented by yogafei. If you use yogafei before the color, it means the less saturated version. For example, yogafei yopoh-yol (less saturated red-blue) means lavender.</p>
<p>See below how to say different colors:</p>
<p><img src="/images/colors.png" alt="Oravia color wheel" style="max-width:100%;height:auto;"></p>
</div>
</details>

<details class="gr-sec">
<summary>21. Existential Sentences — dami</summary>
<div class="gr-content">
<p>dami (to exist / there is) forms existential statements:</p>
<pre>i dami a moaria             → there is an apple
cedom a bonfene i dami?     → where is the bed?
en bo i dami a yunitam mo   → in the house there is a special dish</pre>
</div>
</details>

<details class="gr-sec">
<summary>22. Compounds, Modifiers and Importing</summary>
<div class="gr-content">
<p>In Oravia, you have a lot of flexibility in create new meanings. In this section we will explore common ways to do that.</p>
<h4>22.1 Modifiers</h4>
<p>Modifiers always come before what they modify. A long noun phrase like de yamirli heivio haijor (of the old magic witch) reads left to right, with each word narrowing the description of what follows.</p>
<p>The combination of modifier + noun may also be used to create new meanings. Here are a few examples.</p>
<table>
<tr><th>Head</th><th>Meaning</th><th>Examples</th></tr>
<tr><td>gel</td><td>relation through marriage, in-laws</td><td>gel fare (parent-in-law)</td></tr>
<tr><td>leo</td><td>member, adherent, belonger</td><td>eodyel leo (group member), rodel leo (adherent of a worldview)</td></tr>
<tr><td>yelu</td><td>collection or set of X</td><td>leirih yelu (tree collection), roumir yelu (book collection)</td></tr>
<tr><td>dom</td><td>place dedicated to X</td><td>roesau dom (study place), mo dom (eating place)</td></tr>
<tr><td>gon</td><td>one bounded particle, piece, or unit of X</td><td>malveni gon (grain of sand), lupupi gon (raindrop), ilian gon (piece of knowledge)</td></tr>
<tr><td>tai</td><td>leader or director of X</td><td>eodyel tai (group leader), roesau dom tai (head of a study place)</td></tr>
<tr><td>fano</td><td>offspring or descendant of X</td><td>miau fano (kitten), miwo fano (puppy)</td></tr>
<tr><td>ja</td><td>instrument or tool used for X</td><td>mo ja (eating tool, utensils), apasar ja (hanger)</td></tr>
<tr><td>jae</td><td>container, holder, fitting, or socket for X</td><td>luyar jae (lamp socket), yespai jae (shoe holder)</td></tr>
<tr><td>ora</td><td>idea, theory, doctrine, conceptual system</td><td>gaomem ora (theory of equality)</td></tr>
<tr><td>rodel</td><td>worldview, ideology, belief system</td><td>gaomem rodel (egalitarianism)</td></tr>
<tr><td>dia</td><td>practitioner, professional, agent, role</td><td>boemo dia (cook), roena dia (teacher)</td></tr>
<tr><td>yel</td><td>group of the stated number (with numerals); group formation</td><td>par yel (trio), teva yel (group of six)</td></tr>
</table>
<h4>22.2 Compounds — sol and -s</h4>
<p>A compound is opened by sol, and every word in it except the last takes -s. This signals they are forming one concept, rather than working as an adjective:</p>
<table>
<tr><th>Phrase</th><th>Reading</th></tr>
<tr><td>yaltan miau</td><td>a big cat (any big cat, descriptive)</td></tr>
<tr><td>sol yaltans miau</td><td>big-cat as a type = lion or tiger</td></tr>
<tr><td>sol yedis yaltans miau</td><td>striped-big-cat = tiger specifically</td></tr>
<tr><td>yahlul yaltan apafene</td><td>a seat that is soft and big</td></tr>
<tr><td>sol yahluls yaltans apafene</td><td>soft-big-seat = couch (concept)</td></tr>
</table>
<p>Note: if you have trouble with the pronunciation of consonant clusters, you may add a short unstressed 'i' between them: yahluls -> yahlul(i)s.</p>
<p>sol is not mandatory. It helps listeners identify that a compound is coming, but it may be dropped to prevent repetition and long expressions.</p>
<p>Here are a few more examples:</p>
<p><em>sol lufus bei</em> = air-vehicle = airplane</p>
<p><em>sol was jasru</em> = ocean-bend = bay</p>
<p><em>sol lufus yahlul</em> = air-soft = fluffy</p>
<p><em>sol was garel</em> = water-up = fountain</p>
<p><em>sol yalgais mus</em> = small-bug = ant</p>
<p><em>sol selyinos li</em> = plan-time = schedule</p>
<p><em>sol was dom</em> = water-land = island</p>
<p>Notice you can be as specific as you&#x27;d like by adding more descriptions to your compound. If you think sol lufus bei (air-vehicle) is not enough specificity for what you want to express as airplane, you can for example say sol jeluins lufus bei (winged-air-vehicle).</p>
<h4>22.3 Hyphenated Combinations</h4>
<p>The hyphen signals is different from the compound because its main function is not to describe a single concept using multiple words. Instead, it is giving flavor and color to the second word, usually a verb. </p>
<pre>i ilofun-vardei   → to hesitant-look, to peek with doubt
i toului-asfe   → to tired-stop, to give up
i raidana-ilaluan   → to surrender-say, to concede
i tosrei-neiden   → to bitter-develop, to feed into your bitterness</pre>
<p>You can also use hyphens to achieve more fine-grained meanings, blending two experiential flavors together. This is commonly done with emotions or abstract nouns:</p>
<pre>aela-tohlel   → joy + longing, a type of nostalgic happiness
tohpu-oipoh   → sadness + excitement, a type of bittersweetness, holding loss and anticipation at once
mirli-elivon   → much time + wisdom, understanding that comes with time</pre>
<p>Here are some common uses of hyphens. Remember, the main action is always the last:</p>
<table>
<tr><th>Pattern</th><th>Meaning</th><th>Examples</th></tr>
<tr><td>X-[da]vio</td><td>become or change into state X</td><td>i yopoh-vio (become red), i yalen-vio (become tall), i toului-vio (become tired)</td></tr>
<tr><td>cio-X</td><td>perform X incorrectly or with unintended wrong result</td><td>i cio-ilian (misunderstand), i cio-ilahai (misspeak), i cio-anye (do incorrectly)</td></tr>
<tr><td>X-gue</td><td>characteristically inclined, disposed toward X</td><td>ilahai-gue (talkative), tohvor-gue (fear-prone), anvu-gue (restless)</td></tr>
<tr><td>ano-X</td><td>apart, away</td><td>i ano-anvu (disperse), i ano-anona (distribute)</td></tr>
<tr><td>ram-X</td><td>sudden X, burst into X</td><td>i ram-ilahai (burst into speech), i ram-apavu (suddenly start running)</td></tr>
<tr><td>rul-X</td><td>repetitive X</td><td>i rul-ilahai (repetitive speaking)</td></tr>
</table>
<p>We may also join together two actions to represent an end state. Following the general rule, the first word colors the meaning while the last word is the main verb.</p>
<table>
<tr><th>Example</th><th>Gloss</th></tr>
<tr><td>i copei-siyal</td><td>to search-find, find by searching</td></tr>
<tr><td>i ancem-tinen</td><td>to twist-break, twist until it breaks</td></tr>
<tr><td>i tuldac-tidetu</td><td>to crash-die, die from a crash</td></tr>
<tr><td>i poelve-bospupi</td><td>to clean-wash, wash until clean</td></tr>
</table>
<p>We hyphenate only two words. If you want to combine multiple, prefer to rephrase instead of stacking. For example:</p>
<pre>toram i yopoh-vio = suddenly it becomes red</pre>
<h4>22.4 Comparing the options</h4>
<p>Compounds introduce categories. Categories have a &quot;prototype&quot;, with features people perceive as being the most representative or essential of that category.</p>
<p>If you want to say bat, saying something like &quot;black-animal&quot; (as a compound) does not work because being black is not what&#x27;s essential of that category. But you could say &quot;black animal&quot; (as an adjective) to refer to a bat that is in fact a black animal.</p>
<p>If we want to say &quot;bat&quot;, saying &quot;flying-mammal&quot; works because this is essential of the category. And because of the distinction between compounds and adjectives, we can say things like &quot;a non-flying flying-mammal (bat)&quot; because being a flying-mammal is representative of the bat category, even if this specific bat does not fly.</p>
<p>So the distinction is:</p>
<p>. compounds: multiple words to refer to a single concept or category, forming a block by sol + -s.</p>
<p>. modifier: the word that comes before is a characteristic of the following word</p>
<p>. hyphen: two words united by a hyphen, the second usually a verb being flavored by the first</p>
<p>Don&#x27;t worry too much about the distinction. Overtime the uses become intuitive, and there is overlap such that for a specific case there may be no one right choice.</p>
<h4>22.5 Imported Words and Scientific Names</h4>
<p>Words not in the official vocabulary are preceded by &#x27; (apostrophe). There are three common cases:</p>
<p>	a) Names, places, dishes, languages, religions, ethnicities and other cultural words: use the name the community uses, such as &#x27;Italia for Italy and &#x27;Nihongo for Japanese language</p>
<p>	b) Flora and fauna: use the scientific names with a definition at first use. For example, &quot;robin&quot; is turdus, &quot;palm tree&quot; is palmae, &quot;daffodil&quot; is narcissus, and &quot;tarragon&quot; is artemisia dracunculus. </p>
<p>	Using scientific names has many advantages: it makes the referent more specific (different languages have difference conceptual spaces for flora and fauna), it avoids adding thousands of created words to the vocabulary, and we learn new things</p>
<p>	c) Coined or created words: new words invented by a speaker for style or a concept not in the official list</p>
<p>For species and coined words, define the word at its first use with a compound:</p>
<pre>En borlu, i vardei e &#x27;miautan.
*miautan = sol yedis yaltans miau, *panthera tigris*</pre>
<p>The ' signals to the reader: this word is not in the core vocabulary. Imported and coined words never enter the core vocabulary. </p>
</div>
</details>

<details class="gr-sec">
<summary>23. Adjectives and Adverbs</summary>
<div class="gr-content">
<p>The modifier always comes first:</p>
<pre>mogali moulu        → coffee milk = coffee-flavored milk
yamirli heivio dia  → old magic-doer (witch/wizard)</pre>
<p>In Oravia, any word can function as a modifier. Prefer to use modifiers close to what they modify to increase clarity. When further disambiguation is needed, these strategies are available:</p>
<h4>23.1 Hyphenated Verb</h4>
<p>Hyphenate the modifier to the verb to signal it modifies the action:</p>
<pre>nim i yasoi-apavu       → I fast-run / I run fast
(yasoi bound to apavu: the running is fast)</pre>
<h4>23.2 Fronted Modifier Outside the Verb Block</h4>
<p>Place the modifier outside the verb block to signal it applies to the action as a whole:</p>
<pre>yasoi nim i apavu      → fast, I run = I run fast
(yasoi outside [nim] and [i apavu] blocks)</pre>
<h4>23.3 Adjective Use</h4>
<p>A modifier before a noun reads as an adjective:</p>
<pre>a yasoi apavu           → a fast runner
a yaltan bo             → a big house
a yamirli heivio dia    → an old witch</pre>
<h4>23.4 Disambiguation</h4>
<p>For absolute clarity, you can make the reading explicit.</p>
<p><strong>non</strong> (way/manner) marks an adverbial phrase:</p>
<pre>i apavu non yasoi   → I run in a fast way</pre>
<p><strong>ya</strong> (objective quality) marks an adjectival reading explicitly:</p>
<pre>a ya anro ilhei          → a person who has the quality of decision, decisive</pre>
<p>These explicit disambiguators are optional in most contexts but resolve ambiguity in complex sentences. </p>
<h4>23.5 Cause vs Experiencer — -saba and -tava</h4>
<p>Some adjectives may be ambiguous to who is actually experiencing the feeling or sensation. For example, is oihi interesting or interested? How to differentiate?</p>
<p>In a copula, the bare form usually means the noun:</p>
<pre>run a eleyel            → you are love
run a oihi              → you are interest</pre>
<p><strong>-saba</strong> marks the cause:</p>
<pre>run a eleyel-saba       → you are loveable (causes love)
run a oihi-saba         → you are interesting (causes interest)</pre>
<p><strong>-tava</strong> marks the experiencer:</p>
<pre>run a eleyel-tava       → you are loving (experiences love)
run a oihi-tava         → you are interested (experiences interest)
a oihi-tava ilhei       → an interested person</pre>
<p>Notice that this is similar to verbs. With verbs, the base form defaults to the experiencer and the cause is specified with -saba. With modifiers and adjectives, both experiencer and cause may be specified with -saba or -tava with no particular default (see §14). </p>
</div>
</details>

<details class="gr-sec">
<summary>24. Comparison</summary>
<div class="gr-content">
<h4>24.1 Comparative — ga</h4>
<p>ga means &quot;compared to.&quot; It introduces the reference point:</p>
<pre>ga [x], a [y] a [adjective]
compared to x, y is more [adjective]
 
ga nim fasujal, a nim a yamirli      → I am older than my brother
a bo a yaltan ga run bo              → the house is bigger than yours</pre>
<h4>24.2 Equality — gaomem</h4>
<p>gaomem means &quot;the same.&quot; With ga it expresses &quot;as [adjective] as&quot;:</p>
<pre>ga run, a nim a gaomem yalen          → I am as tall as you</pre>
<h4>24.3 Superlative — anodu</h4>
<p>anodu means &quot;top / the most.&quot; Use de to specify the group:</p>
<pre>a [y] a anodu [adjective] de [group]
 
a run fano a anodu yalen              → your child is the tallest
a fatore a anodu yunro de fatore  → my grandparent is the smartest among grandparents</pre>
</div>
</details>

<details class="gr-sec">
<summary>25. The ne Gradation System</summary>
<div class="gr-content">
<p>ne + number expresses degree on a scale from 0 to 10. It applies to any gradable word:</p>
<table>
<tr><th>Expression</th><th>Meaning</th></tr>
<tr><td>nesunya [word]</td><td>0/10 — not at all</td></tr>
<tr><td>netor [word]</td><td>2/10 — a little</td></tr>
<tr><td>nepar [word]</td><td>3/10 — somewhat</td></tr>
<tr><td>nealem [word]</td><td>4/10 — fairly</td></tr>
<tr><td>nealui [word]</td><td>5/10 — halfway</td></tr>
<tr><td>neteva [word]</td><td>6/10 — rather</td></tr>
<tr><td>neperi [word]</td><td>7/10 — quite</td></tr>
<tr><td>neauta [word]</td><td>8/10 — very</td></tr>
<tr><td>nedas [word]</td><td>10/10 — completely</td></tr>
<tr><td>nedastam [word]</td><td>11/10 — too much</td></tr>
</table>
<p>With lirul (habit) for frequency:</p>
<pre>nesunya lirul = never     nepar lirul = sometimes
neauta lirul = often      nedas lirul = every time</pre>
<p>With ilie (likelihood):</p>
<pre>nesunya ilie = impossible    nealui ilie = 50/50
neperi ilie = likely         nedas ilie = certainly</pre>
<p>Other examples:</p>
<pre>nebale antori = 4/10 open = ajar
nepar luyar    = 3/10 light = dimly lit</pre>
<p>Notice this allows for expressiveness, precision, and avoids adding dozens of words to the vocabulary.</p>
</div>
</details>

<details class="gr-sec">
<summary>26. Pluralization and Definiteness</summary>
<div class="gr-content">
<h4>26.1 Pluralization</h4>
<p>Oravia has no plural morphology. The bare noun covers both singular and plural, and context usually makes the number clear:</p>
<pre>miau i bonfene         → a cat is sleeping / cats are sleeping</pre>
<p>When explicit plurality is needed, use mir (many), niu (indefinite quantity greater than one), or other words as you choose:</p>
<pre>
niu miau               → cats
mir miau               → many cats
tor miau               → two cats
par das miau           → thirty cats</pre>
<h4>26.2 Definiteness</h4>
<p>There are no articles. Definiteness is handled pragmatically: first mention is typically indefinite, subsequent mention is definite. When additional specificity is needed, demonstratives or context words anchor the reference:</p>
<pre>o miau            → the cat (o = emphasis)
noi miau               → this cat (noi = here/this)
tam ganter litam       → the first day (in a sequence)</pre>
</div>
</details>

<details class="gr-sec">
<summary>27. Only and Also/Too</summary>
<div class="gr-content">
<p>English only covers several genuinely different ideas. Compare:</p>
<pre>"I have only ten minutes." — a small quantity, no more than
"I only wanted to help." — softening, no big deal
"Only Maria came." — exclusive, no one else</pre>
<p>Oravia treats these as separate words.</p>
<h4>27.1 negafei — small quantity, no more than</h4>
<p>negafei is from the NE cluster (quantifiers) + gafei (less).</p>
<pre>i vanta negafei tam coupa    → I have only one card</pre>
<h4>27.2 bi gai — merely, just</h4>
<p>bi gai combines the bi stance marker with gai (easy, simple). The speaker is minimizing or softening, framing something as "no big deal". This is the "just" in <em>I'm just a student</em> or <em>I just wanted to help</em>.</p>
<pre>bi gai i dai i elomiu    → I just want to help
bi gai i ilaluan         → I'm just saying</pre>
<p>Because it uses bi, this is always a speaker's stance.</p>
<h4>27.3 dantam — exclusively / and no others</h4>
<p>dantam is formed by DAN (emphasis) + TAM (one, single). It singles out one entity above all others.</p>
<pre>dantam a Maria i anifi              → Only Maria came
dantam a run i ilidai e noi dasora  → Only you intended this purpose</pre>
<h4>27.4 su — Also/Too</h4>
<p>su already appears as the connector "and/also/with" (placed before or between elements). When placed after a word, it takes on the meaning "also / too," emphasizing that the word it follows is included in addition to something already established.</p>
<p>The position distinguishes the two uses:</p>
<pre>Before/between = "and/with" (connector):
nim su run i anvu           → I and you go / I go with you
 
After a word = "also/too" (focus):
hay i anocari su            → she also left / she left too
nim i mo, hay su            → I eat; she does too
neloa i mo su               → everyone also eats</pre>
</div>
</details>

<details class="gr-sec">
<summary>28. The Emphasis Marker o</summary>
<div class="gr-content">
<p>o is the fifth sentence marker. It spotlights whatever immediately follows it.</p>
<h4>General emphasis</h4>
<pre>o nim!              → it&#x27;s ME!
nima o i anvu       → we ARE going</pre>
<p>o is very versatile. Take a look at this exchange:</p>
<pre>bi yuba    (that&#x27;s good)
o yuba!    (it sure is!)</pre>
<h4>Before a verb — imperative</h4>
<p>When o precedes a verb without a specified subject, it reads as a command:</p>
<pre>o i anona!     → Give it!
o yadetu!      → Stop!
o i anvu!      → Go!</pre>
<h4></h4>
<h4>Before the object — passive</h4>
<p>When o precedes an e-marked object, the object becomes the focus. This is the passive-like construction:</p>
<p>Summary:</p>
<pre>o [word]        → emphasis / spotlight
o i [verb]      → imperative
o e [object]    → passive</pre>
<h4>Own — Possession with Emphasis</h4>
<p>Oravia has no separate word for &quot;own.&quot; To express &quot;my own&quot;, place o before the possessive phrase:</p>
<pre>nim bo         → my house
o nim bo        → my OWN house / specifically my house
de elihei       → of self (if additional clarity is needed)</pre>
<p>The o marker already in the language carries the meaning.</p>
</div>
</details>
</div>
</details>

---

<details class="gr-part">
<summary><strong>Part IV — Building Complex Sentences</strong></summary>
<div class="gr-content">
<details class="gr-sec">
<summary>29. Passive Voice</summary>
<div class="gr-content">
<h4>29.1 o e — Emphasis on object</h4>
<p>Use the o emphasis marker before the e-marked object. This makes the object become the focus, and recedes the subject:</p>
<pre>o e leirih i vonlu              → the tree was touched
i yean o e yemiodu              → the pillow was sewn
a eofa i vanpai o e falen       → the kid was kicked by the friend</pre>
<h4>29.2 hue — Resultant state passive</h4>
<p>hue after a verb describes the resulting state, not the event itself, but how things stand now:</p>
<pre>a coupa a ancem hue             → the card is turned (current state)</pre>
<h4>29.3 Choosing between them</h4>
<pre>o e coupa i anopu               → the card was lost (event narration)
a coupa a anopu hue             → the card is lost (current state)</pre>
</div>
</details>

<details class="gr-sec">
<summary>30. The Speaker Comment Marker bi</summary>
<div class="gr-content">
<p>bi introduces the speaker’s emotional reaction or editorial commentary. bi phrases can be inserted anywhere, usually in the beginning or ending of sentences:</p>
<pre>nim i faigel bi oipoh!     → I&#x27;m getting married — how exciting!
bi oila a nim en bo        → I&#x27;m so happy to be home</pre>
<p>Commentaries can also be used as an exclamation:</p>
<pre>bi oipoh!      → how exciting!
bi tohpu!      → how sad!</pre>
<p>They can also be combined:</p>
<pre>bi ti-yuba   → that&#x27;s bittersweet (bad-good)</pre>
</div>
</details>

<details class="gr-sec">
<summary>31. How to Add Comments</summary>
<div class="gr-content">
<p>Many languages use small particles at the end of sentences to add emotional tone, epistemic stance, or pragmatic coloring. Oravia handles most of this through a small set of elements that can appear in sentence-final or clause-final position (although they can go in other positions too).</p>
<h4>31.1 bi — Emotional / Editorial Comment</h4>
<p>bi is the primary one. It can appear anywhere but naturally gravitates toward sentence-final or pre-comment positions.</p>
<h4>31.2 ilie — Epistemic Hedging</h4>
<p>ilie (maybe/likelihood) softens it into a possibility or expresses the speaker&#x27;s uncertainty:</p>
<pre>nim i anvu ilie         → I might go / I&#x27;m going maybe
hay i anifi litamis ilie     → she might arrive tomorrow</pre>
<h4>31.3 o — Spotlight / Assertion</h4>
<p>o at the end of a phrase or sentence puts final emphasis on what just came, asserting it or marking it as the key point:</p>
<pre>o hay !           → it&#x27;s HER! 
o noi             → right here (emphasis on the location)
hay o i anocariar    → she DID leave</pre>
<h4>31.4 The System as a Whole</h4>
<p>These three (bi, ilie, and o) cover the main functions of sentence-final particles cross-linguistically:</p>
<table>
<tr><th>Element</th><th>Function</th><th>Analogy</th></tr>
<tr><td>bi</td><td>emotional/editorial commentary</td><td>Japanese ね、よ、わ... and more</td></tr>
<tr><td>ilie</td><td>epistemic uncertainty / softening</td><td>English &quot;maybe&quot;, Japanese かも</td></tr>
<tr><td>o</td><td>spotlight / assertion / emphasis</td><td>Japanese ぞ、よ (assertive)</td></tr>
</table>
</div>
</details>

<details class="gr-sec">
<summary>32. Relative Clauses</summary>
<div class="gr-content">
<p>Oravia forms relative clauses using the same connectors introduced in §15.3: ca, caei, cadom, cali, caora, canon, cane. The connector comes immediately after the noun being modified and introduces the subordinate clause. The connector slot simply matches the grammatical role of the missing element within the relative clause.</p>
<p>The key connectors and their roles in relative clauses:</p>
<table>
<tr><th>Connector</th><th>Use in relative clause</th></tr>
<tr><td>ca</td><td>replaces a thing (object, fact): the food that, the idea that</td></tr>
<tr><td>caei</td><td>replaces a person: the person who</td></tr>
<tr><td>cadom</td><td>replaces a place: the house where</td></tr>
<tr><td>cali</td><td>replaces a time: the day when</td></tr>
<tr><td>caora</td><td>replaces a reason: the reason why</td></tr>
<tr><td>canon</td><td>replaces a manner: the way in which</td></tr>
</table>
<p>Examples:</p>
<pre>a ilhei caei i ilaluan u nim
the person who told me
(ilhei = person; caei replaces the subject of ilaluan)
 
a bo cadom nim i elemi
the house where I live
(cadom replaces the location)
 
a mo ca nim i anidai
the food that I want
(ca replaces the object of anidai)
 
a litam cali nim i anocariar
the day when I left
(cali replaces the time)</pre>
<h4></h4>
<h4>Whose and With Which</h4>
<h4>For whose we can rephrase the sentence, or use &quot;cade&quot; (ca + de, possessive):</h4>
<pre>faejal cade fano nim i ilian
(the man whose child I know)</pre>
<h5></h5>
<h5>&quot;With which / using which&quot; — the knife with which I cut bread:</h5>
<pre>a jahvel ca nim i anja i jasrec e malvae
(the knife that I use to cut bread)

jasrec malvae jahvel
(cut bread knife)</pre>
</div>
</details>

<details class="gr-sec">
<summary>33. Reported and Direct Speech</summary>
<div class="gr-content">
<h4>33.1 Reported Speech</h4>
<p>Reported (indirect) speech uses ca as the connector between the speech verb and the reported clause. The reported clause takes its own markers as if it were a standalone sentence, with no change of person or tense required, since Oravia has no obligatory marking:</p>
<pre>i ilaluan ca hay i anvu
I said that he is going
 
haya i ilaluan ca a nim a ti
they said that I am bad
 
nfarejor i ilaluan ca litamis i dami a yuba mo
my mother said that tomorrow there will be good food</pre>
<h4>33.2 Direct Speech</h4>
<p>Direct (verbatim) speech uses no as connector, or quotations. The quoted speech follows the speech verb immediately:</p>
<pre>i ilaluan no hay i anvu
I said such: he is going
 
farejor i ilaluan &quot;litamis i dami a yuba mo&quot;
my mother said &quot;tomorrow there will be good food&quot;</pre>
</div>
</details>

<details class="gr-sec">
<summary>34. Coordination Within Phrases</summary>
<div class="gr-content">
<p>su (and/also/with) works at both the sentence level and inside phrases. Its position determines what it coordinates. </p>
<h4>34.1 Coordinating Adjectives (One Noun)</h4>
<p>su between two adjectives before a noun = both adjectives modify the same noun:</p>
<pre>yohisa su yoyol beivu       → red-and-blue vehicle
(one vehicle that is both red and blue)
 
yuba su yunro dia           → good-and-smart person
(one person who is both)</pre>
<h4>34.2 Coordinating Noun Phrases (Multiple Nouns)</h4>
<p>su between two full noun phrases = two separate referents:</p>
<pre>yohisa beivu su yoyol beivu → red vehicle and blue vehicle
(two separate vehicles)
 
yuba dia su yunro dia       → a good person and a smart person
(two people)</pre>
<h4>34.3 Coordinating Verbs and Objects</h4>
<p>The same logic applies to verbs and objects:</p>
<pre>nim i mo su i mouje         → I eat and drink (two verbs)
nim i mo e mocen su e moaria → I eat chocolate and apple (two objects)
nim i mo e mocen su nim i mouje e mogali
→ I eat chocolate, and I drink coffee (two full clauses)</pre>
</div>
</details>

<details class="gr-sec">
<summary>35. Correlatives</summary>
<div class="gr-content">
<p>Correlatives are expressions like &quot;everyone,&quot; &quot;somewhere,&quot; &quot;nothing,&quot; &quot;always.&quot; They are built with words already in the vocabulary.</p>
<h4>35.1 Quantity Words</h4>
<pre>sunya    → no / none / not any
nehen    → each
noniu    → some / a certain
neloa    → all / every</pre>
<h4></h4>
<h4>35.2 Combining with Domain Words</h4>
<p>Add a domain word to specify the type of referent. The most common combinations:</p>
<pre>+ ilhei (person/self)
  sunya ilhei    → no one
  nehen ilhei    → each person
  noniu ilhei    → someone
  neloa ilhei    → everyone
 
+ dom (place)
  sunya dom      → nowhere
  nehen dom      → each place
  noniu dom      → somewhere
  neloa dom      → everywhere
 
+ ora (idea / reason)
  sunya ora      → for no reason
  nehen ora      → each reason
  noniu ora      → for some reason
  neloa ora      → for any reason / every reason
 
+ mo (food / thing in context)
  sunya mo       → nothing to eat / nothing [in food context]
  nehen mo       → each food
  noniu mo       → something to eat
  neloa mo       → everything, all the food</pre>
<p>Any domain word works; the pattern is fully open. noniu litam = some day, sunya elemi dom = nowhere to live, neloa de nim = everything of mine.</p>
<h4>35.3 Dropping the Domain Word</h4>
<p>When the referent type is clear from context, the domain word drops. The quantity word alone carries the full meaning:</p>
<pre>neloa i ilian          → everyone knows
(ilhei dropped — the subject slot already implies a person-doer)
  
noniu i dami en bo     → something is in the house
 
neloa a ancem hue      → everything has been turned</pre>
<p>That’s the norm in speech. The full form (neloa ilhei, neheh ilhei) is used when the domain genuinely needs to be made explicit or for emphasis.</p>
</div>
</details>

<details class="gr-sec">
<summary>36. Conditionals</summary>
<div class="gr-content">
<h4>36.1 iliciu — Counterfactual / Imagined</h4>
<p>Use iliciu for hypothetical, contrary-to-fact, or imagined situations. </p>
<pre>iliciu i ilian canon, i anye → if I knew how, I would do it (imagine: I know how, I do it)
iliciu i moarum, toumo → if I hadn&#x27;t eaten, I would have been hungry </pre>
<h4>36.2 daefer — Factual If-Then</h4>
<p>Use daefer for logical truths and real-world cause-and-effect. The effect is commonly preceded by eta (then, therefore), although it may be dropped:</p>
<pre>daefer nim i apanou e moaria, eta a moaria i apanou (assume: I drop the apple, then: the apple falls)
if I drop the apple, it falls</pre>
<p>Notice that by using iliciu and daefer, we avoid many complicated verb forms in a lot of languages including English.</p>
</div>
</details>

<details class="gr-sec">
<summary>37. Concession — noder + mai</summary>
<div class="gr-content">
<p>Noder means &quot;even.&quot; Paired with mai (but), it expresses concession, as in &quot;even though X, Y.&quot; The structure is: noder [conceded clause], mai [main clause].</p>
<pre>i none e beivu, mai i dai i vanvu.
I have a car, but I like to walk.
 
Noder i none e beivu, mai i dai i vanvu.
Even (though) I have a car, I like to walk.
 
i eodya hue, mai anvum.
I was invited, but I am not going.
 
Noder i eodya hue, mai anvum.
Even (though) I was invited, I am not going.</pre>
<p>noder alone works as &quot;even&quot; in other contexts:</p>
<pre>noder nim i ando        → even I can
noder nepar             → even a little</pre>
</div>
</details>

<details class="gr-sec">
<summary>38. The More... The More...</summary>
<div class="gr-content">
<p>The correlative neron (more / additional) can be doubled across two clauses to express the proportional relationship &quot;the more X, the more Y&quot;:</p>
<pre>neron hay i &#x27;asufu, neron be dia i vanta e jovabo en hay
the more it blew, the more the traveler held his cloak around him</pre>
<p>The pattern: neron [first clause], neron [second clause]. The two neron phrases work just like the English &quot;the more... the more...&quot; — each intensification of the first event drives an intensification of the second.</p>
<pre>neron nim i ilaluan, neron nim i ando
the more I speak, the more I can
 
neron haya i mo, neron haya a yunro
the more they eat, the smarter they are</pre>
<p>For the reverse (&quot;the more X, the less Y&quot;), combine neron with gafei or a negated form:</p>
<pre>neron nim i bonfene, gafei nim i apavu
the more I sleep, the less I run</pre>
</div>
</details>
</div>
</details>

---

<details class="gr-part">
<summary><strong>Part V — Semantic Nuance</strong></summary>
<div class="gr-content">
<details class="gr-sec">
<summary>39. Relational Words</summary>
<div class="gr-content">
<p>Oravia has words that work like prepositions, specifying the semantic relationship between a phrase and the rest of the sentence. Unlike English prepositions, these are full content words with their own meanings. They always introduce a block and travel with it.</p>
<h4>39.1 (da)sora — Purpose</h4>
<p>sora (short form of dasora) marks the purpose or goal of an action. In English: &quot;in order to,&quot; &quot;to,&quot; &quot;for the purpose of&quot;:</p>
<pre>i anvu sora i gerina            → I go to buy / in order to buy
e coupa i anja sora daelipo     → the cards are used for prophecy</pre>
<h4>39.2 jetai — Direction</h4>
<p>jetai marks direction toward something. In English: &quot;toward,&quot; &quot;in the direction of&quot;:</p>
<pre>hay i anvu e varsus jetai nim   → she directed her ear toward me</pre>
<p>jetai is directional, not locational. Compare:</p>
<pre>nim i dami en bo   → I am at home (static location)
nim i anvu jetai bo     → I go toward the house (direction of movement)</pre>
<h4>39.3 anja — Instrument</h4>
<p>anja marks the tool or means used to accomplish something. In English: &quot;using,&quot; &quot;by means of,&quot; &quot;with&quot; (instrumental):</p>
<pre>i ilaluan anja coupa     → I communicate by card
i mo anja jadun               → I eat with a fork
i anvu anja bei               → I travel by vehicle</pre>
<p>anja is also a standalone verb meaning &quot;to use&quot; (nim i anja e coupa = I use the card).</p>
<p>Notice that the most common way to talk about using things is to construct them as verbs:</p>
<pre>i jadun             → I eat with a fork</pre>
<h4>39.4 caora — Reason (relational use)</h4>
<p>caora appears as a connector (because / the reason) but also introduces a reason phrase:</p>
<pre>a nim a tohpu caora siur de hay   → I am sad because of her disappearance
i moum caora tovei         → I don&#x27;t eat because of illness
 
As connector (introduces a clause):
caora a nim a toumo, i mo          → because I&#x27;m hungry, I eat</pre>
<h4>39.5 (an)lor — Benefit</h4>
<p>lor (short form of anlor) deepens the meaning of u by marking that an action is done specifically for someone’s benefit, not just directed at them as a recipient, but genuinely serving their interest.</p>
<p>Compare u and u lor:</p>
<pre>i anye u run   → I do it for you (you are the recipient)
i anye u lor run    → I do it for your benefit (a gift / act of service for you)</pre>
<p>u marks who receives. u lor adds that the action is a meaningful gift or service done out of care or generosity: the difference between handing someone something and genuinely doing something for them.</p>
<pre>
elori, o i anye e noi u lor nim     → please, do this for me (as a favor)
i boemo u lor run                   → I cook for your benefit (as a kindness)
hay i ilaluan u lor haya            → she told them for their sake (to help them)
i copei e coupa u lor nima          → I searched for the card for our sake</pre>
<p>This maps some natural languages, for example Japanese ageru/kureru and Portuguese por as distinct from para. u lor has the flavor of a deeper gift or act of service.</p>
</div>
</details>

<details class="gr-sec">
<summary>40. Location and Spatial Words</summary>
<div class="gr-content">
<h4>40.1 en — Location and Time</h4>
<p>en marks location (at, in, on) and time:</p>
<pre>i elemi en &#x27;San Antonio     → I live in San Antonio
hay en bo                   → she is at home
i copei en mir lidastor     → I searched for many years
en liyar                    → in the morning</pre>
<h4>40.2 Spatial Vocabulary</h4>
<table>
<tr><th>Word</th><th>Meaning</th></tr>
<tr><td>en</td><td>at / in / on (location)</td></tr>
<tr><td>jenpur</td><td>under / below</td></tr>
<tr><td>ganrih</td><td>above / over / up</td></tr>
<tr><td>jenparo</td><td>front / forward</td></tr>
<tr><td>anolu</td><td>out / away / external</td></tr>
<tr><td>jetai</td><td>direction / toward</td></tr>
<tr><td>noi</td><td>here</td></tr>
<tr><td>nordau</td><td>far</td></tr>
<tr><td>widuo</td><td>near / close by</td></tr>
</table>
</div>
</details>

<details class="gr-sec">
<summary>41. no — Similative and Nominal Complement</summary>
<div class="gr-content">
<p>no means &quot;like / as / similar to.&quot; One of the most versatile words in the language, it has two related uses.</p>
<h4>41.1 Similative — comparing actions or manners</h4>
<p>Use no to describe how something is done, or what something resembles in behavior:</p>
<pre>hay i vanvu no yamirli      → she walks like an old person
hay i neiden no falen       → she runs like a child
hay i bonfene no toulu      → she sleeps like she is tired</pre>
<p>no always comes before what it modifies.</p>
<h4>41.2 Nominal Complement — secondary predicate after a verb</h4>
<p>no also serves as a nominal complement, it introduces what something is called, or perceived as. </p>
<p>Some verbs this appears with: ilaluan (say), daelan (judge/consider), nomie (appear/seem), iliro (think as), couya (to call as).</p>
<pre>i couya e run no hehma        → I call you a monster
 
i daelan e hay no ti   → I judge him as bad / I consider him bad
 
i nomie no yufer             → it looks dirty / it appears dirty
 
i iliro ciude run no elonemi dia   → I think about you as a savior</pre>
<p>The pattern generally is [verb] e [object] no [characterization], where the no phrase tells you what the object is being called, or perceived as. Compare with the copula for direct identity:</p>
<pre>a run a hehma                        → you ARE a monster (direct statement)
i couya e run no hehma         → I CALL you a monster (framing via verb)</pre>
</div>
</details>

<details class="gr-sec">
<summary>42. Sensory and Perceptual Constructions</summary>
<div class="gr-content">
<p>nomie means &quot;to seem/appear&quot; in a general sense. Combined with no (like/as), it covers the English &quot;it seems,&quot; &quot;it appears,&quot; &quot;it looks like,&quot; etc.:</p>
<pre>i nomie no lupupi     → it seems like rain / it looks like rain
i nomie no elemi hue     → it seems inhabited / it appears to be lived in</pre>
<p>To specify which sense is involved, combine nomie with the relevant sensory word, either hyphenated or as a separate block:</p>
<pre>vardei (eye / sight):
  i nomie-vardei no lupupi   → it looks like rain
  i nomie no lupupi daciu    → it looks like rain (shape)

 
varsus (ear / hearing):
  i nomie-varsus no lupupi   → it sounds like rain
  i nomie no lupupi om       → it sounds like rain (sound)

varpi (nose / smell):
  i nomie-varpi no lupupi    → it smells like rain
  i nomie no lupui varpi     → it smells like rain
 
varluan (tongue / taste):
  i nomie-varluan no moval mogali  → it tastes like iced coffee</pre>
<p>Without a sensory word, nomie no is the general &quot;seems/appears like&quot; applicable to any perception or impression.</p>
</div>
</details>

<details class="gr-sec">
<summary>43. Causatives</summary>
<div class="gr-content">
<p>There are two general causatives: dosaba (neutral) and pohnen (forceful). The one being made to do something takes the a (subject) marker, and the caused action follows with i.</p>
<h4>43.1 Neutral Causative — dosaba</h4>
<p>dosaba is the default causative. It doesn&#x27;t say how the causing happened, so it works for any situation. As with other verbs, one may use long form (the full word dosaba) or short form (just the root saba; more informal).</p>
<pre>i dosaba ca a [causee]  i [caused action]
 
i dosaba ca a hay i mo
I made that him eat
 
farejor i saba ca a nim i bonfene
my mother made me lie down</pre>
<p>An alternative construction is with a hyphen, in which short form is preferred:</p>
<pre>[causer] i [verb]-saba e [causee]
 
haya i ilaluan-saba e falen
they made the child speak</pre>
<h4>43.2 Forceful Causative — pohnen</h4>
<p>pohnen is used when the causative is forceful or an imposition.</p>
<pre>i pohnen ca a [causee]  i [caused action]
 
i pohnen ca a hay i mo
I forced that him eat
(I imposed on him: eat)
 
haya i nen ca a falen i ilaluan
they forced the child to speak</pre>
<p>An alternative construction is with a hyphen:</p>
<pre>[causer] i [verb]-nen e [causee]
 
farejor i bonfene-nen e nim
my mother forced me to lie down</pre>
<h4>43.3 Other Causative Words</h4>
<p>You can use other words as causative for different flavors. For example, we use &quot;antai&quot; (to guide) as a soft causative:</p>
<pre>i antai ca a [causee]  i [caused action]
 
i antai ca a hay i mo
I guided that him eat
 
farejor i tai ca a nim i bonfene
my mother guided me to lie down
 
haya i tai ca a falen i ilaluan
they guided the child to speak</pre>
<p>When we are talking about emotions, states, or general things that do not require that the affected person perform an action, see section 14.</p>
</div>
</details>

<details class="gr-sec">
<summary>44. Reflexives and Reciprocals</summary>
<div class="gr-content">
<table>
<tr><th>Word</th><th>Meaning</th></tr>
<tr><td>elihei</td><td>self</td></tr>
<tr><td>rein</td><td>each other</td></tr>
</table>
<pre>haya i vardei e elihei      → they look at themselves
haya i vardei e rein        → they look at each other
i ilaluan u elihei          → I talk to myself</pre>
</div>
</details>

<details class="gr-sec">
<summary>45. Instead — domvio</summary>
<div class="gr-content">
<p>domvio (dom = place + vio = exchange) means &quot;instead,&quot; as in: in the place of, as a substitute for. It works as a relational word introducing the thing being replaced:</p>
<pre>i mouje domvio i mo          → I drank instead of eating
domvio i mo, i mouje         → instead of eating, I drank
hay i anvu domvio nim            → she went instead of me
hay i anvu domvio lor nim        → she went instead of me (as a sacrifice or gift)</pre>
<p>domvio can also be used as a verb meaning &quot;to substitute / to take the place of&quot;:</p>
<pre>i domvio e hay en anse  → I substituted for her in my job
a mogali i domvio e moulu   → coffee replaced milk</pre>
</div>
</details>

<details class="gr-sec">
<summary>46. Become, Turn Into, Start To</summary>
<div class="gr-content">
<p>Oravia expresses &quot;become,&quot; &quot;turn into,&quot; and &quot;start to&quot; through two words: ansau (start) and ancem (turn / change state).</p>
<h4>(an)sau — start</h4>
<p>Ansau means &quot;to start.&quot; Stack it with another verb to express &quot;begin doing / start to&quot;. Just as with other verb stacking, you can use short form:</p>
<pre>i ansau i toului      → I start to be tired / I get tired
i sau i ilian       → I start to understand / I come to understand
hay i sau i anvu        → she starts going / she starts to leave</pre>
<h4></h4>
<h4>(da)vio — change into / become</h4>
<p>Davio means &quot;change&quot;, you use &quot;no&quot; as complement:	</p>
<pre>i davio no roena dia   → I become a teacher

a jevial i davio no lenodur → the statue turns into stone

hay i davio no yamirli     → she becomes old

i davio e wa no luval  → I turn the water into ice
</pre>
<p>As with other hyphenated expressions, you can express change like this instead:</p>
<pre>a jevial i lenodur-davio → the statue turns into stone

hay i yamirli-davio → she becomes old</pre>
<p>For &quot;get [adjective]&quot; (get tired, get warm), both can apply depending on whether you emphasize the start of the process or arrival at the new state:</p>
<pre>i ansau i toului      → I start getting tired (process beginning)
i davio no toului      → I become tired (arrival at state)</pre>
<p>Remember as well that you can use any word as a verb:</p>
<pre>i yohisa e borcai    → to turn/to make the wall red (lit. to red the wall)</pre>
</div>
</details>

<details class="gr-sec">
<summary>47. Wish and Jussive</summary>
<div class="gr-content">
<h4>47.1 bi iloi — Wish</h4>
<p>bi iloi (bi = speaker comment + iloi = hope) expresses a wish or hope about something:</p>
<pre>bi iloi hay i anefene              → I wish/hope she rests
bi iloi a litamis a yuba           → I hope tomorrow is good
bi iloi nim i do i anocari         → I wish I could leave
bi iloi run i anocari              → I hope you leave</pre>
<h4>47.2 o i — Jussive (Let&#x27;s)</h4>
<p>The same o i [verb] construction used for commands (§28) also covers the first-person plural invitation (&quot;let’s&quot;). Context, punctuation marks, and intonation makes the reading clear: </p>
<pre>o i mo?          → shall we eat?
o i mo!          → eat!</pre>
<p>If you want your invitation to be absolutely unambiguous, you can use &quot;what do you think&quot;, or &quot;nima&quot;:</p>
<pre>ce iliro nima i mo?          → what do you think we eat?
o i mo nima / nima o i mo → let's eat</pre>
</div>
</details>

<details class="gr-sec">
<summary>48. Words in Flexible Roles</summary>
<div class="gr-content">
<h4>48.1 Words as Verbs</h4>
<p>Any word becomes a verb when placed after i. For many word types, the meaning follows the default <em>to use it in its primary function</em>, as specified: </p>
<table>
<tr><th>Word type</th><th>Default verb meaning</th><th>Example</th></tr>
<tr><td>Object / tool</td><td>as to use it</td><td>i jadur = to use a fork</td></tr>
<tr><td>Food / drink</td><td>to consume it</td><td>i mogali = to drink coffee</td></tr>
<tr><td>Container / surface</td><td>to put in/on it depending on object function</td><td>i bontame = to put on the table</td></tr>
<tr><td>Clothing / accessory</td><td>to put it on</td><td>i yesrel = to put on a jacket</td></tr>
<tr><td>Body part</td><td>to use it in its primary function</td><td>i varsus = to listen</td></tr>
<tr><td>Time Period</td><td>to spend that time</td><td>i limel = to spend the night</td></tr>
<tr><td>Vehicle</td><td>to conduct for transportation</td><td>i beivu = to drive a car</td></tr>
</table>
<p>Some words have a fixed meaning when used as a verb, since there may have multiple main functions. It's the case of door, which by convention means to enter (i bortal), and key, which means to unlock (i sever).</p>
<p>Some words, especially locations, qualities, and abstract nouns, don&#x27;t have a fixed meaning when used as a verb. This is deliberate.</p>
<p>i bo could mean to be at home, to go home, to enter. i tohpu could mean to feel sad, to act sad, to express sadness. Think of it as the unmarked, general, or poetic option. You may choose it when the specific reading is clear from context, when it doesn&#x27;t matter, or when you want the word to carry more than one resonance at once.</p>
<p>When you do want to be specific, the tools are already there:</p>
<h5>i bo — location as verb</h5>
<pre>hay en bo               → she is in the house
hay i anvu jetai bo          → she goes direction the house  
hay i bortal en bo           → she enters the house  
hay i bo-anvu                → she house-goes 
hay i bo-bortal              → she house-enters  
hay i bo e falen             → she houses/shelters a kid
</pre>
<h5>i tohpu — quality as verb</h5>
<pre>a hay a tohpu            → she is sad  (copula)
hay i davio no tohpu          → she becomes sad  
hay i tohpu-davio             → she sad-becomes  
hay i ciudon e tohpu          → she shows sadness  
hay i tohpu-anye              → she sad-acts  
hay i tohpu e falen           → she saddens the kid (causative via e)</pre>
</div>
</details>

<details class="gr-sec">
<summary>49. Evidentiality</summary>
<div class="gr-content">
<p>Oravia has an optional evidential system built on bi. Because bi already marks speaker stance, commenting on the source of the knowledge is as a natural extension of the same system.</p>
<h4>The Three Evidential Options</h4>
<table>
<tr><th>Phrase</th><th>Built from</th><th>Meaning</th></tr>
<tr><td>bi eosus</td><td>bi + eosus (social hearing)</td><td>I heard this / reported evidence</td></tr>
<tr><td>bi daeniu</td><td>bi + daeniu (witness)</td><td>I witnessed this / direct evidence</td></tr>
<tr><td>bi daeta</td><td>bi + daeta (inference)</td><td>I inferred this / evidential reasoning</td></tr>
</table>
<p>The word order is flexible, as with other blocks:</p>
<pre>hay i anocari bi daeniu
she left — I witnessed this
bi eosus a hay a tohpu
I heard that he is sad
a bo a anolum hue, bi daeta
the house seems abandoned — I’m inferring this</pre>
<p>They can also stand alone as a comment on a prior statement:</p>
<pre>A: hay i faigel. (he got married.)
B: bi eosus (I heard the same.)</pre>
<h4>Bi evidentials and bi emotional comments</h4>
<p>Both use bi, but the words are distinct in meaning and feel. Emotional bi phrases (bi oipoh, bi tohpu, bi oila) express how the speaker feels about the content. Evidential bi phrases express where the knowledge comes from. In practice the two don&#x27;t conflict and they can be combined:</p>
<pre>hay i anocari, bi eosus su tohpu / bi eosus bi tohpu
she left — I heard this, how sad</pre>
</div>
</details>

<details class="gr-sec">
<summary>50. Grammatical Mistakes</summary>
<div class="gr-content">
<h4>50.1 Constructions</h4>
<p>Oravia is a flexible language, and as such, there are not many mistakes one can make. The main ones below are worth knowing because they tend to create ambiguities or miscommunications. </p>
<p><strong>Using the wrong marker</strong></p>
<p>Markers carry the full grammatical weight of a sentence, and swapping markers can make them confusing or change their meaning. For example:</p>
<pre>I give the big apple to you

i anona e yaltan moaria u run    
V give  OBJ big-apple  IND-OBJ you   ✓

i anona e moaria e run           
V give  OBJ apple  OBJ you   ✗   (e instead of u)</pre>
<p><strong>Breaking a block</strong></p>
<p>A marker introduces a single block. Modifiers that belong to a phrase must stay inside that block. Moving a modifier out into another position breaks the structure, and the listener cannot determine which block it was meant to belong to.</p>
<pre>I give the big apple to you

i anona e yaltan moaria u run    
[V give]  [OBJ big apple]  [IND-OBJ you]    ✓

i anona e moaria u run yaltan    
[V give]  [OBJ apple]  [IND-OBJ you] big   ✗   (big pulled out of OBJ block)</pre>
<p><strong>Modifier after what it modifies</strong></p>
<p>Within any block, modifiers always come before what they modify. A modifier that follows its head creates ambiguity about which word it belongs to and changes its meaning.</p>
<pre>I give a big fortune to you 

i anona e yaltan yunmir u run    
V give  OBJ big wealth  IND-OBJ you   ✓

i anona e yunmir yaltan u run    
V give  OBJ wealth  big  IND-OBJ you  ✗   (modifier after head, reads as &quot;the wealthy big [person?]&quot;)</pre>
<p><strong>Stacking verbs without i</strong></p>
<p>Verb stacking requires i before each verb in the chain. Without the second i, the second element reads as a noun rather than a verb, and the sentence changes meaning.</p>
<pre>I can go

i do i anvu    
V can  V go   ✓

i do anvu      
V can  go     ✗   (i missing before second verb)</pre>
<p><strong>Using ca in a direct question</strong></p>
<p>Ce introduces questions. Ca introduces relative clauses and clause connectors. Using a &quot;ca&quot; word in a direct question reads as an unfinished clause rather than a question.</p>
<pre>Where are you?

cedom run?    
where  you?   ✓

cadom run?    
where  you    ✗   (connector form used instead of question form)</pre>
<p>These are the main mistakes that may create issues. The focus is to avoid miscommunication and ambiguity, not to worry about being &quot;grammatically correct&quot;. In general, if the listener understands you, you are speaking Oravia correctly.</p>
<h4></h4>
<h4>50.2 Common patterns for English speakers</h4>
<p>In the next two subsections, we will break down common transferences from English and Romance to Oravia. I focus on these two backgrounds because they are very dominant in the auxlang community. When people learn a new language, they tend to transfer characteristics of their own. The main goal of these two subsections is to be mindful of some common transferences that may confuse speakers of other backgrounds and/or shift Oravia from an international language to one that prioritizes Germanic-Romance intuitions. </p>
<p>These are the most common English patterns that transfer into Oravia:</p>
<p><strong>Instrument as companionship</strong></p>
<p>English uses &quot;with&quot; for both company and instrument. Oravia separates these. Su marks companionship and addition; anja marks the tool or means by which something is done.</p>
<pre>I eat with a fork

i mo anja jadun    
V eat  INSTR fork        ✓

i jadun    
V fork        ✓


i mo su jadun      
V eat  AND/WITH fork     ✗ (companionship, not instrument)</pre>
<p><strong>The copula</strong></p>
<p>English always uses a verb for &quot;to be&quot;. Oravia&#x27;s copula uses a on both sides with no verb at all. Both the subject and the predicate take the subject marker.</p>
<pre>I am tall

a nim a yalen    
SUBJ I  PRED tired    ✓

i yalen nim      
V tall  I              ✗</pre>
<p><strong>Manner and degree</strong></p>
<p>English uses &quot;how&quot; for both manner and degree, while Oravia keeps these separate. Cenon asks in what way something is done; cene asks to what extent. &quot;How sad are you?&quot; is a question about degree, not about method.</p>
<pre>How sad are you?

cene tohpu a run?     
how-degree  sad  PRED you?    ✓

cenon tohpu a run?    
how-manner  sad  PRED you?    ✗ (this means &quot;in which way are you sad?&quot;)</pre>
<p><strong>If, whether, and if-then</strong></p>
<p>English &quot;if&quot; covers three distinct situations that Oravia separates:</p>
<p>. Daefer is for real-world cause and effect. </p>
<p>. Iliciu is for hypothetical and counterfactual scenarios. </p>
<p>. Ia dou is for indirect questions about whether something is the case. </p>
<p>Using daefer for all three flattens a distinction the grammar is built to preserve, and confuses listeners into thinking an &quot;if-then&quot; complement is coming.</p>
<pre>I don&#x27;t know if she left

i ilianum ia dou hay i anocari      
V know-not  whether  she  V left    ✓

i ilianum daefer hay i anocari      
V know-not  if-then  she  V left    ✗ (listeners will expect a &quot;then&quot; continuation)</pre>
<p><strong>Aspect as </strong><strong>tense</strong></p>
<p>Applying -ar or -is to every verb in a narrative removes its ability to mark actual completion or sequence.</p>
<pre>Yesterday, I drank coffee

litamar, nim i mo e mogali      
yesterday  I  V drink  OBJ coffee             ✓   (bare, natural)

litamar, nim i moar e mogali    
yesterday  I  V drink-COMP  OBJ coffee        ✗   (listeners will expect a second, later action)</pre>
<p>The rule is:</p>
<p>. Use bare verb form in general</p>
<p>. Use -ar when you want to specify an action has been completed or happened/will happen before another action</p>
<p>. Use -is when you want to specify an action will yet to start or happened/will happen after another action</p>
<p><strong>Compound nouns without -s</strong></p>
<p>The -s on every word of a compound except the last signals that the words are forming a single concept rather than an adjective modifying a noun. </p>
<pre>sol yaltans miau
big-cat = tiger, lion

yaltan miau
a big cat = a description of the cat</pre>
<h4></h4>
<h4>50.2 Common Patterns for Romance Speakers</h4>
<p>The same principle applies here. If Oravia absorbs Romance grammar through its speakers, it will confuse speakers of other backgrounds, and be farther from its aim of being international and start reflecting a particular language family. The patterns below are the most common transfers from languages like Spanish, Italian, French, and Portuguese.</p>
<p><strong>De</strong><strong> for possession with pronouns</strong></p>
<p>In Oravia, de marks origin and belonging in a broad sense, so using it with personal pronouns read as &quot;from&quot; rather than a possessive relation.</p>
<pre>hay bo      [her house]         ✓
de hay bo    [from her house]    ✗</pre>
<p><strong>Adjective after the noun</strong></p>
<p>In most Romance languages adjectives commonly follow the noun. In Oravia all modifiers come before what they modify, without exception. This applies to single adjectives, compound modifiers, and possessives alike.</p>
<pre>yaltan yunmir    [large fortune]    ✓
yunmir yaltan    [rich big person]    ✗ (this has a different meaning than was intended)</pre>
<p><strong>Gender </strong></p>
<p>Oravia&#x27;s -jor and -jal suffixes exist for disambiguation when gender genuinely matters.  Carrying Romance intuition into Oravia adds gender marking where the language intentionally leaves it absent, and makes the language feel more gendered than it is designed to be.</p>
<p><strong>Reflexive verbs by habit</strong></p>
<p>Romance languages have many verbs that require a reflexive pronoun. In Oravia, elihei exclusively marks reflexive relationships where the subject acts on itself. Using Romance construction here may confuse speakers of other languages.</p>
<pre>The pot broke

o e mamol i tinen             
EMPH OBJ pot V break               ✓

a mamol e elihei i tinen    
SUBJ pot OBJ self V break          ✗   (pot not as the subject breaking itself)</pre>
<p><strong>Stacking ca</strong></p>
<p>Romance languages tend to stack multiple subordinate clauses (e.g., using &quot;que&quot;). Two embedded ca clauses are usually fine; beyond that, restructuring or rephrasing often reads more easily in Oravia.</p>
</div>
</details>
</div>
</details>

---

<details class="gr-part">
<summary><strong>Vocabulary Reference</strong></summary>
<div class="gr-content">
<details class="gr-sec">
<summary>51. How the Vocabulary Works</summary>
<div class="gr-content">
<h4>51.1 The Building Block System</h4>
<p>Oravia&#x27;s 800 words are largely built from 260 syllable-meaning associations called building blocks. These blocks are divided into clusters, subclusters, and roots. Once you have internalized them, you may be able to decode unfamiliar words on sight, learn words much faster, and recognize patterns across the entire vocabulary. The system is designed so that vocabulary does not need to be memorized word by word. Every word reflects its meaning in its structure.</p>
<p>There are three kinds of building blocks. Clusters signal the semantic domain of a word. Subclusters refine the domain. Roots create conceptual links between words in different clusters. </p>
<h4>51.2 Clusters</h4>
<p>A cluster is the opening sound or sounds of a word. It signals the broad semantic domain the word belongs to. There are approximately 48 clusters. Every word beginning with MO belongs to the domain of food and eating. Every word beginning with VA belongs to the body&#x27;s vital systems. Every word beginning with EL belongs to the domain of wonder and virtue.</p>
<p>This means the very first sound of an Oravia word always tells you something about what that word is about.</p>
<p>A few examples across different domains:</p>
<pre>AN   action and movement
BO   home interior (rooms, furniture, structure)
FA   family (roles, relationships, partnership)
IL   inquiry and knowledge (cognition, uncertainty)
LI   time (units, clock, seasons)
MO   food and eating
TO   suffering and distress
VA   body vitals and core systems
YA   objective qualities (size, texture, physical characteristics)</pre>
<p>The full cluster list, with subclusters, is in the following section (§52). The opening sound alone covers a large portion of what any unfamiliar word might mean.</p>
<h4>51.3 Subclusters</h4>
<p>Clusters have between 0-4 subclusters, typically signaled by the third letter. Subclusters refine the domain. </p>
<p>The AN cluster (action and movement) illustrates this clearly:</p>
<pre>AN    action and movement in general
ANE   static actions: rest, remain, stop, stay
ANI   movement toward: arrive, come, bring, attract
ANO   movement away: leave, depart, push, send</pre>
<p>The word anifi belongs to ANI (toward), so even without knowing the root, a reader knows it involves approach. Anocari belongs to ANO (away), so it involves departure. The subcluster orients the reader directionally before the root is parsed.</p>
<h4>51.4 Roots</h4>
<p>When you take the (sub)cluster out of a word, what is left is the root. Roots carry consistent meaning, and crucially the same root can appear across multiple clusters, creating conceptual links between words in different domains.</p>
<p>A root encountered in one cluster will carry a recognizable relational meaning when it appears in another. </p>
<p>For example, take the root LEM (to remain):</p>
<pre>anelem    
ANE (static movement) + LEM (remain) = to remain in place

beilem    
BEI (vehicles) + LEM (remain) = station, stop (where vehicles stay)</pre>
<p>Some roots are very common and appear in many clusters. Others are more local. The principle holds throughout: when you learn a root in one word, you gain partial knowledge of every word that carries it.</p>
<h4>51.5 How Words Are Built</h4>
<p>The standard pattern:</p>
<pre>(sub)cluster + root = word</pre>
<p>From there, several patterns extend the system further.</p>
<p>Compounds are two or more words that together name a single concept rather than describing one thing with an adjective. The compound is opened by sol, which is optional, and every word except the last takes -s to signal that it is part of a compound rather than a free modifier (see §22.2)</p>
<p>Hyphenated forms join two words for fine-grained or expressive meaning, usually the second word being a verb flavored by the first. Ilofun-vardei (hesitant-look, to peek with doubt) and toului-asfe (tired-stop, to give up from exhaustion) are examples. (see §22.3)</p>
<p>Imported words use an apostrophe prefix to signal that the word does not come from the core vocabulary: &#x27;Italia, &#x27;Nihongo, scientific species names. These never enter the permanent vocabulary. The apostrophe tells the reader this is not a core Oravia word (see §22.5)</p>
<h4>51.6 Decoding New Words</h4>
<p>Given an unfamiliar word, three steps will usually get you to the meaning or close to it.</p>
<p>First, identify the cluster. The opening sound or sounds tell you the semantic domain. Check the first two letters, then the third to identify whether a subcluster applies.</p>
<p>Second, identify the root. Subtract the cluster from the word. What remains is the root. If you have encountered this root before, its meaning carries over to a new context.</p>
<p>Third, combine. Cluster domain plus root meaning gives you the approximate reading. This will not always be exact, but it may put you in the right territory. </p>
<p>Two examples:</p>
<pre>vardei
  VA = body parts
  VAR = face (subcluster)
  -dei = sight, look
  vardei = eye
  i vardei = to see, to look</pre>
<pre>boemo
  BO = home interior
  BOE = house rooms (subcluster)
  -mo = food (from MO cluster)
  boemo = house-room-food = kitchen</pre>
</div>
</details>

<details class="gr-sec">
<summary>52. Cluster Reference Table</summary>
<div class="gr-content">
<p>Approximately 48 main clusters organize the Oravia vocabulary. Each cluster is identified by its opening sound(s). Words beginning with those sounds belong to that cluster&#x27;s semantic domain. Subclusters (shown indented) refine the domain further.</p>
<table>
<tr><th>Sound</th><th>Domain</th><th>Key subclusters</th></tr>
<tr><td>AN</td><td>action / movement</td><td>ANE static · ANI toward · ANO away · APA physical · AS involuntary body · ASE affective expression · ASI orifice · ASU vocal expression</td></tr>
<tr><td>BE</td><td>travel</td><td>BEI vehicles</td></tr>
<tr><td>BO</td><td>home interior</td><td>BOE house spaces · BON furniture · BOR structure · BOS hygiene fixtures</td></tr>
<tr><td>CIU</td><td>creative products</td><td>—</td></tr>
<tr><td>CO</td><td>communication</td><td>COU written communication</td></tr>
<tr><td>DA</td><td>evaluation / knowledge</td><td>DAE epistemic · DAN emphasis</td></tr>
<tr><td>DO</td><td>regulations</td><td>DOH enforcement</td></tr>
<tr><td>EL</td><td>wonder / virtue</td><td>ELA religious · ELE self-expansion · ELI virtue · ELO prosocial</td></tr>
<tr><td>EO</td><td>social</td><td>EOD social interactions · EOM events &amp; gatherings</td></tr>
<tr><td>FA</td><td>family</td><td>FAE gender · FAI partnership/marriage · FAL young ones</td></tr>
<tr><td>GA</td><td>comparison / ranking</td><td>GAN ranking · GAO value assessment</td></tr>
<tr><td>GE</td><td>finances</td><td>GEL trading</td></tr>
<tr><td>HE</td><td>fiction tropes</td><td>HEH antagonist · HEI protagonist · HEO background/setting</td></tr>
<tr><td>IL</td><td>inquiry / knowledge</td><td>ILA sharing information · ILI cognition · ILO uncertainty</td></tr>
<tr><td>JA</td><td>tools</td><td>JAH cutting tools · JAS gripping &amp; fastening tools</td></tr>
<tr><td>JE</td><td>geometrics / space</td><td>JEN location · JEO geometric positions</td></tr>
<tr><td>JO</td><td>materials</td><td>JOL material types</td></tr>
<tr><td>LE</td><td>environment / land</td><td>LEA landscape · LEI plants</td></tr>
<tr><td>LI</td><td>time</td><td>LITE clock time · LUN seasons</td></tr>
<tr><td>LU</td><td>weather / atmosphere / outside</td><td>LUN seasons</td></tr>
<tr><td>MA</td><td>cooking / food preparation</td><td>MAE tubers &amp; grains · MAL bread &amp; dairy · MAS spices</td></tr>
<tr><td>MI</td><td>larger animals</td><td>MIO wild animals</td></tr>
<tr><td>MO</td><td>food / eating</td><td>MOA fruits · MOL food containers</td></tr>
<tr><td>MU</td><td>smaller animals</td><td>MUH flying animals / birds</td></tr>
<tr><td>NE</td><td>quantifiers / gradation</td><td>—</td></tr>
<tr><td>NO</td><td>function words</td><td>NOR relation to reference</td></tr>
<tr><td>OI</td><td>fun / excitement</td><td>—</td></tr>
<tr><td>OM</td><td>music / sound</td><td>—</td></tr>
<tr><td>PO</td><td>components / matter</td><td>POA chemical · POH energy · POI liquids</td></tr>
<tr><td>RA</td><td>society</td><td>RAI governance · RAN media &amp; discourse · RAS culture</td></tr>
<tr><td>RO</td><td>knowledge / learning</td><td>ROE formal education · ROU written knowledge</td></tr>
<tr><td>SE</td><td>machines / technology</td><td>SEL coding · SEM systems</td></tr>
<tr><td>SI</td><td>processes</td><td>—</td></tr>
<tr><td>SIO</td><td>games / play</td><td>—</td></tr>
<tr><td>TI</td><td>harm / damage</td><td>TIU types of harm</td></tr>
<tr><td>TO</td><td>suffering / distress</td><td>TOH emotional · TOS interpersonal · TOU physical depletion</td></tr>
<tr><td>TU</td><td>conflict</td><td>TUL crash · TUM weapons</td></tr>
<tr><td>VA</td><td>core / body vitals</td><td>VAN limbs · VAR face · VEI health issues · VEL medical treatment</td></tr>
<tr><td>VI</td><td>interior body</td><td>VIR organs</td></tr>
<tr><td>VO</td><td>hygiene / personal care</td><td>VON external body surfaces · VOS grooming actions</td></tr>
<tr><td>WA</td><td>water</td><td>—</td></tr>
<tr><td>WI</td><td>geographical orientation</td><td>WIL human-made geography · WIM natural geography</td></tr>
<tr><td>YA</td><td>objective qualities</td><td>YAH texture · YAL size</td></tr>
<tr><td>YE</td><td>clothing &amp; fabric</td><td>YES garments</td></tr>
<tr><td>YO</td><td>colors</td><td>—</td></tr>
<tr><td>YU</td><td>subjective qualities</td><td>YUN personal characteristics</td></tr>
</table>
<p>Even without knowing a specific word, the opening sound gives the domain. Subclusters narrow it further. The full vocabulary of ~800 words is distributed across these clusters, with a total of ~260 building syllable-meaning associations.</p>
</div>
</details>

<details class="gr-sec">
<summary>53. Quick Reference</summary>
<div class="gr-content">
<table>
<tr><th>Marker / Word</th><th>Function</th></tr>
<tr><td>a</td><td>subject marker</td></tr>
<tr><td>i</td><td>verb marker</td></tr>
<tr><td>e</td><td>direct object marker</td></tr>
<tr><td>u</td><td>indirect object marker (to / for)</td></tr>
<tr><td>o</td><td>focus, emphasis; + i = imperative; + e = passive</td></tr>
<tr><td>en</td><td>time or location (at / in / on)</td></tr>
<tr><td>de</td><td>of, from</td></tr>
<tr><td>-jor / -jal</td><td>feminine / masculine suffix</td></tr>
<tr><td>-ar / -is</td><td>completed / prospective aspect</td></tr>
<tr><td>-um</td><td>negation</td></tr>
<tr><td>sol / -s</td><td>compound: optional opener / on every word except the last</td></tr>
<tr><td>dia / hue</td><td>agent, role / recipient, resultant state</td></tr>
<tr><td>ca / caei / cadom / cali / caora</td><td>connectors: that, who, where, when, because</td></tr>
<tr><td>canon / cane</td><td>connectors: how (manner) / as (degree) as</td></tr>
<tr><td>ce / cei / cedom / celi / ceora</td><td>question words: what, who, where, when, why</td></tr>
<tr><td>cenon / cene</td><td>question words: how (manner) / how (degree)</td></tr>
<tr><td>su / dou / mai / eta</td><td>and / or / but / therefore</td></tr>
<tr><td>ho / no</td><td>opposite / like-as-similar to; nominal complement</td></tr>
<tr><td>ga / gaomem / anodu</td><td>comparative / equality / superlative</td></tr>
<tr><td>bi</td><td>speaker comment</td></tr>
<tr><td>ne</td><td>gradation prefix (+ number)</td></tr>
<tr><td>(da)sora</td><td>purpose, in order to</td></tr>
<tr><td>jetai</td><td>direction, toward</td></tr>
<tr><td>anja</td><td>instrument, by means of</td></tr>
<tr><td>lor</td><td>benefit marker, for someone&#x27;s sake (used after u)</td></tr>
<tr><td>ciude</td><td>about</td></tr>
<tr><td>elihei / rein</td><td>self / each other</td></tr>
<tr><td>iliciu / daefer</td><td>counterfactual / factual conditional</td></tr>
<tr><td>lirul</td><td>habit</td></tr>
<tr><td>notam / notor</td><td>first event / second event</td></tr>
<tr><td>yadetu / toram / lar / lis</td><td>finally / suddenly / once (past) / sometime in the future</td></tr>
<tr><td>noli / noi</td><td>now / here</td></tr>
</table>
</div>
</details>
</div>
</details>

---

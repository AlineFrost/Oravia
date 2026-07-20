#!/usr/bin/env python3
"""
migrate_all.py (v2) — one run does everything, in this order:

  1. dictionary_data.json — STRUCTURED edit (the file round-trips exactly
     through json.dumps(indent=2, ensure_ascii=False), verified):
       a. insert new gram entry 'niu' = indefinite quantity, before 'hue'
       b. gram entry hai -> dia: fields w, usage, search_terms
       c. all entries: hai -> dia inside example sentences (ex[].o) only
       NEVER touched: r, bd, syllable_meanings, and search_terms of any
       other entry — these reference the building-block ROOT hai
       ('message', in couhai/ilahai), which keeps its name. bb-root-hai
       ids/hrefs stay intact.
  2. building_blocks.json: root niu meaning 'some' -> 'indefinite
     quantity'. Nothing else; root hai = message untouched.
  3. All other files: standalone 'hai' -> 'dia', 'Hai' -> 'Dia' (word
     boundaries), EXCEPT protected patterns which are masked and restored:
       bb-root-hai   (building-block reference anchors/links)
       "sound": "hai"  and  'sound': 'hai'   (root data in JSON/JS,
                                              e.g. flashcards)
     All-caps 'HAI' is reported, never changed.
  4. lesson24.md: 'dia has a + i (actor)' -> 'dia has i + a (actor)'.
  5. lesson39.md: '    dia = the  ' -> '    dia = agent (doer)  '.

Targeted raw-text edits (2, 4, 5) must match EXACTLY ONCE or the script
aborts before writing anything.

Usage (from repo root):
  python3 migrate_all.py [ROOT]            # dry run: diffs only
  python3 migrate_all.py [ROOT] --apply    # write
  ROOT defaults to 'docs'.
"""

import argparse
import difflib
import json
import re
import sys
from pathlib import Path

EXTS = {".md", ".json", ".html", ".txt", ".js"}

RE_LOWER = re.compile(r"\bhai\b")
RE_TITLE = re.compile(r"\bHai\b")
RE_CAPS = re.compile(r"\bHAI\b")

PROTECTED = ["bb-root-hai", '"sound": "hai"', "'sound': 'hai'"]
MASKS = {p: f"\x00PROT{i}\x00" for i, p in enumerate(PROTECTED)}

NIU_ENTRY = {
    "w": "niu",
    "e": "indefinite quantity",
    "usage": ("before a noun for an unspecified number or amount: "
              "niu fano = children; noniu falen = some child"),
    "type": "gram",
    "search_terms": ["indefinite", "niu", "plural", "quantity"],
}

# (only_filename_or_None, stage 'pre'/'post', old, new)
# If filename is None the edit is applied in EVERY file containing the
# anchor (e.g. lesson + compiled copy). Wherever the anchor appears it
# must appear exactly once in that file, and in at least one file overall.
RAW_EDITS = [
    ("building_blocks.json", "pre",
     '"sound": "niu",\n    "meaning": "some",',
     '"sound": "niu",\n    "meaning": "indefinite quantity",'),
    (None, "post",
     "That is, dia has a + i (actor)",
     "That is, dia has i + a (actor)"),
    (None, "post",
     "    dia = the  ",
     "    dia = agent (doer)  "),
]


def swap(s):
    return RE_TITLE.sub("Dia", RE_LOWER.sub("dia", s))


def transform_dictionary(raw, path):
    data = json.loads(raw)
    trailing_nl = "\n" if raw.endswith("\n") else ""
    if json.dumps(data, indent=2, ensure_ascii=False) + trailing_nl != raw:
        sys.exit(f"ABORT: {path} does not round-trip through json.dumps"
                 f"(indent=2, ensure_ascii=False); structured edit unsafe.")
    if any(e.get("w") == "niu" for e in data):
        sys.exit("ABORT: dictionary already has a 'niu' entry.")
    gram_entries = [e for e in data
                    if e.get("w") == "hai" and e.get("type") == "gram"]
    if len(gram_entries) != 1:
        sys.exit(f"ABORT: expected exactly one grammatical 'hai' entry, "
                 f"found {len(gram_entries)}.")
    gram_hits = ex_hits = 0
    for e in data:
        if e.get("w") == "hai" and e.get("type") == "gram":
            e["w"] = "dia"
            if "usage" in e:
                gram_hits += (len(RE_LOWER.findall(e["usage"]))
                              + len(RE_TITLE.findall(e["usage"])))
                e["usage"] = swap(e["usage"])
            if "search_terms" in e:
                new_terms, seen = [], set()
                for t in e["search_terms"]:
                    gram_hits += (len(RE_LOWER.findall(t))
                                  + len(RE_TITLE.findall(t)))
                    nt = swap(t)
                    if nt not in seen:
                        new_terms.append(nt)
                        seen.add(nt)
                e["search_terms"] = new_terms  # order preserved
            gram_hits += 1  # the w field itself
        for ex in e.get("ex", []):
            if isinstance(ex, dict) and "o" in ex:
                n = (len(RE_LOWER.findall(ex["o"]))
                     + len(RE_TITLE.findall(ex["o"])))
                if n:
                    ex["o"] = swap(ex["o"])
                    ex_hits += n
    hue = [i for i, e in enumerate(data) if e.get("w") == "hue"]
    if len(hue) != 1:
        sys.exit("ABORT: expected exactly one 'hue' entry in dictionary.")
    data.insert(hue[0], NIU_ENTRY)
    # Safety: leftover standalone hai/Hai is allowed ONLY in structural
    # metadata (r, bd, syllable_meanings, search_terms, bb_id, bb_href)
    # of root-hai entries — never in user-visible text fields.
    TEXT_FIELDS = ("usage", "e", "ea")
    for e in data:
        for f in TEXT_FIELDS:
            v = e.get(f)
            if isinstance(v, str) and (RE_LOWER.search(v) or RE_TITLE.search(v)):
                sys.exit(f"ABORT: leftover 'hai' in {e.get('w')!r}.{f} — "
                         f"classify before running.")
        for ex in e.get("ex", []):
            if isinstance(ex, dict):
                for f in ("o", "e"):
                    v = ex.get(f)
                    if isinstance(v, str) and (RE_LOWER.search(v)
                                               or RE_TITLE.search(v)):
                        sys.exit(f"ABORT: leftover 'hai' in {e.get('w')!r} "
                                 f"ex[].{f} — classify before running.")
        # remaining occurrences in this entry must be in structural fields
        # of a root-hai word only
        if RE_LOWER.search(json.dumps(e, ensure_ascii=False)):
            if e.get("r") != "hai":
                sys.exit(f"ABORT: unexpected leftover 'hai' in entry "
                         f"{e.get('w')!r} — classify before running.")
    return (json.dumps(data, indent=2, ensure_ascii=False) + trailing_nl,
            gram_hits, ex_hits)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("root", nargs="?", default="docs")
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--allow-dirty", action="store_true",
                    help="apply even if the git tree is dirty")
    args = ap.parse_args()

    root = Path(args.root)
    if not root.exists():
        sys.exit(f"path not found: {root}")

    files = sorted(p for p in root.rglob("*") if p.is_file() and p.suffix in EXTS)
    originals, results, skipped = {}, {}, []
    for p in files:
        try:
            originals[p] = results[p] = p.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError) as err:
            skipped.append(f"{p}  ({type(err).__name__})")

    def find(name):
        # Prefer the canonical docs/data/<name> if present so backup
        # copies (e.g. 'data original/') are left alone.
        canonical = root / "data" / name
        if canonical in results:
            return canonical
        hits = [p for p in results if p.name == name]
        if len(hits) != 1:
            sys.exit(f"ABORT: expected exactly one {name}, found {len(hits)}"
                     + (f" (in: {', '.join(str(h) for h in hits)})"
                        if hits else ""))
        return hits[0]

    fixup_log = []

    def raw_edit(stage):
        for name, st, old, new in RAW_EDITS:
            if st != stage:
                continue
            targets = [find(name)] if name else \
                      [p for p in results if old in results[p]]
            if not targets:
                sys.exit(f"ABORT: anchor found nowhere: {old[:60]!r}")
            for p in targets:
                n = results[p].count(old)
                if n != 1:
                    sys.exit(f"ABORT: anchor appears {n}x in {p}: "
                             f"{old[:60]!r} — nothing written")
                results[p] = results[p].replace(old, new)
                fixup_log.append((p, old[:45], new[:45]))

    # 1. dictionary (structured)
    dict_p = find("dictionary_data.json")
    results[dict_p], gram_hits, ex_hits = transform_dictionary(
        results[dict_p], dict_p)

    # 2. building_blocks niu meaning
    raw_edit("pre")

    # 3. token pass everywhere else, with protected masks
    caps_hits, token_counts = [], {}
    for p in list(results):
        if p.name in ("building_blocks.json", "dictionary_data.json"):
            continue
        text = results[p]
        for m in RE_CAPS.finditer(text):
            caps_hits.append(f"{p}:{text.count(chr(10), 0, m.start()) + 1}")
        masked = text
        for pat, mask in MASKS.items():
            masked = masked.replace(pat, mask)
        n = len(RE_LOWER.findall(masked)) + len(RE_TITLE.findall(masked))
        if n:
            masked = swap(masked)
            for pat, mask in MASKS.items():
                masked = masked.replace(mask, pat)
            results[p] = masked
            token_counts[p] = n

    # 4./5. post fixups
    raw_edit("post")

    # diffs
    changed = [p for p in results if results[p] != originals[p]]
    for p in sorted(changed):
        sys.stdout.writelines(difflib.unified_diff(
            originals[p].splitlines(keepends=True),
            results[p].splitlines(keepends=True),
            fromfile=str(p), tofile=f"{p} (after)"))
        print()

    # validate every JSON result BEFORE any write
    for p in changed:
        if p.suffix == ".json":
            try:
                json.loads(results[p])
            except json.JSONDecodeError as err:
                sys.exit(f"ABORT before writing: {p} would become "
                         f"invalid JSON: {err}")

    if args.apply:
        import os
        import subprocess
        try:
            dirty = subprocess.run(
                ["git", "status", "--porcelain"], capture_output=True,
                text=True, check=True).stdout.strip()
            if dirty and not args.allow_dirty:
                sys.exit("ABORT: git working tree is not clean. Commit or "
                         "stash first (git is your rollback), or rerun "
                         "with --allow-dirty.")
        except (FileNotFoundError, subprocess.CalledProcessError):
            print("note: not a git repo (or git unavailable) — "
                  "no automatic rollback exists; keep a backup.")
        for p in changed:
            tmp = p.with_suffix(p.suffix + ".tmp_migrate")
            tmp.write_text(results[p], encoding="utf-8")
            os.replace(tmp, p)

    mode = "APPLIED" if args.apply else "DRY RUN (no files written)"
    print("=" * 60)
    print(f"{mode}: {len(changed)} files changed")
    print(f"dictionary gram-entry replacements: {gram_hits}; "
          f"example-sentence replacements: {ex_hits}; niu entry inserted")
    print(f"token replacements elsewhere: {sum(token_counts.values())}")
    for p in sorted(token_counts):
        print(f"  {p}: {token_counts[p]}")
    print("targeted fixups applied:")
    for p, old, new in fixup_log:
        print(f"  {p}: {old!r} -> {new!r}")
    if skipped:
        print("FILES SKIPPED (unreadable) — NOT examined or changed:")
        for s in skipped:
            print(f"  {s}")
    if caps_hits:
        print("standalone HAI (all-caps) — NOT changed, review manually:")
        for h in caps_hits:
            print(f"  {h}")

    # verification
    print("\nVerification:")
    d = json.loads(results[dict_p])
    assert len([e for e in d if e["w"] == "dia" and e.get("type") == "gram"]) == 1
    for w in ("couhai", "ilahai"):
        e = [x for x in d if x["w"] == w][0]
        ok = (e["r"] == "hai"
              and any(b.get("sound") == "hai" for b in e.get("bd", []))
              and "bb-root-hai" in json.dumps(e))
        print(f"  {w}: root reference intact -> {ok}")
        if not ok:
            sys.exit("ABORT: root reference damaged")
    bb = find("building_blocks.json")
    json.loads(results[bb])
    print(f"  dictionary: valid JSON ({len(d)} entries); "
          f"building_blocks: valid JSON")
    leftovers = 0
    for p, text in results.items():
        if p.name in ("building_blocks.json", "dictionary_data.json"):
            continue
        masked = text
        for pat, mask in MASKS.items():
            masked = masked.replace(pat, mask)
        for regex in (RE_LOWER, RE_TITLE):
            for m in regex.finditer(masked):
                print(f"  LEFTOVER {p}:{masked.count(chr(10), 0, m.start()) + 1}")
                leftovers += 1
    print(f"  unprotected standalone hai/Hai outside the two data files: "
          f"{leftovers}" + (" — clean" if leftovers == 0 else " — REVIEW"))


if __name__ == "__main__":
    main()

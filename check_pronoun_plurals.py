from pathlib import Path
import re

forms = [
    ("nima", "nimas"),
    ("Nima", "Nimas"),
    ("runa", "runas"),
    ("Runa", "Runas"),
    ("haya", "hayas"),
    ("Haya", "Hayas"),
]

extensions = {".md", ".txt", ".json", ".html", ".js", ".css", ".yml", ".yaml"}

skip_dirs = {
    ".git",
    "site",
    "venv",
    ".venv",
    "node_modules",
    "old_course_delay1",
}

skip_files = {
    Path("docs/about/changes.md"),
}

texts = []

for path in Path(".").rglob("*"):
    if not path.is_file():
        continue

    if any(part in skip_dirs for part in path.parts):
        continue

    if path in skip_files:
        continue

    if path.suffix.lower() not in extensions:
        continue

    try:
        text = path.read_bytes().decode("utf-8")
    except UnicodeDecodeError:
        continue

    texts.append((path, text))

print("OLD FORMS TO REPLACE\n")

grand_total = 0

for old, new in forms:
    pattern = re.compile(rf"(?<![A-Za-z]){old}(?![A-Za-z])")

    count = 0
    files = 0

    for path, text in texts:
        n = len(pattern.findall(text))
        if n:
            count += n
            files += 1

    grand_total += count
    print(f"{old} -> {new}: {count} occurrences in {files} files")

print(f"\nTOTAL old forms to replace: {grand_total}")

print("\nALREADY-NEW FORMS")

for new in ["nimas", "Nimas", "runas", "Runas", "hayas", "Hayas"]:
    pattern = re.compile(rf"(?<![A-Za-z]){new}(?![A-Za-z])")
    count = sum(len(pattern.findall(text)) for _, text in texts)
    print(f"{new}: {count}")

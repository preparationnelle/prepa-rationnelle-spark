import os

file_path = "src/pages/StageAccompagnementPage.tsx"

with open(file_path, "r") as f:
    content = f.read()

replacements = {
    "-[#F4845F]": "-carnet-red",
    "text-[#C45A35]": "text-carnet-red-deep",
    "bg-[#C45A35]": "bg-carnet-red-deep",
    "border-[#C45A35]": "border-carnet-red-deep",
    "-[#FDF0EC]": "-[rgba(193,68,58,0.08)]",
    "-[#F9C4B0]": "-[rgba(193,68,58,0.25)]",
    "-[#1A1A18]": "-carnet-ink",
    "-[#D8D6CE]": "-carnet-rule",
    "-[#F7F6F3]": "-carnet-paper-2",
    "font-serif": "font-lora",
    "<div className=\"relative\">": "<div className=\"relative font-instrument\">",
    "bg-white": "bg-carnet-paper-2",
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open(file_path, "w") as f:
    f.write(content)

print("Colors updated")

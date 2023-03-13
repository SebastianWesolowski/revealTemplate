---
inject: true
to: "<%= isSection ? `./includes/${subject}/${HTMLfileName}` : null %>"
append: true
---
<section data-markdown="./includes/<%= subject %>/<%= fileName %>" data-separator="---" data-separator-notes="^Note:" data-charset="utf-8"></section>

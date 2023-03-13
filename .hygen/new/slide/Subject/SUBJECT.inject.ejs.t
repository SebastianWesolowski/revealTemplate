---
to: "<%= isSubject ? `./includes/${subject}/${HTMLfileName}` : null %>"
---
<section data-markdown="./includes/<%= subject %>/<%= fileName %>" data-separator="---" data-separator-notes="^Note:" data-charset="utf-8"></section>

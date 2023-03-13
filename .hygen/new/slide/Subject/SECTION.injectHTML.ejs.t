---
inject: true
to: "<%= isSubject ? `./index.html` : null %>"
before: <!--END SLIDES-->
append: true
---
<section data-external="./includes/<%= subject %>/<%= HTMLfileName %>"></section>

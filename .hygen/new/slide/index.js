// https://github.com/jondot/hygen/issues/131
// checkboxes list


const fs = require("fs");
module.exports = {
  prompt: ({ prompter, args }) => {
    function getFileList(path, isDirectory) {
      return new Promise((resolve, reject) => {

        fs.readdir(path, (err, files) => {
          if (err) {
            reject(err);
          } else {

            if(isDirectory){
              const directories = files.filter(file => {
                return fs.statSync(`${path}/${file}`).isDirectory()
              });
              resolve(directories);
            }


            const fileList = files.filter(file => {
              return fs.statSync(`${path}/${file}`).isFile();
            });

            resolve(fileList.filter(file => file.endsWith('.md')));
          }
        });
      });
    }

    return prompter
      .prompt([
        {
          type: "select",
          name: "category",
          message: "Enter type slide? './includes/newSubject/section'",
          choices: ["section", "newSubject"],
        }
      ])
      .then(({ category }) => {
        args.category = category;

        if (category === "section") {


          return getFileList('./includes', true).then(files => {
            return prompter.prompt({
              type: "select",
              name: "subject",
              message: "choose a Subject",
              choices: [...files],
            });
          }).catch(err => {
            console.error(err);
          });
        }
        return { subject: null };
      })
      .then(({ subject }) => {
        args.subject = subject;
        if (args.subject) {
          return prompter.prompt({
            type: "input",
            name: "fileName",
            message: "What is the file name?",
          });
        }else{
          return { fileName: null };
        }
      })
      .then(({ fileName }) => {

        args.fileName = fileName;
        if (!args.subject) {
          return prompter.prompt({
            type: "input",
            name: "subject",
            message: "What is your NEW subject?",
          });
        }else{
          return { subject: args.subject };
        }

      })
        .then(({ subject }) => {
          args.subject = subject;



          return getFileList('./includes', true).then(files => {
            return { countSubject: files.length}
          }).catch(err => {
            console.error(err);
          });


        }).then(({ countSubject }) => {
          args.countSubject = countSubject;

          return getFileList(`./includes/${args.subject}`, false).then(files => {
            return { countSections: files.length}
          }).catch(err => {
            return { countSections: 0}
          });

        })
      .then(({ countSections }) => {
        args.countSections = countSections;

        const clearSubjectName = args.subject.slice(args.subject.indexOf("_") + 1);
        args.HTMLfileName = `${clearSubjectName}.html`


        args.isSection = false
        args.isSubject = false

        if (!args.fileName){
          args.fileName = "0_wprowadzenie.md"
        }

        if(args.category === 'section'){
          args.isSection = true
          args.fileName = `${args.countSections}_${args.fileName}.md`;
        }else if(args.category === 'newSubject'){
          args.subject = `${args.countSubject}_${args.subject}`;
          args.isSubject = true
        }


        console.log("-> args", args);


        return {
          category: args.category,
          subject: args.subject,
          fileName: args.fileName,
          isSection: args.isSection,
          isSubject: args.isSubject,
          HTMLfileName: args.HTMLfileName
        };
      });
  },
};

// Page add question about getStaticProps -> it will change props types
// https://github.com/vercel/next.js/blob/canary/examples/with-typescript/pages/users/%5Bid%5D.tsx

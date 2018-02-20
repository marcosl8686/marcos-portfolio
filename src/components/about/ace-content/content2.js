export const content2 =`
  /* Marcos is also passionate about Gunpla.
Gunpla not only challanges his precision and detailing skills, but also allows him to be artistic. He loves painting each model differently making them unique */
var fs = require("fs");
var precision = "the quality, condition, or fact of being exact and accurate."
var concentration = "the action or power of focusing one's attention or mental effort."

var gunpla = {

    process: "Following specific instruction to build project",

    effort: precision + concentration,

    enhance: "intensify, increase, or further improve the quality",

    build: function() {
        fs.readFile("instruction.txt", "utf8", function(error, data) {

            if (error) {
                readFileAgain();
            }
            else {
                build(data);
            }
        })
    },
    //How this applies to Development
    codingSkills: {
        detail,
        artistic,
        followInstruction,
        enhance
    }

};`

export default content2;

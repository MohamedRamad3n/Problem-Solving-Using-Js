function findNeedle(haystack) {
    //solution 1
    /*   let index = 0;
      for (let i = 0; i < haystack.length; i++) {
          if (haystack[i] === "needle")
              index = i;
      } */
    //solution 2
    return `found the needle at position ${haystack.indexOf("needle")}`
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));

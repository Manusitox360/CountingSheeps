let list1 = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true, false, false, true , true,  true,  true,  true , false, false, true, true ];
let list2 = [false, false, false ];
      
      const countSheeps = (list) => {
        let sheeps = 0;
        let text = "UPS!!! Wolfs eaten Sheeps";
        for (let i = 0; i < list.length; i++) {
          let vault = list[i];
          if (vault) {
            sheeps++;
          }
        }
        if (sheeps >= 1 ) {
          text = `There are ${sheeps} sheep in total`
        }
        console.log(text)
      };
      countSheeps(list1);
      countSheeps(list2);
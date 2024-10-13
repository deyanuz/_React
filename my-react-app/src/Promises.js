// callback = a function that is passed as an arguement
// to another function

// javacsript promises: an object

function walkDog() {
  const status = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("Walked the dog.");
      } else {
        reject("Didn't walk the dog");
      }
    }, 1500);
  });
}
function clean() {
  const status = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("Cleaned the kitcchen.");
      } else {
        reject("Didn't clean the kitcchen");
      }
    }, 1500);
  });
}
function takeOutTrash() {
  const status = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("Taken the trash out.");
      } else {
        reject("Didn't take the trash out");
      }
    }, 500);
  });
}
// execution stops at first reject
// typical promise version

/* walkDog()
   .then((value) => {
     console.log(value);
     return clean();
   })
   .then((value) => {
     console.log(value);
     return takeOutTrash();
   })
   .then((value) => {
     console.log(value);
     console.log("All tasks done");
   })
   .catch((error) => console.error(error)); */

// async-await version
// async = makes a function return a promise
// await = makes an async function wait for a promise

async function doChores() {
  try {
    const walkD = await walkDog();
    console.log(walkD);
    const cleanC = await clean();
    console.log(cleanC);
    const takeO = await takeOutTrash();
    console.log(takeO);
    console.log("All tasks done");
  } catch (e) {
    console.error(e);
  }
}

doChores();

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      storage &&
      storage.length !== 0
    );
  }
}

if (storageAvailable("localStorage")) {


    // let storage = window.localStorage;
    // // storage.clear();

    // storage.setItem("arrayTasks", JSON.stringify(arrayTasks));

    // console.log(JSON.parse(storage.getItem("x")))

} else {

}
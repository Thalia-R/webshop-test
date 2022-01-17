export function savedWishes() {
  const key = localStorage.getItem("wishItems");

  if (key === null) {
    return [];
  } else {
    return JSON.parse(key);
  }
}

export function saveWishes(key) {
  localStorage.setItem("wishItems", JSON.stringify(key));
  wishCounter(key.length);
}

export function wishCounter(count) {
  var counter = document.getElementById("wishCount");
  counter.innerHTML = parseInt(count);
}

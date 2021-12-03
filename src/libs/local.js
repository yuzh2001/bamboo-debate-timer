const key = 'addkey';
const sto = {
  set(items) {
    localStorage.setItem(key, JSON.stringify(items));
  },
  get() {
    let val = localStorage.getItem(key) || '[]';
    val = JSON.parse(val);
    return val;
  },
  s(k, items) {
    localStorage.setItem(k, JSON.stringify(items));
  },
  g(k) {
    let val = localStorage.getItem(k) || '[]';
    val = JSON.parse(val);
    return val;
  },

};

export default sto;
